import type { Metadata } from "next";
import { font_head, font_med } from "@/app/fonts";
import ResearchList from "@/app/components/research/ResearchList";
import Pipeline from "@/app/components/research/Pipeline";
import { RESEARCH_COLLABORATORS } from "@/lib/research";

export const metadata: Metadata = {
    title: "Research | Voythos",
    description:
        "Research presented by Voythos and its academic vascular surgery collaborators, and where each product stands.",
};

const ResearchPage = () => {
    return (
        <div className="w-full flex flex-col mt-20">
            <div className="flex flex-col justify-center md:h-52 h-40 bg-[url('/images/backgrounds/allnews_bg.png')] bg-cover">
                <div className={`md:pl-12 px-4 md:text-5xl text-4xl text-light ${font_head.className}`}>
                    Research
                </div>
            </div>

            <div className="md:mx-24 mx-4">
                <div className={`text-3xl text-zinc-800 md:pt-20 pt-10 ${font_med.className}`}>
                    Presentations
                </div>
                <p className="text-zinc-600 md:text-lg text-base mt-3 max-w-2xl">
                    Our models are developed and reviewed with academic vascular surgeons, and the
                    results are presented at the meetings they attend.
                </p>
                <hr className="text-zinc-500 mt-4" />
                <div className="mt-8">
                    <ResearchList />
                </div>

                <div className={`text-3xl text-zinc-800 md:pt-20 pt-12 ${font_med.className}`}>
                    Collaborators
                </div>
                <hr className="text-zinc-500 mt-4" />
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mt-8">
                    {RESEARCH_COLLABORATORS.map((name) => (
                        <div key={name} className="border border-zinc-300 bg-lightbg md:p-8 p-6">
                            <div className={`text-zinc-800 md:text-xl text-lg ${font_head.className}`}>
                                {name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-3xl text-zinc-800 md:pt-20 pt-12 ${font_med.className}`}>
                    Pipeline
                </div>
                <hr className="text-zinc-500 mt-4" />
                <div className="mt-4 mb-16">
                    <Pipeline />
                </div>
            </div>
        </div>
    );
};

export default ResearchPage;
