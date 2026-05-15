import { font_head, font_med } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    date: string;
    excerpt: string;
    href: string;
    cover?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, excerpt, href, cover }) => {
    return (
        <Link
            href={href}
            className="
                w-full
                relative
                group
                border
                border-zinc-400
                hover:border-primary
                bg-lightbg
                flex
                flex-col
                transition
                cursor-pointer
                duration-200
                ease-in
                overflow-hidden
            "
        >
            {cover && (
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                    <Image
                        src={cover}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-300 ease-in"
                    />
                </div>
            )}
            <div className="flex flex-col justify-between flex-1 md:pt-6 pt-4 md:pl-10 md:pr-10 px-4 md:pb-8 pb-6">
                <div>
                    <div
                        className={`
                            md:text-2xl
                            text-xl
                            text-zinc-800
                            group-hover:text-primary
                            transition
                            duration-200
                            ease-in
                            ${font_head.className}
                        `}
                    >
                        {title}
                    </div>
                    <div className={`text-base text-zinc-800 pt-3 ${font_med.className}`}>
                        {date}
                    </div>
                    {excerpt && (
                        <div className="text-base text-zinc-700 pt-4 line-clamp-3">
                            {excerpt}
                        </div>
                    )}
                </div>
                <div className="pt-6 flex justify-end">
                    <span
                        className="
                            text-base
                            py-1.5
                            px-4
                            border
                            border-zinc-800
                            text-zinc-800
                            group-hover:bg-light
                            transition
                            duration-200
                        "
                    >
                        Read more
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
