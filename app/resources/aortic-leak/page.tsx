import type { Metadata } from "next";
import Link from "next/link";
import { font_head, font_med } from "@/app/fonts";
import { RESOURCES_INDEXABLE } from "@/lib/resources";

const SITE_URL = "https://www.voythos.ai";
const URL = `${SITE_URL}/resources/aortic-leak`;

// Byline is an open item pending Joe's sign-off (co-author TBD). Sophia Khan, MD is the
// proposed primary author from the draft.
const BYLINE = "Sophia Khan, MD";
const PUBLISH_DATE = "2026-06-15";

export const metadata: Metadata = {
    title: "The Aortic Leak: how vascular programs lose the patients they should catch",
    description:
        "A cited look at the three points where aortic patients fall out of care, the incidental aneurysm nobody acted on, the surveillance patient who dropped out, and the eligible patient nobody screened, and what the evidence says it costs.",
    alternates: { canonical: URL },
    // Draft gate: reachable and linked, but stay out of search results until the
    // clinical redline is signed off.
    robots: RESOURCES_INDEXABLE ? undefined : { index: false, follow: false },
    openGraph: {
        title: "The Aortic Leak",
        description:
            "How vascular programs lose the patients they are meant to catch, and what the evidence says it costs.",
        type: "article",
        url: URL,
        publishedTime: PUBLISH_DATE,
        authors: [BYLINE],
    },
};

// --- small presentational helpers -------------------------------------------

const StatCallout = ({
    value,
    label,
    source,
}: {
    value: string;
    label: string;
    source?: string;
}) => (
    <div className="my-10 border-l-2 border-primary pl-6 py-1">
        <div className={`text-primary md:text-5xl text-4xl leading-none ${font_head.className}`}>
            {value}
        </div>
        <div className="text-zinc-700 md:text-lg text-base mt-3 max-w-md leading-snug">
            {label}
        </div>
        {source ? (
            <div className="text-zinc-500 text-sm mt-2">{source}</div>
        ) : null}
    </div>
);

const TwoStat = ({
    a,
    b,
}: {
    a: { value: string; label: string };
    b: { value: string; label: string };
}) => (
    <div className="my-10 grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
        {[a, b].map((s, i) => (
            <div key={i} className="bg-lightbg p-6">
                <div className={`text-primary md:text-5xl text-3xl leading-none ${font_head.className}`}>
                    {s.value}
                </div>
                <div className="text-zinc-700 text-sm md:text-base mt-3 leading-snug">
                    {s.label}
                </div>
            </div>
        ))}
    </div>
);

// --- page -------------------------------------------------------------------

const AorticLeakReport = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "The Aortic Leak",
        alternativeHeadline:
            "How vascular programs lose the patients they are meant to catch",
        description:
            "A cited report on the three points where aortic patients fall out of care, and what the evidence says it costs.",
        datePublished: PUBLISH_DATE,
        dateModified: PUBLISH_DATE,
        author: { "@type": "Person", name: BYLINE },
        publisher: {
            "@type": "Organization",
            name: "Voythos",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/logo_blue_2.svg`,
            },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    };

    return (
        <article className="bg-lightbg text-zinc-900 overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ---------- masthead ---------- */}
            <header className="md:pt-40 pt-32 md:pb-12 pb-8 md:px-8 px-4">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/resources"
                        className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className} hover:opacity-70 transition`}
                    >
                        Research report
                    </Link>
                    <h1 className={`text-zinc-900 md:text-6xl text-4xl leading-[1.05] mt-5 ${font_head.className}`}>
                        The Aortic Leak
                    </h1>
                    <p className="text-zinc-600 md:text-2xl text-xl mt-4 leading-snug">
                        How vascular programs lose the patients they are meant to catch.
                    </p>
                    <div className={`flex flex-wrap gap-x-3 gap-y-1 text-zinc-500 text-sm mt-7 ${font_med.className}`}>
                        <span>By {BYLINE}</span>
                        <span aria-hidden>&middot;</span>
                        <span>Voythos</span>
                        <span aria-hidden>&middot;</span>
                        <span>June 2026</span>
                    </div>
                </div>
            </header>

            <div className="max-w-3xl mx-auto md:px-8 px-4 md:pb-24 pb-16">
                <hr className="border-zinc-200" />

                {/* ---------- the argument ---------- */}
                <section id="argument" className="scroll-mt-24 pt-12">
                    <h2 className={`text-zinc-900 md:text-3xl text-2xl ${font_head.className}`}>
                        The argument in one sentence
                    </h2>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        A planned, elective AAA repair carries roughly a 1 to 4
                        percent operative mortality. A ruptured one kills about 80
                        percent of the patients it reaches, counting those who
                        never make it to a hospital (Reimerink et al.,{" "}
                        <em>British Journal of Surgery</em>, 2013; elective figures
                        from the Vascular Quality Initiative). The entire clinical
                        and financial case for aortic care sits in the gap between
                        those two numbers. Yet most programs lose patients on the
                        way from one to the other, quietly, at three predictable
                        points, and almost nobody is measuring the loss.
                    </p>

                    <TwoStat
                        a={{ value: "1 to 4%", label: "operative mortality for a planned, elective AAA repair" }}
                        b={{ value: "~80%", label: "of ruptured AAAs are fatal, counting pre-hospital deaths" }}
                    />

                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        This is a report about those three leaks: where aortic
                        patients fall out of care, what the evidence says it costs,
                        and what it would take to close them.
                    </p>
                </section>

                {/* ---------- leak 1 ---------- */}
                <section id="leak-1" className="scroll-mt-24 pt-14">
                    <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                        Leak 01
                    </div>
                    <h2 className={`text-zinc-900 md:text-3xl text-2xl mt-3 ${font_head.className}`}>
                        The incidental aneurysm nobody acted on
                    </h2>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        Most AAAs are silent. They are found not because anyone went
                        looking, but incidentally, on a CT ordered for back pain,
                        kidney stones, or a cancer staging scan. In one recent
                        series, 39 percent of patients who arrived with a ruptured
                        AAA already had the aneurysm documented on a prior scan,
                        found incidentally, before it ruptured (Wesche et al.,{" "}
                        <em>Annals of Vascular Surgery</em>, 2024; Norway). The
                        aneurysm was visible. The system simply did not act on it.
                    </p>

                    <StatCallout
                        value="39%"
                        label="of patients who arrived with a ruptured AAA already had it documented on a prior scan"
                        source="Wesche et al., Annals of Vascular Surgery, 2024"
                    />

                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        The breakdown is one of communication, not clinical
                        judgment. At a large multistate US radiology practice,
                        before a reporting standard was put in place, only 2.1
                        percent of reports describing an incidental AAA included a
                        recommendation for follow-up imaging. After the practice
                        standardized its reporting, that figure rose to 58 percent
                        (<em>Journal of the American College of Radiology</em>,
                        2021). The finding was on the image either way. What changed
                        was whether anyone was told to do something about it.
                        International audits describe an even leakier loop:
                        incidental AAAs documented in the chart only about 29
                        percent of the time and communicated to the patient&rsquo;s
                        own physician only about 15 percent of the time (van
                        Walraven et al., <em>Journal of Vascular Surgery</em>, 2010;
                        Canadian data, included as corroboration).
                    </p>

                    <TwoStat
                        a={{ value: "2.1%", label: "of incidental-AAA reports recommended follow-up before a reporting standard" }}
                        b={{ value: "58%", label: "did so after the practice standardized its reporting" }}
                    />

                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        This is also a liability surface. In an analysis of
                        malpractice claims where an incidental finding contributed
                        to harm, more than 41 percent resulted in an indemnity
                        payment, and the recurring failure mode was simple: the
                        responsible clinician was unaware of the finding, did not
                        document it, or did not notify the patient (The Doctors
                        Company, 2024). An incidental AAA that is seen but never
                        communicated is both a clinical miss and a legal one.
                    </p>
                </section>

                {/* ---------- leak 2 ---------- */}
                <section id="leak-2" className="scroll-mt-24 pt-14">
                    <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                        Leak 02
                    </div>
                    <h2 className={`text-zinc-900 md:text-3xl text-2xl mt-3 ${font_head.className}`}>
                        The surveillance patient who quietly dropped out
                    </h2>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        A patient placed into surveillance is a patient the program
                        has already found. Keeping them is the easy part, in theory.
                        In practice, they leave.
                    </p>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        Adherence to imaging surveillance after EVAR falls from 90
                        percent in the first year to 58 percent by year four (Newton
                        et al., <em>JAMA Network Open</em>, 2025; 27,792 US
                        veterans). In a national Medicare cohort, roughly half of
                        patients had fallen out of guideline-concordant surveillance
                        by five years (Schanzer et al.,{" "}
                        <em>Journal of Vascular Surgery</em>, 2014). Single-center
                        prospective data are starker still: more than 40 percent of
                        patients lost to follow-up entirely (Jasinski et al.,{" "}
                        <em>Aorta</em>, 2017). These are patients with a known
                        aneurysm, in a known program, who simply stop coming back.
                    </p>

                    <StatCallout
                        value="90% to 58%"
                        label="EVAR imaging-surveillance adherence, from the first year to year four"
                        source="Newton et al., JAMA Network Open, 2025 (27,792 US veterans)"
                    />

                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        An honest report has to address the obvious question: does it
                        matter? At least one large US claims study found that
                        incomplete surveillance was not associated with worse
                        outcomes (Garg et al., <em>JAMA Surgery</em>, 2015), most
                        likely because administrative data cannot capture the
                        patients who rupture and die outside a hospital. We take that
                        finding seriously, and it points to the right conclusion. The
                        problem is not that patients receive too little surveillance.
                        It is that everyone receives the same surveillance. A 3.0 cm
                        aneurysm and a 5.0 cm aneurysm are put on schedules that
                        differ by a calendar, when the biology differs by years: the
                        time for a 3.0 cm AAA to reach even a 10 percent chance of
                        crossing the 5.5 cm threshold is about 7.4 years, versus 0.7
                        years at 5.0 cm (RESCAN collaborators, <em>JAMA</em>, 2013).
                        The answer is not more surveillance. It is surveillance aimed
                        at the patients who are actually moving.
                    </p>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        The cost of the one-size schedule lands hardest on women.
                        Women face a 3 to 4 times higher rupture risk than men at
                        comparable diameters and rupture at smaller sizes (UK Small
                        Aneurysm Trial; a clinical relationship that holds across
                        populations). In US registry data, 17 percent of women
                        ruptured below the standard 5.5 cm threshold, versus 10
                        percent of men (Lo, Schermerhorn et al.,{" "}
                        <em>Journal of Vascular Surgery</em>, 2013). A protocol built
                        around a single diameter and a single interval is, for a
                        meaningful fraction of women, built wrong.
                    </p>

                    <TwoStat
                        a={{ value: "17%", label: "of women ruptured below the standard 5.5 cm threshold" }}
                        b={{ value: "10%", label: "of men ruptured below the same threshold" }}
                    />
                </section>

                {/* ---------- leak 3 ---------- */}
                <section id="leak-3" className="scroll-mt-24 pt-14">
                    <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                        Leak 03
                    </div>
                    <h2 className={`text-zinc-900 md:text-3xl text-2xl mt-3 ${font_head.className}`}>
                        The eligible patient nobody screened
                    </h2>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        The third leak is the one hiding in plain sight in the
                        medical record. United States Preventive Services Task Force
                        guidance recommends a one-time ultrasound for men aged 65 to
                        75 who have ever smoked (Grade B, current as of the 2019
                        statement). The Society for Vascular Surgery goes further,
                        extending screening to women 65 to 75 with a tobacco history
                        and to first-degree relatives of AAA patients.
                    </p>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        By either standard, the patients are there and the screening
                        is not. In one academic health system, of 6,682 patients who
                        were eligible for AAA screening, only 6.9 percent actually
                        received it (<em>Annals of Vascular Surgery</em>, 2021).
                        These are not patients who need to be found in the community.
                        They are already in the system, already have a chart, already
                        came in for something else. They have simply never been
                        flagged as eligible.
                    </p>

                    <StatCallout
                        value="6.9%"
                        label="of 6,682 screening-eligible patients in one academic health system actually received their AAA screen"
                        source="Annals of Vascular Surgery, 2021"
                    />

                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        Women again absorb the gap. They are largely outside the
                        USPSTF screening recommendation, yet their in-hospital
                        mortality after ruptured AAA repair is 34.4 percent, against
                        26.6 percent for men (Society for Vascular Surgery / Vascular
                        Quality Initiative). The population least likely to be
                        screened is among the most likely to die when the aneurysm is
                        missed.
                    </p>

                    <TwoStat
                        a={{ value: "34.4%", label: "in-hospital mortality for women after ruptured AAA repair" }}
                        b={{ value: "26.6%", label: "in-hospital mortality for men" }}
                    />
                </section>

                {/* ---------- cost ---------- */}
                <section id="cost" className="scroll-mt-24 pt-14">
                    <h2 className={`text-zinc-900 md:text-3xl text-2xl ${font_head.className}`}>
                        What the leaks cost
                    </h2>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        The clinical cost is the gap from the opening sentence.
                        Roughly 80 percent of ruptured AAAs are fatal, counting
                        pre-hospital deaths, against 1 to 4 percent for an elective
                        repair (EVAR 1.2 percent, open 3.8 percent). Even a ruptured
                        aneurysm that reaches the operating room carries a 25 percent
                        (endovascular) to 45 percent (open) operative mortality. A
                        small aneurysm kept under genuine surveillance is remarkably
                        safe, with a rupture rate near 0.3 percent, whereas a large
                        aneurysm left unrepaired ruptures in about 26 percent of
                        cases and kills roughly 22 percent from aortic causes (Leone
                        et al., <em>Journal of Clinical Medicine</em>, 2023). The
                        difference between catching a patient and losing one is, quite
                        literally, the difference between a 1 percent problem and an
                        80 percent one.
                    </p>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        The financial cost runs the same direction. An emergent
                        rupture repair costs on the order of 3 to 4 times an elective
                        one, with far longer intensive-care and hospital stays, and
                        that is before accounting for the large share of rupture
                        patients who never generate a bill because they do not
                        survive. An elective repair, by contrast, is a scheduled,
                        reimbursed, margin-positive procedure: one US center reported
                        a hospital contribution margin near 8,000 dollars per
                        elective EVAR (Brinster et al.,{" "}
                        <em>Journal of Vascular Surgery</em>, 2021). Every patient
                        who leaks out is a patient who can return as the expensive,
                        low-margin, high-mortality version of the same disease.
                    </p>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        For a program, the math is uncomfortable: the patients
                        leaking out today are tomorrow&rsquo;s ruptures, and
                        tomorrow&rsquo;s ruptures are worse care and worse economics
                        than the elective cases the program is built to deliver.
                    </p>
                </section>

                {/* ---------- close ---------- */}
                <section id="close" className="scroll-mt-24 pt-14">
                    <h2 className={`text-zinc-900 md:text-3xl text-2xl ${font_head.className}`}>
                        What it takes to close them
                    </h2>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        The three leaks share a structure, and so does the fix. None
                        of it requires finding new patients. It requires not losing
                        the ones already in the data.
                    </p>
                    <ol className="mt-8 space-y-6">
                        <li className="grid grid-cols-[2rem_1fr] gap-4">
                            <span className={`text-primary md:text-xl text-lg ${font_head.className}`}>1.</span>
                            <span className="text-zinc-800 md:text-lg text-base leading-relaxed">
                                <span className={font_med.className}>Find them where they already are. </span>
                                Incidental AAAs flagged in imaging, surveillance
                                patients who have lapsed, screening-eligible patients
                                sitting unidentified in the EHR: these are queries
                                against records the program already owns, not new
                                outreach.
                            </span>
                        </li>
                        <li className="grid grid-cols-[2rem_1fr] gap-4">
                            <span className={`text-primary md:text-xl text-lg ${font_head.className}`}>2.</span>
                            <span className="text-zinc-800 md:text-lg text-base leading-relaxed">
                                <span className={font_med.className}>Personalize the interval. </span>
                                Replace the single calendar with a growth-aware
                                schedule, so the patients who are actually moving, and
                                the women who rupture small, get the attention the
                                average patient does not need. This is the answer to
                                the surveillance critique: better-targeted, not simply
                                more.
                            </span>
                        </li>
                        <li className="grid grid-cols-[2rem_1fr] gap-4">
                            <span className={`text-primary md:text-xl text-lg ${font_head.className}`}>3.</span>
                            <span className="text-zinc-800 md:text-lg text-base leading-relaxed">
                                <span className={font_med.className}>Make the inbound workable. </span>
                                Surfacing lost patients only helps if a real team can
                                act on the list. Prediction has to triage the work so
                                the program&rsquo;s existing staff chase the patients
                                who matter, not all of them at once.
                            </span>
                        </li>
                    </ol>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-8">
                        This is the system we built Voythos&rsquo;s AortaNavigator to
                        be: a layer that finds the leaking patients, personalizes
                        their surveillance against a growth model, and hands the
                        program a worked, prioritized list rather than another
                        dashboard.
                    </p>
                </section>

                {/* ---------- about ---------- */}
                <section id="about" className="scroll-mt-24 pt-14">
                    <h2 className={`text-zinc-900 md:text-3xl text-2xl ${font_head.className}`}>
                        About Voythos
                    </h2>
                    <p className="text-zinc-800 md:text-lg text-base leading-relaxed mt-6">
                        Voythos builds software that helps vascular programs catch the
                        aortic patients who currently fall through the cracks, with
                        predictive models for aortic growth and risk underneath.
                        Founded by Sophia Khan, MD, a vascular surgeon, and team.
                    </p>
                </section>

                {/* ---------- CTA ---------- */}
                <div className="mt-14 bg-zinc-900 text-light md:p-10 p-7">
                    <h2 className={`text-light md:text-3xl text-2xl ${font_head.className}`}>
                        See the leaks in your own program.
                    </h2>
                    <p className="text-light/80 md:text-lg text-base mt-4 leading-snug max-w-xl">
                        AortaNavigator finds the leaking patients, personalizes their
                        surveillance, and hands your team a worked, prioritized list.
                    </p>
                    <div className="mt-7">
                        <Link
                            href="/contact"
                            className={`inline-flex items-center gap-2 bg-primary text-white text-base py-3 px-6 hover:bg-primary/90 transition duration-200 ${font_med.className}`}
                        >
                            Contact us
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                </div>

                {/* ---------- references ---------- */}
                <section id="references" className="scroll-mt-24 pt-16">
                    <h2 className={`text-zinc-900 md:text-2xl text-xl ${font_head.className}`}>
                        References
                    </h2>
                    <ol className="mt-6 space-y-3 text-zinc-600 text-sm leading-relaxed list-decimal list-outside pl-5">
                        <li>Reimerink JJ et al. Systematic review and meta-analysis of population-based mortality from ruptured AAA. <em>Br J Surg.</em> 2013.</li>
                        <li>Wesche et al. 39% of ruptured AAA found incidentally pre-rupture. <em>Ann Vasc Surg.</em> 2024.</li>
                        <li>Standardizing incidental AAA reporting (2.1% to 58%). <em>JACR.</em> 2021.</li>
                        <li>van Walraven C et al. Incidence, follow-up, outcomes of incidental AAA. <em>J Vasc Surg.</em> 2010.</li>
                        <li>The Doctors Company. Detecting and addressing incidental findings. 2024.</li>
                        <li>Newton LE et al. Post-EVAR surveillance adherence (90% to 58%). <em>JAMA Netw Open.</em> 2025.</li>
                        <li>Schanzer A et al. Long-term post-EVAR surveillance. <em>J Vasc Surg.</em> 2014.</li>
                        <li>Jasinski PT et al. EVAR follow-up compliance. <em>Aorta.</em> 2017.</li>
                        <li>Garg T et al. Incomplete surveillance and outcomes (contrary evidence). <em>JAMA Surg.</em> 2015.</li>
                        <li>UK Small Aneurysm Trial. Sex and rupture risk. 1998 to 1999.</li>
                        <li>Lo RC, Schermerhorn ML et al. Sex, diameter, rupture. <em>J Vasc Surg.</em> 2013.</li>
                        <li>RESCAN collaborators. Growth and rupture of small AAA. <em>JAMA.</em> 2013.</li>
                        <li>USPSTF. AAA screening recommendation. 2019.</li>
                        <li>Society for Vascular Surgery. AAA practice guidelines (Chaikof et al.). <em>J Vasc Surg.</em> 2018.</li>
                        <li>Underutilization of AAA screening (6.9% of eligible). <em>Ann Vasc Surg.</em> 2021.</li>
                        <li>SVS/VQI. Women, mortality, and AAA repair (34.4% vs 26.6%).</li>
                        <li>Leone N et al. Rupture, repair, and death of AAA under surveillance. <em>J Clin Med.</em> 2023.</li>
                        <li>Brinster CJ et al. Financial viability of EVAR (~$8k margin per case). <em>J Vasc Surg.</em> 2021.</li>
                    </ol>
                </section>
            </div>
        </article>
    );
};

export default AorticLeakReport;
