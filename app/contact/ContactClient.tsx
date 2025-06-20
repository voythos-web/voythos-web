'use client';

import { font_head } from "../fonts";
import { font_med } from "../fonts";
import Button from "../components/Button";

import Link from "next/link";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ButtonBody from "../components/ButtonBody";

const ContactClient = () => {
    return (
        <div className="flex flex-col md:h-screen min-h-screen w-screen items-center justify-center md:px-32 px-4 bg-[url('/images/backgrounds/grid_bg_white2.png')] bg-cover">
            <div className="flex md:flex-row flex-col md:gap-48">
                <div className="flex flex-col md:w-1/2 pt-16 md:pt-0">
                    <div className={`text-zinc-800 md:text-5xl text-3xl ${font_head.className}`}>
                        Contact Us
                    </div>
                    <div className="text-zinc-800 md:text-xl text-lg pt-6">
                        We are always interested in speaking with physicians, healthcare stakeholders, and individuals with technical expertise.
                    </div>
                    <div className="text-zinc-800 md:text-xl text-lg md:pt-6 pt-4">
                        Send us an email to get in touch with questions or feedback. If you’d like to stay updated with company progress and product launches, join our mailing list.
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 pt-6 md:pt-0">
                    <div className={`text-zinc-800 md:text-3xl text-2xl`}>
                        Email
                    </div>
                    <div className="pt-4"> 
                        <ButtonBody href="mailto:joe@voythos.io" text="Send us a message" colorprimary/>
                    </div>
                    <div className={`text-zinc-800 pt-10 md:text-3xl text-2xl`}>
                        Mailing list
                    </div>
                    <div className="pt-4"> 
                        <ButtonBody href="mailto:joe@voythos.io" text="Sign up here" colorprimary/>
                    </div>
                    <div className={`text-zinc-800 pt-10 md:text-3xl text-2xl`}>
                        Connect with us
                    </div>
                    <div className="flex flex-row gap-2 pt-2">
                        <a href="https://www.linkedin.com/company/voythos-ai/posts/?feedView=all" rel="noopener noreferrer" target="_blank">
                            <div className="bg-zinc-800 p-2 w-fit h-fit hover:opacity-65 transition duration-200">
                                <FaLinkedinIn size={20} className="text-white"/>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/voythos-ai/posts/?feedView=all" rel="noopener noreferrer" target="_blank">
                            <div className="bg-zinc-800 p-2 w-fit h-fit hover:opacity-65 transition duration-200">
                                <FaYoutube size={20} className="text-white"/>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/voythos-ai/posts/?feedView=all" rel="noopener noreferrer" target="_blank">
                            <div className="bg-zinc-800 p-2 w-fit h-fit hover:opacity-65 transition duration-200">
                                <FaXTwitter size={20} className="text-white"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactClient;