import type { Metadata } from "next";
import Link from "next/link";
import { font_head, font_med } from "@/app/fonts";
import WireframeAorta from "@/app/components/solutions/WireframeAorta";
import ScrollReveal from "@/app/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Pythia | Voythos",
    description:
        "A frontier multimodal model predicting the behavior of every aortic disease state. In active development. Pursuing FDA clearance.",
};

const PythiaPage = () => {
    return (
        <div className="overflow-x-hidden bg-dark">
            {/* hero — aorta as the centerpiece */}
            <section
                className="
                    w-screen
                    flex
                    flex-col
                    items-center
                    md:pt-36
                    pt-28
                    md:pb-6
                    pb-4
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-5xl w-full flex flex-col items-center text-center">
                    <div className={`text-primary md:text-base text-sm tracking-[0.3em] font-mono`}>
                        PYTHIA &nbsp;&middot;&nbsp; IN DEVELOPMENT
                    </div>
                    <h1
                        className={`text-light md:text-7xl text-5xl pt-6 ${font_head.className}`}
                    >
                        One model. The whole aorta.
                    </h1>
                </div>

                {/* 3D aorta */}
                <div className="w-full max-w-3xl md:h-[560px] h-[400px] md:mt-8 mt-6">
                    <WireframeAorta />
                </div>
            </section>

            {/* the problem */}
            <section className="w-screen flex flex-col items-center md:py-12 py-10 md:px-20 px-4">
                <ScrollReveal className="max-w-4xl w-full text-center">
                    <div className={`text-primary md:text-sm text-xs tracking-[0.3em] font-mono`}>
                        THE PROBLEM
                    </div>
                    <h2 className={`text-light md:text-6xl text-4xl pt-6 ${font_head.className}`}>
                        Detection is solved.
                        <br />
                        Prediction is not.
                    </h2>
                    <p className="text-light/85 md:text-lg text-base md:pt-6 pt-5 max-w-2xl mx-auto leading-snug">
                        AI in medicine has gotten very good at detecting and
                        characterizing pathology that&apos;s already there.
                        Clinical-grade prediction is what still evades the
                        field.
                    </p>
                </ScrollReveal>
            </section>

            {/* why aorta — 2 parallel cards + 1 standalone pull-quote statement */}
            <section className="w-screen flex flex-col items-center md:py-12 py-10 md:px-20 px-4">
                <ScrollReveal className="max-w-3xl w-full">
                    <h2 className={`text-light md:text-5xl text-3xl text-center ${font_head.className}`}>
                        The aorta is one of the hardest places to solve it.
                    </h2>

                    {/* 2 parallel "what makes it hard" cards */}
                    <div className="grid md:grid-cols-2 gap-5 md:mt-10 mt-8">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-7">
                            <div className={`text-primary md:text-base text-sm tracking-[0.25em] font-mono`}>
                                01
                            </div>
                            <div className={`text-light md:text-2xl text-xl mt-4 leading-snug ${font_head.className}`}>
                                Deep clinical complexity.
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-7">
                            <div className={`text-primary md:text-base text-sm tracking-[0.25em] font-mono`}>
                                02
                            </div>
                            <div className={`text-light md:text-2xl text-xl mt-4 leading-snug ${font_head.className}`}>
                                The highest stakes in vascular surgery.
                            </div>
                        </div>
                    </div>

                    {/* pull-quote — the clinical reality */}
                    <p className={`text-light md:text-3xl text-2xl md:mt-10 mt-8 leading-snug text-center ${font_head.className}`}>
                        Aortic patients are dangerous. We just don&apos;t always know which ones, or when.
                    </p>
                </ScrollReveal>
            </section>

            {/* the approach */}
            <section className="w-screen flex flex-col items-center md:py-12 py-10 md:px-20 px-4">
                <ScrollReveal className="max-w-5xl w-full">
                    <div className="text-center">
                        <div className={`text-primary md:text-sm text-xs tracking-[0.3em] font-mono`}>
                            THE APPROACH
                        </div>
                        <h2 className={`text-light md:text-6xl text-4xl pt-6 ${font_head.className}`}>
                            A multimodal frontier model for the aorta.
                        </h2>
                        <p className="text-light/85 md:text-lg text-base md:pt-6 pt-5 max-w-2xl mx-auto leading-snug">
                            Pythia fuses every aspect of a patient&apos;s
                            history with a novel modeling process that
                            forecasts how the aorta will behave over time.
                        </p>
                    </div>

                    <div className={`text-primary md:text-sm text-xs tracking-[0.3em] font-mono text-center md:pt-12 pt-10`}>
                        WHAT IT WILL PREDICT
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:mt-6 mt-5">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-5 text-center">
                            <div className={`text-light md:text-lg text-base ${font_med.className}`}>
                                Aortic growth
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-5 text-center">
                            <div className={`text-light md:text-lg text-base ${font_med.className}`}>
                                Rupture
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-5 text-center">
                            <div className={`text-light md:text-lg text-base ${font_med.className}`}>
                                Malperfusion
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-5 text-center">
                            <div className={`text-light md:text-lg text-base ${font_med.className}`}>
                                EVAR / TEVAR outcomes
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* where we are */}
            <section className="w-screen flex flex-col items-center md:py-12 py-10 md:px-20 px-4">
                <ScrollReveal className="max-w-3xl w-full text-center">
                    <div className={`text-primary md:text-sm text-xs tracking-[0.3em] font-mono`}>
                        WHERE WE ARE
                    </div>
                    <h2 className={`text-light md:text-6xl text-4xl pt-6 ${font_head.className}`}>
                        On our way.
                    </h2>
                    <p className="text-light/85 md:text-lg text-base md:pt-6 pt-5 max-w-xl mx-auto leading-snug">
                        This is deeply technically challenging. We&apos;re
                        seeing strong signal in our early data.
                    </p>
                </ScrollReveal>
            </section>

            {/* CTA + disclaimer */}
            <section className="w-screen flex flex-col items-center md:py-12 py-10 md:pb-20 pb-16 md:px-20 px-4">
                <ScrollReveal className="max-w-2xl w-full text-center">
                    <p className="text-light/50 md:text-sm text-xs italic">
                        In active development. Pursuing FDA clearance. Not for
                        clinical use.
                    </p>
                    <div className="md:pt-10 pt-8">
                        <Link
                            href="/contact"
                            className={`
                                inline-flex items-center justify-center
                                border border-white/30 text-light
                                md:text-base text-base
                                py-3 px-6
                                hover:bg-white hover:text-zinc-800
                                transition duration-200
                                ${font_med.className}
                            `}
                        >
                            Explore research collaboration
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default PythiaPage;
