'use client';

import { useRouter } from "next/navigation";

interface NavItemProps {
    href: string;
    currentPage?: string;
    children: React.ReactNode;
    isScrolled?: boolean;
    onClick?: () => void;
  }

const NavItem: React.FC<NavItemProps> = ({
    href,
    currentPage,
    children,
    isScrolled,
    onClick
}) => {
    const isActive = currentPage === href

    const router = useRouter();

    const goToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(); // closes mobile dropdown
        }

        const isAnchorLink = href.startsWith('/#');

        if (!isAnchorLink) {
            // Navigate normally
            router.push(href);
        }

        const id = href.split('#')[1];
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 20;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    return (

        <a
            href={href}
            onClick={goToSection}
            className={`
                tracking-wider
                transition-colors
                duration-200
                px-4
                py-1.5
                md:text-base
                text-xl
                cursor-pointer
                ${isScrolled ? 'text-zinc-800 hover:bg-primary/10 duration-200' : 'md:text-indigo-50 text-zinc-800 hover:bg-indigo-50/20 duration-200'}
                ${isActive ? 'bg-indigo-50/30' : 'bg-none hover:bg-light/20 duration-200 ease-in'}
            `}
        >
            {children}
        </a>
    )
}

export default NavItem;