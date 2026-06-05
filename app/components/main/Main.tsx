'use client';

import ParticleAorta from "./ParticleAorta";
import Button from "../Button";
import { font_head } from "@/app/fonts";
import { font_med } from "@/app/fonts";
import ButtonBody from "../ButtonBody";
import NewsMain from "../news/NewsMain";
import ScrollReveal from "../ScrollReveal";

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
                    min-h-screen
                    w-screen
                    flex
                    flex-col
                    justify-center
                    items-center
                    px-8
                    md:px-0
                    md:pt-12
                "
            >
                <div className="hidden md:grid md:grid-cols-[3fr_2fr] md:items-center w-full max-w-[1440px] md:gap-10">
                    <div className="flex flex-col md:pl-20 md:pt-20 max-w-[860px]">
                        <div className={`text-indigo-50 md:text-6xl/tight lg:text-7xl/tight text-5xl ${font_head.className}`}>
                            The precision medicine engine for vascular disease.
                        </div>
                        <div className={`text-indigo-50 md:text-2xl text-xl md:pt-6 pt-4 pr-12 leading-snug ${font_med.className}`}>
                            We&rsquo;re a physician-founded startup building precision tools for vascular surgeons.
                        </div>
                        <div className="pt-6">
                            <Button 
                                href="#solutions"
                                text="Discover our solutions"
                                outline
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-start h-[72vh] min-h-[520px] w-full max-w-[640px] justify-self-start">
                        <div className="w-full h-full md:scale-105 origin-center -translate-x-8">
                            <ParticleAorta />
                        </div>
                    </div>
                </div>

                <div className="md:hidden w-full">
                    <div className="flex flex-col">
                        <div className={`text-indigo-50 text-5xl ${font_head.className}`}>
                            The precision medicine engine for vascular disease.
                        </div>
                        <div className={`text-indigo-50 text-2xl pt-5 leading-snug ${font_med.className}`}>
                            We&rsquo;re a physician-founded startup building precision tools for vascular surgeons.
                        </div>
                    </div>
                    <div className="relative h-[380px] scale-[0.95] origin-top translate-x-2 mt-16">
                        <ParticleAorta />
                    </div>
                </div>
            </section>

            {/* solutions — teaser, full content lives at /solutions */}
            <section
                id="solutions"
                className="
                    bg-[url('/images/backgrounds/wave_bg.png')]
                    bg-cover
                    w-screen
                    flex
                    flex-col
                    justify-center
                    items-center
                    md:px-20
                    px-4
                    md:py-32
                    py-20
                "
            >
                <ScrollReveal className="w-full flex flex-col items-center">
                {/* 3-product showcase */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
                    {/* AortaNavigator */}
                    <Link
                        href="/solutions"
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition duration-200"
                    >
                        <div className={`text-light/60 md:text-sm text-xs tracking-[0.25em] font-mono h-4`}>
                            {/* no tag — production */}
                        </div>
                        <div className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}>
                            AortaNavigator
                        </div>
                        <div className="text-light/85 md:text-base text-sm pt-3 leading-snug">
                            Predictive intelligence for AAA, TBAD, and TAA.
                            Surveillance and screening at scale.
                        </div>
                    </Link>

                    {/* RVUPilot */}
                    <Link
                        href="/rvupilot"
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition duration-200"
                    >
                        <div className={`text-primary md:text-sm text-xs tracking-[0.25em] font-mono h-4`}>
                            BETA
                        </div>
                        <div className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}>
                            RVUPilot
                        </div>
                        <div className="text-light/85 md:text-base text-sm pt-3 leading-snug">
                            Real-time RVU coding for surgeons. Dictate or paste
                            your op note.
                        </div>
                    </Link>

                    {/* Pythia */}
                    <Link
                        href="/pythia"
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition duration-200"
                    >
                        <div className={`text-primary md:text-sm text-xs tracking-[0.25em] font-mono h-4`}>
                            IN DEV
                        </div>
                        <div className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}>
                            Pythia
                        </div>
                        <div className="text-light/85 md:text-base text-sm pt-3 leading-snug">
                            A frontier multimodal model for the entire aorta.
                            Pursuing FDA clearance.
                        </div>
                    </Link>
                </div>

                <div className="text-light/70 md:text-base text-sm text-center md:mt-12 mt-8 max-w-2xl">
                    Trained on 500,000+ longitudinal patient records. Backed by
                    Mayo Clinic and Northwestern Medicine.
                </div>
                </ScrollReveal>
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
                <ScrollReveal className="w-full flex flex-col">
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
                <div className="flex flex-col mt-12 w-full max-w-[1200px] mx-auto">
                    <div className="flex flex-col w-full">
                        <div className="text-zinc-800 text-xl">
                            Leadership
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-[repeat(3,minmax(220px,220px))] gap-6 md:gap-10 pt-5 justify-start">
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
                                    Co-Founder and CMO
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
                                    Co-Founder and CEO
                                </div>
                                <div className="text-zinc-800 text-base pt-2">
                                    Prev. Digital Health Sales, Johnson & Johnson
                                </div>
                            </div>
                            <div className="flex flex-col md:w-[220px] w-[150px]">
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
                        <div className="grid grid-cols-2 md:grid-cols-[repeat(2,minmax(220px,220px))] gap-6 md:gap-10 pt-5 justify-start">
                            <div className="flex flex-col md:w-[220px] w-[150px]">
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
                            <div className="flex flex-col md:w-[220px] w-[150px]">
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
                </ScrollReveal>
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
                <ScrollReveal className="w-full flex flex-col">
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
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.mayoclinicplatform.org/">
                            <Image
                                src='/images/mayoclinic.svg'
                                alt="Mayo Clinic"
                                height={160}
                                width={160}
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
                    <div className="pt-12">
                        <div className="px-3">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.mayoclinicplatform.org/">
                                <Image
                                    src='/images/mayoclinic.svg'
                                    alt="Mayo Clinic"
                                    height={160}
                                    width={160}
                                    className="bg-cover cursor-pointer hover:opacity-60 transition duration-200 ease-in"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                </ScrollReveal>
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
                <ScrollReveal className="w-full flex flex-col">
                <div className={`flex flex-col text-light md:text-4xl text-3xl md:pt-20 pt-10 ${font_head.className}`}>
                    News & Insights
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch md:pt-10 pt-12 px-2">
                        <NewsMain
                            text="Voythos presents at the 2026 MedTech Innovator Radar Forum"
                            date="April 2026"
                            href="/news/Apr-9-26"
                            buttontext="Read more"
                        />
                        <NewsMain
                            text="Voythos pitches at Techstars Northwestern Medicine Demo Day"
                            date="June 2025"
                            href="/news/Jun-3-25"
                            buttontext="Read more"
                        />
                        <NewsMain
                            text="Voythos featured in Mayo Clinic Platform_Accelerate showcase"
                            date="May 2025"
                            href="/news/May-3-25"
                            buttontext="Read more"
                        />
                    </div>
                    <div className="flex justify-end pt-10 px-2">
                        <ButtonBody href="/news" text="View all news" colorprimary/>
                    </div>
                </div>
                </ScrollReveal>
            </section>

        </div>
    );
}

export default Main;