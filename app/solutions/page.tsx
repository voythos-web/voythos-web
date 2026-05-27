import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { font_head, font_med } from "@/app/fonts";

export const metadata: Metadata = {
    title: "Solutions | Voythos",
    description:
        "Predictive intelligence for aortic disease. From individual patient questions to enterprise screening programs.",
};

const SolutionsPage = () => {
    return (
        <div className="overflow-x-hidden">
            {/* hero */}
            <section
                className="
                    bg-[url('/images/backgrounds/grid_bg_white2.png')]
                    bg-cover
                    w-screen
                    flex
                    flex-col
                    items-center
                    md:pt-44
                    pt-32
                    md:pb-24
                    pb-16
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-4xl w-full flex flex-col items-center text-center">
                    <h1
                        className={`text-zinc-800 md:text-6xl text-4xl ${font_head.className}`}
                    >
                        Predictive intelligence for aortic disease.
                    </h1>
                    <p
                        className={`text-zinc-700 md:text-2xl text-lg md:pt-6 pt-4 max-w-3xl ${font_med.className}`}
                    >
                        Built for vascular surgeons. Preview the experience, then
                        bring the full predictive platform to your program.
                    </p>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:pt-10 pt-8 w-full md:w-auto">
                        <a
                            href="https://app.voythos.io/"
                            rel="noopener noreferrer"
                            className={`
                                inline-flex items-center justify-center
                                bg-primary text-white
                                md:text-base text-lg
                                py-3 px-6
                                hover:bg-primary/90
                                transition duration-200
                                ${font_med.className}
                            `}
                        >
                            Try the preview
                        </a>
                        <Link
                            href="/contact"
                            className={`
                                inline-flex items-center justify-center
                                bg-zinc-800 text-white
                                md:text-base text-lg
                                py-3 px-6
                                hover:bg-zinc-700
                                transition duration-200
                                ${font_med.className}
                            `}
                        >
                            Talk to us about enterprise
                        </Link>
                    </div>
                </div>
            </section>

            {/* what we predict — on dark wave bg with glassmorphic cards */}
            <section
                className="
                    bg-[url('/images/backgrounds/wave_bg.png')]
                    bg-cover
                    w-screen
                    flex
                    flex-col
                    items-center
                    md:py-24
                    py-16
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-5xl w-full">
                    <h2
                        className={`text-light md:text-4xl text-3xl text-center ${font_head.className}`}
                    >
                        What we predict
                    </h2>
                    <p className="text-light/70 md:text-lg text-base text-center md:pt-4 pt-3 max-w-2xl mx-auto">
                        Disease-specific models trained on longitudinal patient data.
                        Predictions calibrated to each condition.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 md:pt-14 pt-10">
                        {/* AAA */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                AAA
                            </div>
                            <div
                                className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}
                            >
                                Abdominal Aortic Aneurysm
                            </div>
                            <ul className="text-light/85 md:text-base text-sm pt-5 space-y-2 list-disc list-inside">
                                <li>Rupture likelihood</li>
                                <li>Aortic growth over time</li>
                            </ul>
                        </div>

                        {/* TBAD */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                TBAD
                            </div>
                            <div
                                className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}
                            >
                                Type B Aortic Dissection
                            </div>
                            <ul className="text-light/85 md:text-base text-sm pt-5 space-y-2 list-disc list-inside">
                                <li>90-day surgical intervention risk</li>
                                <li>Aortic growth over time</li>
                            </ul>
                        </div>

                        {/* TAA */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                TAA
                            </div>
                            <div
                                className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}
                            >
                                Thoracic Aortic Aneurysm
                            </div>
                            <ul className="text-light/85 md:text-base text-sm pt-5 space-y-2 list-disc list-inside">
                                <li>Aortic growth over time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* two ways to use voythos */}
            <section
                className="
                    bg-[url('/images/backgrounds/wave_bg.png')]
                    bg-cover
                    w-screen
                    flex
                    flex-col
                    items-center
                    md:py-24
                    py-16
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-5xl w-full">
                    <h2
                        className={`text-light md:text-4xl text-3xl text-center ${font_head.className}`}
                    >
                        Two ways to use Voythos
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 md:pt-14 pt-10">
                        {/* Preview */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                PREVIEW
                            </div>
                            <div
                                className={`text-light md:text-3xl text-2xl pt-2 ${font_head.className}`}
                            >
                                Try the experience
                            </div>
                            <p className="text-light/85 md:text-base text-base pt-5 leading-relaxed">
                                A pared-down version of our models, run on a
                                simplified set of clinical variables you enter
                                manually. See how trajectory modeling works. Free,
                                no EHR integration.
                            </p>
                            <div className="pt-8 mt-auto">
                                <a
                                    href="https://app.voythos.io/"
                                    rel="noopener noreferrer"
                                    className={`
                                        inline-flex items-center justify-center
                                        bg-primary text-white
                                        text-base
                                        py-3 px-6
                                        hover:bg-primary/90
                                        transition duration-200
                                        ${font_med.className}
                                    `}
                                >
                                    Try the preview
                                </a>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                ENTERPRISE
                            </div>
                            <div
                                className={`text-light md:text-3xl text-2xl pt-2 ${font_head.className}`}
                            >
                                The full predictive platform
                            </div>
                            <p className="text-light/85 md:text-base text-base pt-5 leading-relaxed">
                                Full EHR integration runs our complete models on
                                hundreds of clinical variables across your patient
                                population. Workflow tooling surfaces patients who
                                should be screened for AAA but haven&apos;t been,
                                captures incidental findings that slip past
                                vascular review, and helps your team schedule
                                follow-up calibrated to individual risk. Built for
                                vascular chiefs running aortic care at scale.
                            </p>
                            <div className="pt-8 mt-auto">
                                <Link
                                    href="/contact"
                                    className={`
                                        inline-flex items-center justify-center
                                        bg-white text-zinc-800
                                        text-base
                                        py-3 px-6
                                        hover:bg-white/90
                                        transition duration-200
                                        ${font_med.className}
                                    `}
                                >
                                    Talk to us about enterprise
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video — enterprise workflow walkthrough */}
            <section
                className="
                    bg-dark
                    w-screen
                    flex
                    flex-col
                    items-center
                    md:py-24
                    py-16
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-4xl w-full">
                    <h2
                        className={`text-light md:text-4xl text-3xl text-center ${font_head.className}`}
                    >
                        See the enterprise workflow in action
                    </h2>
                    <p className="text-light/70 md:text-lg text-base text-center md:pt-4 pt-3">
                        AortaNavigator: how Voythos surfaces patients, runs
                        models, and schedules follow-up.
                    </p>

                    <div className="md:pt-12 pt-8">
                        <video
                            controls
                            preload="metadata"
                            playsInline
                            className="w-full aspect-video bg-black"
                        >
                            <source
                                src="/videos/aortanavigator.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support embedded video.
                        </video>
                    </div>
                </div>
            </section>

            {/* evidence */}
            <section
                className="
                    bg-lightbg
                    w-screen
                    flex
                    flex-col
                    items-center
                    md:py-24
                    py-16
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-4xl w-full">
                    <h2
                        className={`text-zinc-800 md:text-4xl text-3xl text-center ${font_head.className}`}
                    >
                        Evidence
                    </h2>
                    <p className="text-zinc-600 md:text-lg text-base text-center md:pt-4 pt-3 max-w-2xl mx-auto">
                        Model performance varies by condition and prediction. We
                        report results as published, not averaged.
                    </p>

                    {/* performance table */}
                    <div className="md:pt-12 pt-8 border border-zinc-300 bg-white">
                        <div className="grid grid-cols-[1fr_2fr_1fr] md:text-base text-sm">
                            {/* header */}
                            <div className={`text-zinc-500 px-5 py-4 border-b border-zinc-300 tracking-wider text-xs font-mono uppercase`}>
                                Condition
                            </div>
                            <div className={`text-zinc-500 px-5 py-4 border-b border-zinc-300 tracking-wider text-xs font-mono uppercase`}>
                                Prediction
                            </div>
                            <div className={`text-zinc-500 px-5 py-4 border-b border-zinc-300 tracking-wider text-xs font-mono uppercase text-right`}>
                                Performance
                            </div>

                            {/* row: TBAD surgical intervention */}
                            <div className={`text-zinc-800 px-5 py-4 border-b border-zinc-200 ${font_med.className}`}>
                                TBAD
                            </div>
                            <div className="text-zinc-700 px-5 py-4 border-b border-zinc-200">
                                90-day surgical intervention
                            </div>
                            <div className={`text-primary px-5 py-4 border-b border-zinc-200 text-right ${font_med.className}`}>
                                AUC 0.93&ndash;0.95
                            </div>

                            {/* row: AAA rupture */}
                            <div className={`text-zinc-800 px-5 py-4 ${font_med.className}`}>
                                AAA
                            </div>
                            <div className="text-zinc-700 px-5 py-4">
                                Rupture risk
                            </div>
                            <div className={`text-primary px-5 py-4 text-right ${font_med.className}`}>
                                AUC 0.81
                            </div>
                        </div>
                    </div>

                    {/* cohort + backing */}
                    <div className="md:pt-14 pt-10 grid md:grid-cols-3 gap-6">
                        <div className="bg-white border border-zinc-300 p-6">
                            <div className={`text-zinc-800 md:text-3xl text-2xl ${font_head.className}`}>
                                500K+
                            </div>
                            <div className="text-zinc-600 md:text-base text-sm pt-2">
                                Longitudinal patient records used in training
                            </div>
                        </div>
                        <div className="bg-white border border-zinc-300 p-6 flex flex-col">
                            <div className={`text-zinc-800 md:text-xl text-lg ${font_med.className}`}>
                                Backed by world-leading healthcare institutions
                            </div>
                            <div className="flex flex-wrap items-center md:gap-6 gap-5 pt-4 mt-auto">
                                <Image
                                    src="/images/mayoclinic.svg"
                                    alt="Mayo Clinic"
                                    width={140}
                                    height={40}
                                    className="h-7 md:h-8 w-auto"
                                />
                                <Image
                                    src="/images/northwestern.svg"
                                    alt="Northwestern Medicine"
                                    width={140}
                                    height={40}
                                    className="h-7 md:h-8 w-auto"
                                />
                            </div>
                        </div>
                        <div className="bg-white border border-zinc-300 p-6">
                            <div className={`text-zinc-800 md:text-xl text-lg ${font_med.className}`}>
                                Clinical advisors
                            </div>
                            <div className="text-zinc-600 md:text-base text-sm pt-2">
                                Vascular surgery chiefs from Baylor and UChicago
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* final CTA */}
            <section
                className="
                    bg-white
                    w-screen
                    flex
                    flex-col
                    items-center
                    md:py-24
                    py-16
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-3xl w-full text-center">
                    <h2
                        className={`text-zinc-800 md:text-4xl text-3xl ${font_head.className}`}
                    >
                        Ready to see what Voythos predicts?
                    </h2>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center md:pt-10 pt-8">
                        <a
                            href="https://app.voythos.io/"
                            rel="noopener noreferrer"
                            className={`
                                inline-flex items-center justify-center
                                bg-primary text-white
                                md:text-base text-lg
                                py-3 px-6
                                hover:bg-primary/90
                                transition duration-200
                                ${font_med.className}
                            `}
                        >
                            Try the preview
                        </a>
                        <Link
                            href="/contact"
                            className={`
                                inline-flex items-center justify-center
                                bg-zinc-800 text-white
                                md:text-base text-lg
                                py-3 px-6
                                hover:bg-zinc-700
                                transition duration-200
                                ${font_med.className}
                            `}
                        >
                            Talk to us about enterprise
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;
