'use client';

import { font_head } from "@/app/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

interface NewsPageProps {
    heading: string;
    media: string; // image path, YouTube video ID/URL, or Vimeo URL/ID
    bodytext: string;
    href?: string;
    nextpage: string;
    date: string;
    gallery?: string[]; // optional supplementary images shown below the body
}

type ResolvedMedia =
    | { kind: "youtube"; id: string }
    | { kind: "vimeo"; id: string }
    | { kind: "image"; src: string };

function resolveMedia(media: string): ResolvedMedia {
    // Vimeo: vimeo.com/<id> or player.vimeo.com/video/<id>
    if (media.includes("vimeo.com")) {
        try {
            const url = new URL(media);
            const parts = url.pathname.split("/").filter(Boolean);
            const last = parts[parts.length - 1];
            if (/^\d+$/.test(last)) return { kind: "vimeo", id: last };
        } catch {
            // not a URL, fall through
        }
    }

    // YouTube: youtube.com or youtu.be URL
    if (media.includes("youtube.com") || media.includes("youtu.be")) {
        try {
            const url = new URL(media);
            if (url.hostname.includes("youtu.be")) {
                return { kind: "youtube", id: url.pathname.slice(1) };
            }
            const v = url.searchParams.get("v");
            if (v) return { kind: "youtube", id: v };
        } catch {
            // fall through
        }
    }

    // YouTube: bare 11-char ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(media)) {
        return { kind: "youtube", id: media };
    }

    return { kind: "image", src: media };
}

const NewsPage: React.FC<NewsPageProps> = ({
    heading,
    media,
    bodytext,
    href,
    nextpage,
    date,
    gallery
}) => {
    const router = useRouter();
    const resolved = resolveMedia(media);

    return (
        <div className="flex flex-col md:mt-32 mt-24 md:mx-64 mx-4">
            <div className="text-xl text-zinc-800">
                {date}
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
                <div className={`md:text-5xl text-3xl text-zinc-800 ${font_head.className}`}>
                    {heading}
                </div>
                <div className="pt-10 w-full flex justify-center">
                    {resolved.kind === "youtube" ? (
                        <div className="w-full aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${resolved.id}`}
                                title="YouTube video player"
                                allow="accelerometer; encrypted-media; autoplay; clipboard-write; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    ) : resolved.kind === "vimeo" ? (
                        <div className="w-full aspect-video">
                            <iframe
                                src={`https://player.vimeo.com/video/${resolved.id}?title=0&byline=0&portrait=0&badge=0`}
                                title={heading}
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="w-full h-full"
                            />
                        </div>
                    ) : (
                        <Image
                            src={resolved.src}
                            alt="News Media"
                            height={750}
                            width={750}
                            className="bg-cover"
                        />
                    )}
                </div>
                <div className="pt-8 md:text-xl text-lg text-zinc-800">
                    {bodytext}
                    {href && (
                        <div className="pt-4 text-zinc-800 md:text-xl text-lg">
                            You can learn more
                            <a target="_blank" rel="noopener noreferrer" href={href} className="underline underline-offset-4 pl-1 hover:opacity-60 cursor-pointer transition">
                                here.
                            </a>
                        </div>
                    )}
                </div>
            </div>
            {gallery && gallery.length > 0 && (
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-3 md:pt-12 pt-8">
                    {gallery.map((src, i) => (
                        <div
                            key={i}
                            className="relative w-full aspect-[3/2] overflow-hidden bg-lightbg"
                        >
                            <Image
                                src={src}
                                alt={`${heading} — image ${i + 2}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            <div className="flex flex-row justify-between md:pb-16 pb-8">
                <div className="flex flex-row md:mt-20 mt-6 group cursor-pointer"
                    onClick={() => router.push('/news')}
                >
                    <MdKeyboardArrowLeft className="text-zinc-600 text-2xl mt-1 group-hover:opacity-50 group-hover:-translate-x-2 duration-200 ease-in transition"/>
                    <div className="text-2xl text-zinc-600 group-hover:opacity-50">
                        All news
                    </div>
                </div>
                <div className="flex flex-row md:mt-20 mt-6 group cursor-pointer"
                    onClick={() => router.push(nextpage)}
                >
                    <div className="text-2xl text-zinc-600 group-hover:opacity-50">
                        Next
                    </div>
                    <MdKeyboardArrowRight className="text-zinc-600 text-2xl mt-1 group-hover:opacity-50 group-hover:translate-x-2 duration-200 ease-in transition"/>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;