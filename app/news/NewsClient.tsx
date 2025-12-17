'use client';

import NewsCard from "../components/news/NewsCard";
import { font_head } from "../fonts";
import { font_med } from "../fonts";

const NewsClient = () => {
    return (
        <div className="w-full flex flex-col mt-20">
            <div className="flex flex-col justify-center md:h-52 h-40 bg-[url('/images/backgrounds/allnews_bg.png')] bg-cover">
                <div className={`md:pl-12 px-4 md:text-5xl text-4xl text-light ${font_head.className}`}>
                    News & Updates
                </div> 
            </div>
            <div className="md:mx-24 mx-4">
                <div className={`text-3xl text-zinc-800 md:pt-20 pt-10 ${font_med.className}`}>
                    All the latest
                </div>
                <hr className="text-zinc-500 mt-4"/>
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mt-8 max-w-full mb-10">
                    <NewsCard 
                        text="Voythos featured in Mayo Clinic Platform_ Accelerate showcase"
                        date="May 3, 2025"
                        href="/news/May-3-25"
                    />
                    <NewsCard 
                        text="Voythos CEO interviewed on Forging the Future podcast for use of AI in transforming cardiovascular disease prediction"
                        date="April 18, 2025"
                        href="/news/Apr-18-25"
                    />
                    <NewsCard 
                        text="Voythos joins Northwestern Medicine and Techstars Healthcare Accelerator"
                        date="March 20, 2025"
                        href="/news/Mar-20-25"
                    />
                    <NewsCard 
                        text="Voythos joins Rice Nexus, new AI-focused innovation hub, at The Ion Houston"
                        date="February 18, 2025"
                        href="/news/Feb-18-25"
                    />
                    <NewsCard 
                        text="Voythos Recognized as One of the Most Promising Life Science Companies"
                        date="November 11, 2024"
                        href="/news/Nov-11-24"
                    />
                    <NewsCard 
                        text="Mayo Clinic Platform Selects Voythos to Join Prestigious Accelerator"
                        date="September 9, 2024"
                        href="/news/Sep-9-24"
                    />
                    <NewsCard 
                        text="Voythos Joins the 5th Cohort of the Science Center Capital Readiness Program"
                        date="June 17, 2024"
                        href="/news/Jun-17-24"
                    />
                    <NewsCard 
                        text="Voythos Awarded First Place in LifeX Accelerator"
                        date="May 25, 2024"
                        href="/news/May-25-24"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewsClient;