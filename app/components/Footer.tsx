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

                <nav className="flex md:flex-row flex-col md:flex-wrap md:items-center md:gap-6 gap-3 md:text-base text-lg">
                    <Link href="/solutions" className="hover:opacity-60 transition duration-200">
                        Solutions
                    </Link>
                    <Link href="/#company" className="hover:opacity-60 transition duration-200">
                        Company
                    </Link>
                    <Link href="/news" className="hover:opacity-60 transition duration-200">
                        News
                    </Link>
                    <Link href="/blog" className="hover:opacity-60 transition duration-200">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:opacity-60 transition duration-200">
                        Contact
                    </Link>
                </nav>

                <div className="text-sm opacity-70 md:text-right">
                    © {year} Voythos, Inc.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
