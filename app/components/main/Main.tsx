'use client';

import ParticleAorta from "./ParticleAorta";
import Button from "../Button";
import { font_head } from "@/app/fonts";
import { font_med } from "@/app/fonts";
import ButtonBody from "../ButtonBody";
import NewsMain from "../news/NewsMain";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Main = () => {

    useEffect(() => {
        const targetId = localStorage.getItem('scrollTarget');
        if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
                const yOffset = -20
                const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
            localStorage.removeItem('scrollTarget')
        }
    }, [])

    return (
        <div className="overflow-x-hidden">

            {/* hero section */}
            <section 
                id="voythos"
                className="
                    bg-[url('/images/backgrounds/grid_bg_blue.png')]
                    bg-cover
                    md:h-screen
                    min-h-screen
                    w-screen
                    flex
                    flex-col
                    justify-center
                    items-center
                    px-8
                    md:px-0
                "
            >
                <div className="flex md:flex-row flex-col md:items-center md:justify-center">
                    <div className="flex flex-col md:w-1/2 md:pl-20">
                        <div className={`text-indigo-50 md:text-8xl/22 text-5xl ${font_head.className}`}>
                            Transforming the delivery of aortic care.
                        </div>
                        <div className="hidden md:block text-indigo-50 text-xl pt-4 pr-16">
                            We’re a physician-founded startup integrating the full spectrum of patient data into individual trajectories for complex cardiovascular diseases.
                        </div>
                        <div className="pt-6 hidden md:block">
                            <Button 
                                href="#solutions"
                                text="Discover our solutions"
                                outline
                            />
                        </div>
                    </div>
                    <div className="hidden md:block w-1/2">
                        <ParticleAorta />
                    </div>
                    <div className="md:hidden relative h-[250px] scale-[0.6] origin-top translate-x-12 mt-4">
                        <ParticleAorta />
                    </div>
                    <div className={`md:hidden text-indigo-50 text-xl pt-4 ${font_med.className}`}>
                        We’re a physician-founded startup integrating the full spectrum of patient data into individual trajectories for complex cardiovascular diseases.
                    </div>
                </div>
            </section>

            {/* solutions */}
            <section
                id="solutions"
                className="
                    bg-[url('/images/backgrounds/wave_bg.png')]
                    bg-cover
                    md:h-screen
                    min-h-screen
                    w-screen
                    flex
                    flex-col
                    justify-center
                    items-center
                    md:px-20
                    px-4
                "
            >
                <div className="flex md:flex-row flex-col md:items-start md:justify-center md:gap-52 w-full">
                    <div className="flex flex-col md:w-1/2">
                        <div className={`md:text-4xl text-2xl text-light ${font_head.className}`}>
                            Building innovative, multimodal AI solutions centered around clinical care and rigorous research.
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2 pt-8">
                        <div className={`text-light md:text-3xl text-xl ${font_med.className}`}>
                            Predicting patient trajectories
                        </div>
                        <div className="text-light md:text-2xl text-lg md:pt-4 pt-3">
                            to improve physician decision-making and planning for courses of treatment
                        </div>
                        <hr className="text-light md:mt-8 mt-6"/>
                        <div className={`text-light pt-8 md:text-3xl text-xl ${font_med.className}`}>
                            Targeting cardiovascular diseases
                        </div>
                        <div className="text-light md:text-2xl text-lg md:pt-4 pt-3">
                            starting with complex Type B aortic dissections, an unmet clinical need
                        </div>
                        <hr className="text-light md:mt-8 mt-6"/>
                        <div className={`text-light pt-8 md:text-3xl text-xl ${font_med.className}`}>
                            Utilizing multimodal data
                        </div>
                        <div className="text-light md:text-2xl text-lg md:pt-4 pt-3">
                            including medical images and clinical notes for richer patient representations
                        </div>
                    </div>
                </div>
            </section>

            {/* company */}
            <section
                id="company"
                className="
                    bg-[url('/images/backgrounds/grid_bg_white2.png')]
                    bg-cover
                    h-fit
                    w-screen
                    flex
                    flex-col
                    md:px-20
                    px-4
                    md:pb-20
                    pb-10
                "
            >
                <div className={`flex flex-col text-zinc-800 md:text-4xl text-2xl md:pt-20 pt-10 ${font_head.className}`}>
                    We are a team with one goal: to improve patient care with emerging technologies grounded in clinical expertise.
                </div>
                <div className={`
                        text-primary 
                        text-xl 
                        md:pt-8
                        pt-4
                        h-fit
                        md:w-fit
                        w-screen
                        duration-200
                        ease-in
                        transition
                        ${font_head.className}`}
                >
                    <Link href={'/contact'} className="cursor-pointer px-3 py-1.5 hover:bg-indigo-200/50 duration-200 transition">
                        Join our team
                    </Link>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center mt-12">
                    <div className="flex flex-col md:w-1/2">
                        <div className="text-zinc-800 text-xl">
                            Leadership
                        </div>
                        <div className="flex flex-row md:gap-10 justify-between md:justify-normal pt-5">
                            <div className="flex flex-col md:w-[220px] w-[150px]">
                                <Image 
                                    src='/images/about/sophia.svg'
                                    alt="Sophia Khan"
                                    height={200}
                                    width={200}
                                    className="bg-cover"
                                />
                                <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                                    Sophia Khan, MD
                                </div>
                                <div className="text-zinc-800 text-base">
                                    Founder & CMO
                                </div>
                                <div className="text-zinc-800 text-base pt-2">
                                    Assistant Professor, Cardiothoracic and Vascular Surgery, UT Health
                                </div>
                            </div>
                            <div className="flex flex-col md:w-[220px] w-[150px]">
                                <Image 
                                    src='/images/about/joe.svg'
                                    alt="Joe Makoid"
                                    height={200}
                                    width={200}
                                    className="bg-cover"
                                />
                                <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                                    Joe Makoid
                                </div>
                                <div className="text-zinc-800 text-base">
                                    CEO
                                </div>
                                <div className="text-zinc-800 text-base pt-2">
                                    Prev. Digital Health Sales, Johnson & Johnson
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col w-[220px]">
                                <Image 
                                    src='/images/about/jordan.svg'
                                    alt="Jordan Graves"
                                    height={200}
                                    width={200}
                                    className="bg-cover"
                                />
                                <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                                    Jordan Graves
                                </div>
                                <div className="text-zinc-800 text-base">
                                    CTO
                                </div>
                                <div className="text-zinc-800 text-base pt-2">
                                    Prev. Medical AI/ML Development
                                </div>
                            </div>
                        </div>
                        <div className="text-zinc-800 text-xl pt-12">
                            Clinical Advisors
                        </div>
                        <div className="flex flex-row gap-10 pt-5">
                            <div className="flex flex-col w-[220px]">
                                <Image 
                                    src='/images/about/oderich.svg'
                                    alt="Gustavo Oderich, MD"
                                    height={200}
                                    width={200}
                                    className="bg-cover"
                                />
                                <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                                    Gustavo Oderich, MD
                                </div>
                                <div className="text-zinc-800 text-base pt-2">
                                    Chief, Division of Vascular Surgery and Endovascular Therapy, Baylor College of Medicine
                                </div>
                            </div>
                            <div className="flex flex-col w-[220px]">
                                <Image 
                                    src='/images/about/milner.svg'
                                    alt="Ross Milner, MD"
                                    height={200}
                                    width={200}
                                    className="bg-cover"
                                />
                                <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                                    Ross Milner, MD
                                </div>
                                <div className="text-zinc-800 text-base pt-2">
                                    Chief, Section of Vascular Surgery and Endovascular Therapy, The University of Chicago Medicine
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-row pt-4 justify-between px-3">
                    <div className="flex flex-col w-[150px]">
                        <Image 
                            src='/images/about/sophia.svg'
                            alt="Sophia Khan"
                            height={200}
                            width={200}
                            className="bg-cover"
                        />
                        <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                            Sophia Khan, MD
                        </div>
                        <div className="text-zinc-800 text-base">
                            Founder & CMO
                        </div>
                        <div className="text-zinc-800 text-base pt-2">
                            Assistant Professor, Cardiothoracic and Vascular Surgery, UT Health
                        </div>
                    </div>
                    <div className="flex flex-col w-[150px]">
                        <Image 
                            src='/images/about/joe.svg'
                            alt="Joe Makoid"
                            height={200}
                            width={200}
                            className="bg-cover"
                        />
                        <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                            Joe Makoid
                        </div>
                        <div className="text-zinc-800 text-base">
                            CEO
                        </div>
                        <div className="text-zinc-800 text-base pt-2">
                            Prev. Digital Health Sales, Johnson & Johnson
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-col mt-5 w-[150px] mx-3">
                    <Image 
                        src='/images/about/jordan.svg'
                        alt="Jordan Graves"
                        height={200}
                        width={200}
                        className="bg-cover"
                    />
                    <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                        Jordan Graves
                    </div>
                    <div className="text-zinc-800 text-base">
                        CTO
                    </div>
                    <div className="text-zinc-800 text-base pt-2">
                        Prev. Medical AI/ML Development
                    </div>
                </div>
                <div className="md:hidden text-zinc-800 text-xl pt-8 px-3">
                    Clinical Advisors
                </div>
                <div className="md:hidden flex flex-row pt-4 justify-between px-3">
                    <div className="flex flex-col w-[150px]">
                        <Image 
                            src='/images/about/oderich.svg'
                            alt="Gustavo Oderich, MD"
                            height={200}
                            width={200}
                            className="bg-cover"
                        />
                        <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                            Gustavo Oderich, MD
                        </div>
                        <div className="text-zinc-800 text-base pt-2">
                            Chief, Division of Vascular Surgery and Endovascular Therapy, Baylor College of Medicine
                        </div>
                    </div>
                    <div className="flex flex-col w-[150px]">
                        <Image 
                            src='/images/about/milner.svg'
                            alt="Ross Milner, MD"
                            height={200}
                            width={200}
                            className="bg-cover"
                        />
                        <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                            Ross Milner, MD
                        </div>
                        <div className="text-zinc-800 text-base pt-2">
                            Chief, Section of Vascular Surgery and Endovascular Therapy, The University of Chicago Medicine
                        </div>
                    </div>
                </div>
            </section>

            {/* support */}
            <section
                id="Support"
                className="
                    h-fit
                    w-screen
                    flex
                    flex-col
                    md:px-20
                    px-4
                    md:pb-20
                    pb-10
                    bg-light
                    md:bg-none 
                "
            >
                <div className={`flex flex-col text-zinc-800 md:text-4xl text-3xl md:pt-20 pt-10 ${font_head.className}`}>
                    Supported by
                </div>
                <div className="hidden md:flex flex-row justify-between items-center pt-14">
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.forumvc.com/">
                            <Image 
                                src='/images/forum.svg'
                                alt="Forum Ventures"
                                height={150}
                                width={150}
                                className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                            />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://news.nm.org/techstars-and-northwestern-medicine-announce-inaugural-class/">
                            <Image 
                                src='/images/northwestern.svg'
                                alt="Northwestern Medicine"
                                height={160}
                                width={160}
                                className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                            />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.techstars.com/accelerators/northwestern-medicine-healthcare">
                            <Image 
                                src='/images/techstars.svg'
                                alt="techstars"
                                height={150}
                                width={150}
                                className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                            />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://lifexglobal.com/accelerator/">
                            <Image 
                                src='/images/lifex.svg'
                                alt="LifeX"
                                height={150}
                                width={150}
                                className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                            />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://sciencecenter.org/programs/capital-readiness">
                            <Image 
                                src='/images/scicenter.svg'
                                alt="Science Center"
                                height={80}
                                width={80}
                                className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                            />
                        </a>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="flex flex-row justify-between pt-12">
                        <div className="px-3">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.forumvc.com/">
                                <Image 
                                    src='/images/forum.svg'
                                    alt="Forum Ventures"
                                    height={100}
                                    width={100}
                                    className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                                />
                            </a>
                        </div>
                        <div className="px-3">
                            <a target="_blank" rel="noopener noreferrer" href="https://news.nm.org/techstars-and-northwestern-medicine-announce-inaugural-class/">
                                <Image 
                                    src='/images/northwestern.svg'
                                    alt="Northwestern Medicine"
                                    height={160}
                                    width={160}
                                    className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-6 pt-12">
                        <div className="px-2">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.techstars.com/accelerators/northwestern-medicine-healthcare">
                                <Image 
                                    src='/images/techstars.svg'
                                    alt="techstars"
                                    height={130}
                                    width={130}
                                    className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                                />
                            </a>
                        </div>
                        <div className="px-3 -mt-1">
                            <a target="_blank" rel="noopener noreferrer" href="https://lifexglobal.com/accelerator/">
                                <Image 
                                    src='/images/lifex.svg'
                                    alt="LifeX"
                                    height={100}
                                    width={100}
                                    className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="px-3">
                            <a target="_blank" rel="noopener noreferrer" href="https://sciencecenter.org/programs/capital-readiness">
                                <Image 
                                    src='/images/scicenter.svg'
                                    alt="Science Center"
                                    height={80}
                                    width={80}
                                    className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* news & insights */}
            <section
                id="News"
                className="
                    bg-dark
                    h-fit
                    w-screen
                    flex
                    flex-col
                    md:px-20
                    px-4
                    md:pb-20
                    pb-10
                "
            >
                <div className={`flex flex-col text-light md:text-4xl text-3xl md:pt-20 pt-10 ${font_head.className}`}>
                    News & Insights
                </div>
                <div className="flex flex-col">
                    <div className="flex md:flex-row flex-col md:justify-between gap-10 items-center md:pt-10 pt-12 px-2">
                        <NewsMain 
                            text="Voythos featured in Mayo Clinic Platform_Accelerate showcase"
                            date="May 2025"
                            href="/news/May-3-25"
                            buttontext="Read more"
                        />
                        <NewsMain 
                            text="Voythos CEO interviewed on Forging the Future podcast for use of AI in transforming cardiovascular disease prediction"
                            date="April 2025"
                            href="/news/Apr-18-25"
                            buttontext="Read more"
                        />
                        <NewsMain 
                            text="Voythos joins Northwestern Medicine and Techstars Healthcare Accelerator"
                            date="March 2025"
                            href="/news/Mar-20-25"
                            buttontext="Read more"
                        />
                    </div>
                    <div className="flex justify-end pt-10 px-2"> 
                        <ButtonBody href="/news" text="View all news" colorprimary/>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Main;