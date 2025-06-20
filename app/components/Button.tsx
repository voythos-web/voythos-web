'use client';

import Link from "next/link";
import { IconType } from "react-icons";
import { font_med } from "../fonts";

interface ButtonProps {
    href: string;
    text: string;
    external?: boolean;
    outline?: boolean;
    icon?: IconType;
    isScrolled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    href,
    text,
    external,
    outline,
    icon: Icon,
    isScrolled
}) => {
    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 text-base hover:opacity-50 cursor-pointer transition"
            >
                {text}
            </a>
        );
    }

    // conditional tailwind classes
    const baseClasses = `
        group
        md:inline-flex
        flex
        w-full
        md:w-auto
        items-center
        justify-center
        md:justify-none
        transition
        ease-out
        duration-300
        md:text-base
        text-xl
        cursor-pointer
        gap-x-1 
        ${font_med.className}
    `;

    const padding = outline ? 'px-3 py-2' : 'px-4 py-2';

    const hover = outline ? 'hover:bg-light hover:text-zinc-800 transition duration-300' : ''

    const outlineClasses = outline ? 'border border-light' : '';

    const bgTextCombo = (() => {
        if (outline) {
            return isScrolled 
                ? 'border-primary text-primary hover:bg-primary hover:text-indigo-50' 
                : 'border-indigo-50 text-indigo-50 hover:bg-indigo-50 hover:text-primary';
        } else {
            return isScrolled ? 'bg-primary text-indigo-50 hover:bg-slate-50 hover:text-zinc-800 hover:outline hover:outline-zinc-800 transition duration-300' : 'bg-indigo-50 text-zinc-800 hover:bg-primary hover:text-light hover:outline hover:outline-light transition duration-300'
        }
    })();

    return (
        <Link
            href={href}
            className={`
                ${baseClasses}
                ${padding}
                ${hover}
                ${outlineClasses}
                ${bgTextCombo}    
            `}
        >
            <span>{text}</span>
            {Icon && <Icon size={20} className="group-hover:translate-x-1 duration-300 transition"/>}
        </Link>
    )

}

export default Button;