'use client';

import { font_med } from "../fonts";

interface ButtonBodyProps {
    href: string;
    text: string;
    colorprimary?: boolean;
}

const ButtonBody: React.FC<ButtonBodyProps> = ({
    href,
    text,
    colorprimary
}) => {
    return (
        <button className=
            {`
                text-lg 
                py-1.5 
                px-4 
                cursor-pointer 
                transition 
                duration-200 
                ease-in 
                ${colorprimary ? 'bg-primary text-light hover:bg-primary/65' : 'bg-light text-zinc-800 hover:bg-light/75 hover:outline hover:outline-light'}
                ${font_med.className}
            `}>
            <a href={href} rel="noopener noreferrer" target="_blank">
                {text}
            </a>
        </button>
    );
}

export default ButtonBody;