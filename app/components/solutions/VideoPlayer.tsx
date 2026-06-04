'use client';

import Image from "next/image";
import { useState } from "react";

interface VideoPlayerProps {
    src: string;
    poster: string;
    title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying) {
        return (
            <video
                src={src}
                autoPlay
                controls
                playsInline
                className="block w-full aspect-video bg-black"
            />
        );
    }

    return (
        <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={title ? `Play ${title}` : "Play video"}
            className="relative block w-full aspect-video bg-black overflow-hidden group cursor-pointer"
        >
            <Image
                src={poster}
                alt={title || "Video poster"}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
            />
            {/* subtle darken on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200" />
            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="
                    flex items-center justify-center
                    md:w-20 md:h-20 w-16 h-16
                    rounded-full
                    bg-white/95 backdrop-blur-sm
                    group-hover:bg-white
                    group-hover:scale-105
                    transition-all duration-200
                    shadow-[0_8px_28px_rgba(0,0,0,0.35)]
                ">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="md:w-7 md:h-7 w-5 h-5 text-zinc-900 translate-x-[2px]"
                        aria-hidden
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </button>
    );
};

export default VideoPlayer;
