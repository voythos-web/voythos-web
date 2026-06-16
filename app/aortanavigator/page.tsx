import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { font_head, font_med } from "@/app/fonts";
import VideoPlayer from "@/app/components/solutions/VideoPlayer";
import ScrollReveal from "@/app/components/ScrollReveal";
import { RESOURCES_PUBLISHED } from "@/lib/resources";

const OG_IMAGE = "https://www.voythos.ai/images/solutions/aortanavigator-poster.jpg";
const OG_DESCRIPTION =
    "Catch the aortic patients slipping out of follow-up: incidental AAAs, lapsed surveillance, and screening-eligible patients.";

// Canonical, crawlable share page. The Open Graph + Twitter tags below are
// server-rendered into the static <head> so LinkedIn (which does not run JS)
// gets a title, description, and image on first fetch and renders a rich card.
export const metadata: Metadata = {
    title: "AortaNavigator | Voythos",
    description:
        "AortaNavigator surfaces every patient who belongs on your schedule. The one nobody screened, the incidental finding nobody routed, and the surveillance patient who quietly disappeared.",
    alternates: {
        canonical: "https://www.voythos.ai/aortanavigator",
    },
    robots: { index: true, follow: true },
    openGraph: {
        title: "AortaNavigator | Voythos",
        description: OG_DESCRIPTION,
        url: "https://www.voythos.ai/aortanavigator",
        type: "website",
        siteName: "Voythos",
        images: [
            {
                url: OG_IMAGE,
                width: 1920,
                height: 1080,
                alt: "AortaNavigator enterprise workflow",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AortaNavigator | Voythos",
        description: OG_DESCRIPTION,
        images: [OG_IMAGE],
    },
};

const AortaNavigatorSalesPage = () => {
    return (
        <div className="bg-lightbg text-zinc-900 overflow-x-hidden">

            {/* ============================================================ */}
            {/* SLIM CUSTOM HEADER — no nav links, just brand + CTA          */}
            {/* ============================================================ */}
            <header className="sticky top-0 z-50 bg-lightbg/85 backdrop-blur-md border-b border-zinc-200">
                <div className="max-w-6xl mx-auto md:px-8 px-4 h-[68px] flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3" aria-label="Voythos home">
                        <Image
                            src="/images/logo_blue_2.svg"
                            alt="Voythos"
                            width={140}
                            height={32}
                            className="h-7 w-auto"
                        />
                        <span className={`text-zinc-500 text-xs tracking-[0.15em] uppercase ${font_med.className}`}>
                            AortaNavigator
                        </span>
                    </Link>
                    <a
                        href="#book"
                        className={`hidden md:inline-flex items-center gap-2 bg-primary text-white text-sm py-2.5 px-5 hover:bg-primary/90 transition duration-200 ${font_med.className}`}
                    >
                        Book a scoping call
                        <span aria-hidden>→</span>
                    </a>
                </div>
            </header>

            {/* ============================================================ */}
            {/* HERO                                                          */}
            {/* ============================================================ */}
            <section className="md:py-24 py-16 md:px-8 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] md:gap-14 gap-10 items-center">
                    {/* text */}
                    <ScrollReveal>
                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className} flex items-center gap-3`}>
                            <span className="inline-block w-6 h-px bg-primary" />
                            Screening &amp; Surveillance Layer
                        </div>
                        <h1 className={`text-zinc-900 md:text-6xl text-4xl leading-[1.05] mt-6 ${font_head.className}`}>
                            The aneurysm you&rsquo;ll repair in an emergency next
                            year is <span className="text-primary italic">already in your system today.</span>
                        </h1>
                        <p className="text-zinc-600 md:text-xl text-lg leading-snug mt-6 max-w-lg">
                            AortaNavigator surfaces every patient who belongs on
                            your schedule. The one nobody screened, the
                            incidental finding nobody routed, and the
                            surveillance patient who quietly disappeared.
                        </p>
                        <div className="flex flex-wrap items-center gap-5 mt-8">
                            <a
                                href="#book"
                                className={`inline-flex items-center gap-2 bg-primary text-white text-base py-3 px-6 hover:bg-primary/90 transition duration-200 ${font_med.className}`}
                            >
                                Book a scoping call
                                <span aria-hidden>→</span>
                            </a>
                            <a href="#how" className="text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-900 transition">
                                How it works
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* hero visual — surveillance dropout SVG */}
                    <ScrollReveal>
                        <div className="bg-white border border-zinc-200 p-6 shadow-[0_24px_60px_-38px_rgba(20,30,45,0.5)]">
                            <div className={`text-zinc-500 text-xs tracking-[0.12em] uppercase ${font_med.className}`}>
                                One patient. Five years.
                            </div>
                            <div className="text-zinc-500 text-sm mt-1">
                                Diagnosed, then lost before anyone decided to stop watching.
                            </div>
                            <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto mt-5" role="img" aria-label="A surveillance timeline showing a diagnosed patient dropping out before rupture">
                                <line x1="20" y1="150" x2="400" y2="150" stroke="rgba(24,24,27,0.18)" strokeWidth="1.5" />
                                <path d="M20,150 L100,150" stroke="#2F4FE1" strokeWidth="3" fill="none" />
                                <path className="dropdash-anim" d="M100,150 L300,150" stroke="#2F4FE1" strokeWidth="2.5" strokeOpacity="0.5" fill="none" strokeDasharray="4 5" />
                                <path d="M300,150 L322,150 L334,60 L348,150 L400,150" stroke="#2F4FE1" strokeWidth="3" fill="none" strokeLinejoin="round" />
                                <circle cx="35" cy="150" r="6" fill="#2F4FE1" />
                                <circle cx="100" cy="150" r="6" fill="#2F4FE1" />
                                <circle cx="334" cy="60" r="6.5" fill="#2F4FE1" />
                                <text x="35" y="178" fontFamily="system-ui, sans-serif" fontSize="12" fill="#52525b" textAnchor="middle">Diagnosed</text>
                                <text x="100" y="178" fontFamily="system-ui, sans-serif" fontSize="12" fill="#52525b" textAnchor="middle">1 scan</text>
                                <text x="200" y="138" fontFamily="system-ui, sans-serif" fontSize="12" fill="#2F4FE1" textAnchor="middle" fontWeight="600">lost to surveillance</text>
                                <text x="334" y="44" fontFamily="system-ui, sans-serif" fontSize="13" fill="#2F4FE1" textAnchor="middle" fontWeight="600">Rupture</text>
                            </svg>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CSS for the SVG dash animation */}
            <style>{`
                @keyframes dashmove { to { stroke-dashoffset: -200; } }
                .dropdash-anim { animation: dashmove 22s linear infinite; }
            `}</style>

            {/* ============================================================ */}
            {/* VIDEO — hero supplement, sits between hero and stat band     */}
            {/* ============================================================ */}
            <section className="bg-dark md:py-20 py-14 md:px-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-10">
                            <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                                See it in action
                            </div>
                            <h2 className={`text-light md:text-4xl text-3xl mt-4 ${font_head.className}`}>
                                Watch AortaNavigator surface real patients.
                            </h2>
                        </div>
                        <div className="border border-white/10 shadow-[0_0_80px_rgba(47,79,225,0.15)]">
                            <VideoPlayer
                                src="/videos/aortanavigator.mp4"
                                poster="/images/solutions/aortanavigator-poster.jpg"
                                title="AortaNavigator"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ============================================================ */}
            {/* STAT BAND                                                     */}
            {/* ============================================================ */}
            <div className="bg-zinc-900">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
                    <ScrollReveal className="p-10 md:p-12 border-r border-b md:border-b-0 border-white/10">
                        <div className={`text-white md:text-5xl text-4xl leading-none ${font_head.className}`}>
                            1<span className="text-primary">/</span>3
                        </div>
                        <div className="text-zinc-300 md:text-sm text-xs mt-3 leading-snug">
                            of patients who arrive with a ruptured AAA had already been diagnosed with it.
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={80} className="p-10 md:p-12 md:border-r border-b md:border-b-0 border-white/10">
                        <div className={`text-white md:text-5xl text-4xl leading-none ${font_head.className}`}>
                            &lt;10<span className="text-primary">%</span>
                        </div>
                        <div className="text-zinc-300 md:text-sm text-xs mt-3 leading-snug">
                            of eligible patients receive their recommended AAA screening ultrasound in most published US health systems.
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={160} className="p-10 md:p-12 border-r border-white/10">
                        <div className={`text-white md:text-5xl text-4xl leading-none ${font_head.className}`}>
                            ~35<span className="text-primary">%</span>
                        </div>
                        <div className="text-zinc-300 md:text-sm text-xs mt-3 leading-snug">
                            of incidental AAAs on abdominal CT are not mentioned in the radiology report.
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={240} className="p-10 md:p-12">
                        <div className={`text-white md:text-5xl text-4xl leading-none ${font_head.className}`}>
                            ~50<span className="text-primary">%</span>
                        </div>
                        <div className="text-zinc-300 md:text-sm text-xs mt-3 leading-snug">
                            of patients drop out of long-term EVAR surveillance.
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* ============================================================ */}
            {/* PROBLEM — lead + 3 leaks                                      */}
            {/* ============================================================ */}
            <section className="md:py-24 py-16 md:px-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal className="max-w-2xl">
                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                            You did not miss it
                        </div>
                        <h2 className={`text-zinc-900 md:text-5xl text-3xl leading-[1.05] mt-5 ${font_head.className}`}>
                            Three places it falls apart.
                        </h2>
                    </ScrollReveal>

                    {/* 3 leak cards */}
                    <div className="grid md:grid-cols-3 border border-zinc-200 mt-14">
                        <ScrollReveal className="bg-white p-9 border-b md:border-b-0 md:border-r border-zinc-200">
                            <div className={`text-primary text-xs tracking-[0.1em] ${font_med.className}`}>
                                Leak 01
                            </div>
                            <h3 className={`text-zinc-900 text-xl mt-4 ${font_head.className}`}>
                                The eligible patient nobody screened
                            </h3>
                            <p className="text-zinc-600 text-base mt-4 leading-snug">
                                A clear screening recommendation exists. The
                                benefit is not in question. The order simply
                                never gets placed, and nothing is watching for
                                the ones missed.
                            </p>
                            <div className={`text-zinc-900 md:text-4xl text-3xl leading-none mt-7 ${font_head.className}`}>
                                &lt;10%
                                <div className={`text-zinc-500 text-sm mt-2 ${font_med.className}`}>
                                    of eligible patients actually screened in most US health systems
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100} className="bg-white p-9 border-b md:border-b-0 md:border-r border-zinc-200">
                            <div className={`text-primary text-xs tracking-[0.1em] ${font_med.className}`}>
                                Leak 02
                            </div>
                            <h3 className={`text-zinc-900 text-xl mt-4 ${font_head.className}`}>
                                The incidental finding that never reached you
                            </h3>
                            <p className="text-zinc-600 text-base mt-4 leading-snug">
                                Found on a scan ordered for something else,
                                buried in the body of a report. Of the AAAs
                                that do get written down, only about a third
                                make it into a surveillance pathway.
                            </p>
                            <div className={`text-zinc-900 md:text-4xl text-3xl leading-none mt-7 ${font_head.className}`}>
                                ~32%
                                <div className={`text-zinc-500 text-sm mt-2 ${font_med.className}`}>
                                    of incidental AAAs reach proper surveillance
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200} className="bg-white p-9">
                            <div className={`text-primary text-xs tracking-[0.1em] ${font_med.className}`}>
                                Leak 03
                            </div>
                            <h3 className={`text-zinc-900 text-xl mt-4 ${font_head.className}`}>
                                The surveillance patient who disappeared
                            </h3>
                            <p className="text-zinc-600 text-base mt-4 leading-snug">
                                The biggest driver of missed follow-up is not
                                patient no-shows. It is the next scan never
                                being ordered. Your list is a bucket with holes
                                you cannot see.
                            </p>
                            <div className={`text-zinc-900 md:text-4xl text-3xl leading-none mt-7 ${font_head.className}`}>
                                65%
                                <div className={`text-zinc-500 text-sm mt-2 ${font_med.className}`}>
                                    follow-up rate in a typical program
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* cross-link to the cited evidence behind the claims */}
                    {RESOURCES_PUBLISHED && (
                        <ScrollReveal>
                            <Link
                                href="/resources/aortic-leak"
                                className="group block border border-zinc-200 bg-white hover:border-primary transition duration-200 md:p-7 p-6 mt-10"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                                            The problem we built this for
                                        </div>
                                        <div className={`text-zinc-900 md:text-2xl text-xl mt-2 ${font_head.className}`}>
                                            Read The Aortic Leak
                                        </div>
                                        <div className="text-zinc-600 text-sm mt-2 max-w-xl leading-snug">
                                            The cited evidence behind surveillance and screening at scale: where aortic patients fall out of care, and what it costs.
                                        </div>
                                    </div>
                                    <span className={`text-zinc-900 inline-flex items-center gap-1.5 shrink-0 ${font_med.className}`}>
                                        Read the report
                                        <span aria-hidden className="group-hover:translate-x-1 transition">→</span>
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    )}
                </div>
            </section>

            {/* ============================================================ */}
            {/* SOLUTION — dark wave bg, 3 caps + closing loop                */}
            {/* ============================================================ */}
            <section id="how" className="bg-[url('/images/backgrounds/wave_bg.png')] bg-cover md:py-24 py-16 md:px-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal className="max-w-3xl">
                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                            The safety net the EHR was supposed to be
                        </div>
                        <h2 className={`text-light md:text-5xl text-3xl leading-[1.05] mt-5 ${font_head.className}`}>
                            AortaNavigator reads across your imaging and records and hands your team one prioritized worklist.
                        </h2>
                    </ScrollReveal>

                    {/* 3 caps */}
                    <div className="grid md:grid-cols-3 gap-9 mt-14">
                        <ScrollReveal>
                            <div className="border-t-2 border-primary pt-5">
                                <h3 className={`text-light text-xl ${font_head.className}`}>
                                    Find the unscreened
                                </h3>
                                <p className="text-light/80 text-base mt-4 leading-snug">
                                    Every patient who meets screening eligibility
                                    with no completed screen, flagged, so the
                                    order finally gets placed.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <div className="border-t-2 border-primary pt-5">
                                <h3 className={`text-light text-xl ${font_head.className}`}>
                                    Catch the incidental
                                </h3>
                                <p className="text-light/80 text-base mt-4 leading-snug">
                                    Every AAA mentioned anywhere in a study,
                                    including the ones buried in a report
                                    ordered for something else, routed to
                                    vascular instead of vanishing.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="border-t-2 border-primary pt-5">
                                <h3 className={`text-light text-xl ${font_head.className}`}>
                                    Recover the lost
                                </h3>
                                <p className="text-light/80 text-base mt-4 leading-snug">
                                    Every known aneurysm whose surveillance
                                    interval has lapsed, surfaced before the
                                    gap becomes a rupture.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* closing loop */}
                    <ScrollReveal delay={100}>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 mt-14 md:p-8 p-6 grid md:grid-cols-2 md:gap-10 gap-6">
                            <div>
                                <h4 className={`text-light text-lg ${font_head.className}`}>
                                    Then it closes the loop
                                </h4>
                                <p className="text-light/80 text-sm mt-3 leading-snug">
                                    Outreach and scheduling agents reach the
                                    patient, book the study, and put them back
                                    into your pathway. A found patient becomes a
                                    scheduled patient, not another name nobody
                                    had time to call.
                                </p>
                            </div>
                            <div>
                                <h4 className={`text-light text-lg ${font_head.className}`}>
                                    Ranked by risk, not by luck
                                </h4>
                                <p className="text-light/80 text-sm mt-3 leading-snug">
                                    The worklist is risk-stratified using
                                    guideline-referenced criteria and validated
                                    growth modeling, so your team works the
                                    highest-priority patients first instead of
                                    triaging blind.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ============================================================ */}
            {/* BENEFITS                                                      */}
            {/* ============================================================ */}
            <section className="md:py-24 py-16 md:px-8 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal>
                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                            What it changes for you
                        </div>
                        <h2 className={`text-zinc-900 md:text-5xl text-3xl leading-[1.05] mt-5 ${font_head.className}`}>
                            You stop running an aortic program on memory and goodwill.
                        </h2>

                        <ul className="mt-12 border-t border-zinc-200">
                            {[
                                {
                                    bold: "You stop discovering your own patients in the ER.",
                                    rest: "The aneurysms you would have met at 3 a.m. as a rupture become elective cases on your clinic schedule.",
                                },
                                {
                                    bold: "Incidental findings route to vascular automatically.",
                                    rest: "A finding on page two is no longer a coin flip on whether anyone acts on it.",
                                },
                                {
                                    bold: "Lapsed surveillance surfaces on its own.",
                                    rest: "No patient leaves your program by accident.",
                                },
                                {
                                    bold: "You stop leaving captured cases on the table.",
                                    rest: "Patients already attributable to your service line come back to it, not to a rupture or a transfer out.",
                                },
                                {
                                    bold: "You shrink the chart you never want in a deposition.",
                                    rest: "A documented, recalled, actively monitored aneurysm is a different medicolegal position than one that went unwatched.",
                                },
                                {
                                    bold: "Your coordinators work patients, not the PACS.",
                                    rest: "A ranked, actionable list replaces the quarterly scramble to find who is overdue.",
                                },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-5 py-6 border-b border-zinc-200">
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-1">
                                        ✓
                                    </span>
                                    <span className="text-base md:text-lg leading-snug">
                                        <span className={`text-zinc-900 ${font_med.className}`}>{item.bold}</span>{" "}
                                        <span className="text-zinc-600">{item.rest}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </section>

            {/* ============================================================ */}
            {/* CREDIBILITY                                                   */}
            {/* ============================================================ */}
            <section className="bg-lightbg md:py-24 py-16 md:px-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal className="max-w-2xl">
                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                            Why this is credible
                        </div>
                        <h2 className={`text-zinc-900 md:text-5xl text-3xl leading-[1.05] mt-5 ${font_head.className}`}>
                            Built on real data, by a team that includes a practicing vascular surgeon.
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-12">
                        {[
                            { n: "500K+", l: "patient records used to develop and validate the models" },
                            { n: "30+", l: "health systems represented in the training data" },
                            { n: "0.81", l: "validated AUC for AAA rupture risk prioritization" },
                            { n: "2", l: "data partners: Mayo Clinic Platform and Northwestern Medicine" },
                        ].map((c, i) => (
                            <ScrollReveal key={i} delay={i * 70} className="bg-white border border-zinc-200 p-6">
                                <div className={`text-primary md:text-4xl text-3xl leading-none ${font_head.className}`}>
                                    {c.n}
                                </div>
                                <div className="text-zinc-600 text-sm mt-3 leading-snug">
                                    {c.l}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>
            </section>

            {/* ============================================================ */}
            {/* OFFER — single-column, confident                              */}
            {/* ============================================================ */}
            <section className="bg-white md:py-24 py-16 md:px-8 px-4">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal>
                        <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                            Start with a conversation
                        </div>
                        <h2 className={`text-zinc-900 md:text-5xl text-3xl leading-[1.05] mt-5 ${font_head.className}`}>
                            Let&rsquo;s talk about what AortaNavigator could do in your program.
                        </h2>
                        <p className="text-zinc-800 md:text-xl text-lg leading-snug mt-6">
                            A 30-minute conversation about how your aortic
                            program runs today, where the gaps live, and where
                            AortaNavigator would change that for your specific
                            setup.
                        </p>
                        <p className="text-zinc-600 md:text-xl text-lg leading-snug mt-5">
                            If there&rsquo;s mutual interest, we&rsquo;ll discuss what a structured pilot would look like.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ============================================================ */}
            {/* FINAL CTA                                                     */}
            {/* ============================================================ */}
            <section id="book" className="bg-primary text-white md:py-28 py-20 md:px-8 px-4 text-center">
                <ScrollReveal className="max-w-2xl mx-auto">
                    <h2 className={`text-white md:text-5xl text-4xl leading-[1.05] ${font_head.className}`}>
                        Let&rsquo;s talk.
                    </h2>
                    <p className="text-white/90 md:text-xl text-lg mt-5">
                        Thirty minutes. We&rsquo;ll figure out together
                        whether AortaNavigator fits your program.
                    </p>
                    <div className="md:mt-10 mt-8">
                        <Link
                            href="/contact"
                            className={`inline-flex items-center justify-center gap-2 bg-zinc-900 text-white text-base py-3.5 px-7 hover:bg-zinc-800 transition duration-200 ${font_med.className}`}
                        >
                            Book a scoping call
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                    <p className="text-white/85 text-sm italic mt-7">
                        P.S. At SVS VAM in Boston this month? We&rsquo;d rather
                        show you in person. Reply with a time and we&rsquo;ll
                        find you on the floor.
                    </p>
                </ScrollReveal>
            </section>

            {/* ============================================================ */}
            {/* CUSTOM SLIM FOOTER                                            */}
            {/* ============================================================ */}
            <footer className="bg-zinc-900 text-zinc-400 md:py-12 py-10 md:px-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-between items-center gap-5">
                        <Link href="/" className="flex items-center gap-3 text-white">
                            <Image
                                src="/images/logo_light_2.svg"
                                alt="Voythos"
                                width={140}
                                height={32}
                                className="h-7 w-auto"
                            />
                            <span className={`text-zinc-400 text-xs tracking-[0.1em] uppercase ${font_med.className}`}>
                                Predictive intelligence for aortic disease
                            </span>
                        </Link>
                        <div className="text-sm">© {new Date().getFullYear()} Voythos, Inc.</div>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed mt-6 max-w-3xl">
                        AortaNavigator is clinical decision support intended to
                        assist qualified clinicians and does not replace
                        clinical judgment. Statistics referenced are drawn from
                        published, peer-reviewed literature on AAA screening,
                        incidental-finding follow-up, and surveillance
                        compliance; a source sheet is available on request.
                        Model performance figures reflect retrospective
                        validation on the development dataset.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default AortaNavigatorSalesPage;
