'use client';

import { font_head, font_med } from "@/app/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface InsightCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    href: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
    title,
    excerpt,
    date,
    category,
    href
}) => {
    const router = useRouter();

    return (
        <div
            className="
                w-full
                relative
                group
                border
                border-zinc-400
                hover:border-primary
                bg-lightbg
                md:p-10
                p-6
                flex
                flex-col
                justify-between
                transition
                cursor-pointer
                duration-200
                ease-in
                min-h-80
            "
            onClick={() => router.push(href)}
        >
            <div>
                <div className={`text-sm tracking-wide uppercase text-primary ${font_med.className}`}>
                    {category}
                </div>
                <div
                    className={`
                        md:text-3xl
                        text-2xl
                        text-zinc-800
                        group-hover:text-primary
                        transition
                        duration-200
                        ease-in
                        pt-3
                        ${font_head.className}
                    `}
                >
                    {title}
                </div>
                <div className="text-zinc-600 pt-4 text-base leading-relaxed line-clamp-3">
                    {excerpt}
                </div>
            </div>
            <div className="flex flex-row justify-between items-center pt-6">
                <div className={`text-base text-zinc-500 ${font_med.className}`}>
                    {date}
                </div>
                <button
                    className="
                        text-base
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
                    <Link href={href}>
                        Read more
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default InsightCard;
