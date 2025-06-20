'use client';

import ButtonBody from "../ButtonBody";
import { font_med } from "@/app/fonts";
import { font_head } from "@/app/fonts";

interface NewsMainProps {
    text: string;
    date: string;
    href: string;
    buttontext: string;
}

const NewsMain: React.FC<NewsMainProps> = ({
    text,
    date,
    href,
    buttontext
}) => {
    return (
        <div className="
            md:w-1/3 
            w-full
            md:h-80
            h-72 
            relative 
            border 
            border-light 
            pt-8 
            pl-10 
            flex 
            flex-col 
            justify-between
        ">
            <div>
                <div className={`md:text-2xl text-xl text-light md:pr-5 pr-10 ${font_head.className}`}>
                    {text}
                </div>
                <div className={`text-lg text-light pt-4 ${font_med.className}`}>
                    {date}
                </div>
            </div>
            <div className="pb-8 flex justify-end pr-10"> 
                <ButtonBody href={href} text={buttontext}/>
            </div>
        </div>
    );
}

export default NewsMain;