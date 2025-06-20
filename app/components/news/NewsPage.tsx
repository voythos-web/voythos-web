'use client';

import { font_head } from "@/app/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

interface NewsPageProps {
    heading: string;
    media: string; // can be either image path or YouTube video ID
    bodytext: string;
    href?: string;
    nextpage: string;
    date: string;
}

function isYouTubeMedia(media: string): boolean {
    return (
        media.includes("youtube.com") ||
        media.includes("youtu.be") ||
        /^[a-zA-Z0-9_-]{11}$/.test(media) // direct video ID
    );
}

function extractYouTubeID(media: string): string | null {
    try {
        const url = new URL(media);
        if (url.hostname.includes("youtu.be")) {
            return url.pathname.slice(1);
        } else if (url.hostname.includes("youtube.com")) {
            return url.searchParams.get("y");
        }
    } catch {
        // if not full URL just video ID
        if (/^[a-zA-Z0-9_-]{11}$/.test(media)) {
            return media;
        }
    }
    return null;
}

const NewsPage: React.FC<NewsPageProps> = ({
    heading,
    media,
    bodytext,
    href,
    nextpage,
    date
}) => {
    const router = useRouter();
    const isVideo = isYouTubeMedia(media);
    const videoID = extractYouTubeID(media);

    return (
        <div className="flex flex-col md:mt-32 mt-24 md:mx-64 mx-4">
            <div className="text-xl text-zinc-800">
                {date}
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
                <div className={`md:text-5xl text-3xl text-zinc-800 ${font_head.className}`}>
                    {heading}
                </div>
                <div className="pt-10">
                    {isVideo && videoID ? (
                        <div className="w-full aspect-video md:h-96 h-52">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoID}`}
                                title="YouTube video player"
                                allow="acceleromter; encrypted-media"
                                allowFullScreen
                                className="w-full h-full"
                            >
                            </iframe>
                        </div>
                    ) : (
                        <Image 
                            src={media}
                            alt="News Media"
                            height={750}
                            width={750}
                            className="bg-cover"
                        />
                    )}
                </div>
                <div className="pt-8 md:text-xl text-lg text-zinc-800">
                    {bodytext}
                    <div className="pt-4 text-zinc-800 md:text-xl text-lg">
                        You can learn more
                        <a target="_blank" rel="noopener noreferrer" href={href} className="underline underline-offset-4 pl-1 hover:opacity-60 cursor-pointer transition">
                            here.
                        </a>
                    </div>
                </div>
            </div>
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