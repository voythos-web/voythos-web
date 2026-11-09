'use client';

import ParticleAorta from "./ParticleAorta";
import Button from "../Button";
import { font_head } from "@/app/fonts";
import { font_med } from "@/app/fonts";
import ButtonBody from "../ButtonBody";
import NewsMain from "../news/NewsMain";
import ScrollReveal from "../ScrollReveal";
import ResearchList from "../research/ResearchList";
import Pipeline from "../research/Pipeline";
import Recognition from "../research/Recognition";
import LogoRow, { LOGOS } from "../research/LogoRow";

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
                    justify-start
                    md:justify-center
                    items-center
                    px-8
                    md:px-0
                    pt-32
                    pb-12
                    md:pt-12
                    md:pb-0
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
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl w-full">
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
                    Trained on 700,000+ longitudinal patient records. Backed by
                    Mayo Clinic and Northwestern Medicine.
                </div>
                </ScrollReveal>
            </section>

            {/* research */}
            <section
                id="research"
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
                <ScrollReveal className="w-full flex flex-col max-w-[1200px] mx-auto">
                <div className={`text-zinc-800 md:text-4xl text-2xl md:pt-20 pt-10 ${font_head.className}`}>
                    Research
                </div>
                <div className="text-zinc-700 md:text-xl text-lg pt-4 max-w-3xl">
                    Our models are developed and reviewed with academic vascular surgeons, and the results are presented at the meetings they attend.
                </div>
                <div className="pt-10">
                    <ResearchList />
                </div>
                <div className="flex justify-end pt-8">
                    <ButtonBody href="/research" text="All research" colorprimary/>
                </div>
                </ScrollReveal>
            </section>

            {/* pipeline */}
            <section
                id="pipeline"
                className="
                    bg-white
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
                <ScrollReveal className="w-full flex flex-col max-w-[1200px] mx-auto">
                <div className={`text-zinc-800 md:text-4xl text-2xl md:pt-20 pt-10 ${font_head.className}`}>
                    Pipeline
                </div>
                <div className="pt-8">
                    <Pipeline />
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
                        <div className="grid grid-cols-2 md:grid-cols-[repeat(4,minmax(220px,220px))] gap-6 md:gap-10 pt-5 justify-start">
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
                                    Vascular Surgeon, UPMC. Built the oncologic vascular surgery program at UTHealth Houston.
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
                                    15 years in medtech, including robotics and digital surgery at Johnson & Johnson. MBA, Rice University.
                                </div>
                            </div>
                            <div className="flex flex-col md:w-[220px] w-[150px]">
                                <Image 
                                    src='/images/about/pavel.jpg'
                                    alt="Pavel Overtchouk, MD"
                                    height={200}
                                    width={200}
                                    className="bg-cover"
                                />
                                <div className={`text-zinc-800 text-lg pt-4 ${font_med.className}`}>
                                    Pavel Overtchouk, MD
                                </div>
                                <div className="text-zinc-800 text-base">
                                    Co-Founder and Head of Science
                                </div>
                                <div className="text-zinc-800 text-base pt-2">
                                    Interventional cardiologist turned AI engineer. Early author on AI in interventional cardiology.
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
                    Partners
                </div>
                <div className="flex flex-col pt-10">
                    <div className="text-zinc-500 text-xs tracking-[0.18em] font-mono uppercase pb-6">
                        Research collaborators
                    </div>
                    <LogoRow logos={[LOGOS.uchicago, LOGOS.montefiore, LOGOS.lahey]} />
                </div>
                <div className="flex flex-col md:pt-14 pt-12">
                    <div className="text-zinc-500 text-xs tracking-[0.18em] font-mono uppercase pb-6">
                        Data partners
                    </div>
                    <LogoRow logos={[LOGOS.mayo, LOGOS.northwestern]} />
                </div>
                <div className="flex flex-col md:pt-14 pt-12">
                    <div className="text-zinc-500 text-xs tracking-[0.18em] font-mono uppercase pb-6">
                        Supported by
                    </div>
                    <LogoRow logos={[LOGOS.forum, LOGOS.techstars, LOGOS.lifex, LOGOS.scicenter]} />
                </div>
                </ScrollReveal>
            </section>


            {/* recognition */}
            <section
                id="recognition"
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
                <div className={`flex flex-col text-zinc-800 md:text-4xl text-3xl md:pt-10 pt-10 ${font_head.className}`}>
                    Recognition
                </div>
                <div className="pt-10">
                    <Recognition />
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
                            text="Voythos selected for the SVS Foundation Enrico Ascher Vascular Innovation Institute"
                            date="October 2026"
                            href="/news/Oct-28-26"
                            buttontext="Read more"
                        />
                        <NewsMain
                            text="Voythos research presented at the 2026 NESVS Annual Meeting"
                            date="October 2026"
                            href="/news/Oct-25-26"
                            buttontext="Read more"
                        />
                        <NewsMain
                            text="Voythos selected for TechCrunch Startup Battlefield 200"
                            date="October 2026"
                            href="/news/Oct-13-26"
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