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

    // Standalone sales pages render their own chrome — skip the site navbar entirely.
    // (Must come after all hooks to satisfy the rules of hooks.)
    if (pathname?.startsWith('/aortanavigator')) return null;

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
            {/* logo — wrapped in Link so it's a proper navigation anchor (accessibility + right-click works) */}
            <Link href="/" className="flex-shrink-0" aria-label="Voythos home">
                <Image
                    alt="Voythos"
                    className="cursor-pointer transition-all duration-300 w-[200px]"
                    height='200'
                    width='200'
                    src={isScrolled ? '/images/logo_blue_2.svg' : '/images/logo_light_2.svg'}
                />
            </Link>

            {/* desktop nav */}
            <div className="hidden md:flex flex-row gap-4 items-center">
                {/* Solutions with dropdown */}
                <div className="relative group">
                    <NavItem href="/solutions" currentPage={pathname} isScrolled={isScrolled}>Solutions</NavItem>
                    {/* dropdown (pt-2 inside the wrapper creates a hover bridge between the nav item and the menu) */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-20">
                        <div className="bg-slate-50 border border-zinc-200 shadow-lg min-w-[300px]">
                            <Link href="/solutions" className="block px-5 py-4 hover:bg-light/30 transition duration-150">
                                <div className={`text-zinc-800 ${font_med.className}`}>AortaNavigator</div>
                                <div className="text-zinc-600 text-sm pt-0.5">Predictive intelligence for AAA, TBAD, TAA</div>
                            </Link>
                            <Link href="/rvupilot" className="block px-5 py-4 hover:bg-light/30 transition duration-150 border-t border-zinc-200">
                                <div className={`text-zinc-800 ${font_med.className}`}>
                                    RVUPilot
                                    <span className="text-primary text-xs tracking-[0.2em] font-mono ml-2 align-middle">BETA</span>
                                </div>
                                <div className="text-zinc-600 text-sm pt-0.5">Real-time RVU coding for surgeons</div>
                            </Link>
                            <Link href="/pythia" className="block px-5 py-4 hover:bg-light/30 transition duration-150 border-t border-zinc-200">
                                <div className={`text-zinc-800 ${font_med.className}`}>
                                    Pythia
                                    <span className="text-primary text-xs tracking-[0.2em] font-mono ml-2 align-middle">IN DEV</span>
                                </div>
                                <div className="text-zinc-600 text-sm pt-0.5">A frontier model for the entire aorta</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <NavItem href="/#company" currentPage={pathname} isScrolled={isScrolled}>Company</NavItem>
                <NavItem href="/news" currentPage={pathname} isScrolled={isScrolled}>News</NavItem>
            </div>

            {/* desktop contact */}
            <div className="hidden md:flex">
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
                    {/* Solutions section header + child rows */}
                    <div className="px-4 pt-2 text-zinc-500 text-xs tracking-[0.25em] font-mono">
                        SOLUTIONS
                    </div>
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
                            AortaNavigator
                        </NavItem>
                        <MdArrowForwardIos size={20} className="text-zinc-800 mt-2"/>
                    </div>
                    <div className="flex flex-row justify-between pr-4 group"
                    onClick={() => {
                        router.push('/rvupilot');
                        setIsMenuOpen(false);
                    }}>
                        <NavItem
                            href="/rvupilot"
                            currentPage={pathname}
                            isScrolled={isScrolled}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            RVUPilot <span className="text-primary text-xs tracking-[0.2em] font-mono ml-1 align-middle">BETA</span>
                        </NavItem>
                        <MdArrowForwardIos size={20} className="text-zinc-800 mt-2"/>
                    </div>
                    <div className="flex flex-row justify-between pr-4 group"
                    onClick={() => {
                        router.push('/pythia');
                        setIsMenuOpen(false);
                    }}>
                        <NavItem
                            href="/pythia"
                            currentPage={pathname}
                            isScrolled={isScrolled}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pythia <span className="text-primary text-xs tracking-[0.2em] font-mono ml-1 align-middle">IN DEV</span>
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