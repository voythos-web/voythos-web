'use client';

import { font_head } from "@/app/fonts";
import { font_med } from "@/app/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NewsCardProps {
    text: string;
    date: string;
    href: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
    text,
    date,
    href
}) => {
    const router = useRouter();

    return (
        <div
            className="
                w-full 
                md:h-96 
                h-72
                relative 
                group
                border 
                border-zinc-400 
                hover:border-primary
                bg-lightbg
                md:pt-8 
                pt-4
                md:pl-10 
                px-4
                flex 
                flex-col 
                justify-between
                transition
                cursor-pointer
                duration-200
                ease-in
            "
            onClick={() => router.push(href)}
        >
            <div>
                <div 
                    className={`
                        md:text-3xl 
                        text-2xl
                        text-zinc-800 
                        group-hover:text-primary
                        transition
                        duration-200
                        ease-in
                        md:pr-5
                        ${font_head.className}
                    `}>
                    {text}
                </div>
                <div className={`text-lg text-zinc-800 pt-5 ${font_med.className}`}>
                    {date}
                </div>
            </div>
            <div className="pb-8 flex justify-end md:pr-10 pr-4"> 
                <button
                    className="
                        text-lg 
                        py-1.5 
                        px-4 
                        cursor-pointer
                        border
                        border-zinc-800
                        text-zinc-800
                        hover:bg-light
                        transition
                        duration-200
                    "
                >
                    <Link
                        href={href}
                    >
                        Read more
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default NewsCard;