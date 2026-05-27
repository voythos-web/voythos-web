'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

import NavItem from "./NavItem";
import Image from "next/image";
import Button from "../Button";
import { font_med } from "@/app/fonts";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // if not on home page - always set as scrolled
        if (pathname !== '/') {
            setIsScrolled(true);
            return;
        }

        const handleScroll = () => {
            const heroSection = document.getElementById('voythos');
            if (!heroSection) {
                setIsScrolled(true); // setting as fallback if not rendered immediately
                return;
            }

            // const heroHeight = heroSection.offsetHeight;
            // const scrollY = window.scrollY
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            setIsScrolled(heroBottom <= 80);

            // setIsScrolled(scrollY > heroHeight - 80);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname])

    return (
        <div
            className={`
                fixed 
                z-10 
                top-0 
                left-0 
                w-full 
                flex 
                flex-row 
                justify-between 
                gap-2 
                items-center 
                py-6
                md:px-13 
                px-4
                transition-colors
                duration-300
                ${isScrolled ? 'bg-slate-50 text-zinc-800' : 'bg-none text-indigo-50'}
            `}
        >
            {/* logo */}
            <Image 
                onClick={() => router.push('/')}
                alt="Logo"
                className="cursor-pointer transition-all duration-300 w-[200px]"
                height='200'
                width='200'
                src={isScrolled ? '/images/logo_blue_2.svg' : '/images/logo_light_2.svg'}
            />

            {/* desktop nav */}
            <div className="hidden md:flex flex-row gap-4">
                <NavItem href="/solutions" currentPage={pathname} isScrolled={isScrolled}>Solutions</NavItem>
                <NavItem href="/#company" currentPage={pathname} isScrolled={isScrolled}>Company</NavItem>
                <NavItem href="/news" currentPage={pathname} isScrolled={isScrolled}>News</NavItem>
            </div>

            {/* desktop sign in + contact */}
            <div className="hidden md:flex flex-row gap-4 items-center">
                <a
                    href="https://app.voythos.io/"
                    rel="noopener noreferrer"
                    className={`
                        tracking-wider
                        transition-colors
                        duration-200
                        px-4
                        py-1.5
                        text-base
                        cursor-pointer
                        bg-none
                        hover:bg-light/20
                        ease-in
                        ${isScrolled ? 'text-zinc-800 hover:bg-primary/10' : 'text-indigo-50 hover:bg-indigo-50/20'}
                        ${font_med.className}
                    `}
                >
                    Try the preview
                </a>
                <Button href="/contact" text="Contact us" isScrolled={isScrolled}/>
            </div>

            {/* mobile menu button */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden"
            >
                {isMenuOpen ? <IoMdClose size={36} /> : <MdMenu size={36} />}
            </button>

            {/* mobile dropdown menu */}
            {isMenuOpen && (
                <div
                    className={`
                        absolute 
                        inset-0 
                        z-10
                        top-full
                        left-0
                        w-full
                        h-screen
                        flex
                        flex-col
                        px-2
                        gap-6
                        py-4
                        ${isScrolled ? 'bg-slate-50 text-zinc-800' : 'bg-slate-50 text-zinc-800'}
                        md:hidden
                    `}
                >
                    <div className="flex flex-row justify-between pr-4 group"
                    onClick={() => {
                        router.push('/solutions');
                        setIsMenuOpen(false);
                    }}>
                        <NavItem
                            href="/solutions"
                            currentPage={pathname}
                            isScrolled={isScrolled}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Solutions
                        </NavItem>
                        <MdArrowForwardIos size={20} className="text-zinc-800 mt-2"/>
                    </div>
                    <hr className="mx-4 text-zinc-300"/>

                    <div className="flex flex-row justify-between pr-4 group" onClick={() => {
                        router.push('/#company');
                        setIsMenuOpen(false);
                    }}>
                        <NavItem 
                            href="/#company" 
                            currentPage={pathname} 
                            isScrolled={isScrolled}
                            onClick={() => {
                                localStorage.setItem('scrollTarget', 'solutions');
                                setIsMenuOpen(false);
                                router.push('/');
                            }}
                        >
                                Company
                        </NavItem>
                        <MdArrowForwardIos size={20} className="text-zinc-800 mt-2"/>
                    </div>
                    <hr className="mx-4 text-zinc-300"/>

                    <div className="flex flex-row justify-between pr-4 group" onClick={() => {
                        router.push('/news');
                        setIsMenuOpen(false);
                    }}>
                        <NavItem href="/news" currentPage={pathname} isScrolled={isScrolled} onClick={() => setIsMenuOpen(false)}>News</NavItem>
                        <MdArrowForwardIos size={20} className="text-zinc-800 mt-2"/>
                    </div>
                    <hr className="mx-4 text-zinc-300"/>

                    <a
                        href="https://app.voythos.io/"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex flex-row justify-between pr-4 group"
                    >
                        <span
                            className={`
                                tracking-wider
                                px-4
                                py-1.5
                                text-xl
                                text-zinc-800
                                cursor-pointer
                                ${font_med.className}
                            `}
                        >
                            Sign in / Sign&nbsp;up
                        </span>
                        <MdArrowForwardIos size={20} className="text-zinc-800 mt-2"/>
                    </a>
                    <hr className="mx-4 text-zinc-300"/>

                    <div className="w-full px-4" onClick={() => setIsMenuOpen(false)}>
                        <Link
                            href='/contact'
                            className={`
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
                                text-white
                                bg-primary
                                py-2
                                ${font_med.className}    
                            `}
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;