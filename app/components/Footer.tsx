import Link from "next/link";
import Image from "next/image";
import { font_med } from "@/app/fonts";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            className={`bg-dark text-light w-full md:px-13 px-4 md:py-12 py-10 ${font_med.className}`}
        >
            <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-8">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/images/logo_light_2.svg"
                        alt="Voythos"
                        width={140}
                        height={40}
                        className="cursor-pointer hover:opacity-80 transition duration-200"
                    />
                </Link>

                {/* desktop nav with Solutions hover dropdown */}
                <nav className="hidden md:flex md:flex-row md:flex-wrap md:items-center md:gap-6 text-base">
                    {/* Solutions with dropdown that opens upward (pb-2 inside the wrapper bridges the hover gap to the menu) */}
                    <div className="relative group">
                        <Link href="/solutions" className="hover:opacity-60 transition duration-200">
                            Solutions
                        </Link>
                        <div className="absolute bottom-full left-0 pb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-20">
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
                    <Link href="/#company" className="hover:opacity-60 transition duration-200">Company</Link>
                    <Link href="/news" className="hover:opacity-60 transition duration-200">News</Link>
                    <Link href="/blog" className="hover:opacity-60 transition duration-200">Blog</Link>
                    <Link href="/contact" className="hover:opacity-60 transition duration-200">Contact</Link>
                </nav>

                {/* mobile nav — flatten Solutions into the two products since there's no hover */}
                <nav className="flex md:hidden flex-col gap-3 text-lg">
                    <Link href="/solutions" className="hover:opacity-60 transition duration-200">
                        AortaNavigator
                    </Link>
                    <Link href="/rvupilot" className="hover:opacity-60 transition duration-200">
                        RVUPilot <span className="text-primary/80 text-xs tracking-[0.2em] font-mono ml-1 align-middle">BETA</span>
                    </Link>
                    <Link href="/pythia" className="hover:opacity-60 transition duration-200">
                        Pythia <span className="text-primary/80 text-xs tracking-[0.2em] font-mono ml-1 align-middle">IN DEV</span>
                    </Link>
                    <Link href="/#company" className="hover:opacity-60 transition duration-200">Company</Link>
                    <Link href="/news" className="hover:opacity-60 transition duration-200">News</Link>
                    <Link href="/blog" className="hover:opacity-60 transition duration-200">Blog</Link>
                    <Link href="/contact" className="hover:opacity-60 transition duration-200">Contact</Link>
                </nav>

                <div className="text-sm opacity-70 md:text-right">
                    © {year} Voythos, Inc.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
