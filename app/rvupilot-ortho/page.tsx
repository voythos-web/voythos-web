import type { Metadata } from "next";
import { font_head, font_med } from "@/app/fonts";
import VideoPlayer from "@/app/components/solutions/VideoPlayer";
import ScrollReveal from "@/app/components/ScrollReveal";

// INVISIBLE PAGE — reachable only via the ortho cold-email link.
// noindex/nofollow here + excluded from sitemap (next-sitemap.config.js) + Disallow in public/robots.txt
// + intentionally NOT linked from Navbar/Footer/any page. Do not add inbound links.
export const metadata: Metadata = {
    title: "RVUPilot",
    description:
        "Dictate your operative note. RVUPilot calculates the RVUs from what you documented and surfaces specific language that would capture more — for procedures you actually performed. In beta.",
    robots: { index: false, follow: false, nocache: true },
};

const RVUPilotOrthoPage = () => {
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
                    md:pt-28
                    pt-20
                    md:pb-24
                    pb-16
                    md:px-20
                    px-4
                "
            >
                <div className="max-w-4xl w-full flex flex-col items-center text-center">
                    <div className={`text-primary md:text-base text-sm tracking-[0.25em] font-mono`}>
                        RVUPILOT &nbsp;&middot;&nbsp; IN BETA
                    </div>
                    <h1
                        className={`text-zinc-800 md:text-6xl text-4xl pt-4 ${font_head.className}`}
                    >
                        Dictate your op note. Capture every RVU you earned.
                    </h1>
                    <p
                        className={`text-zinc-700 md:text-2xl text-lg md:pt-6 pt-4 max-w-3xl ${font_med.className}`}
                    >
                        RVUPilot codes your operative note in real time and
                        surfaces the RVUs you might have missed, for things you
                        actually did. Now in free beta for orthopedic and spine
                        surgeons.
                    </p>

                    <div className="md:pt-10 pt-8">
                        <a
                            href="https://coding.voythos.io?utm_source=coldemail&utm_medium=email&utm_campaign=rvupilot_ortho&utm_content=lp_signup"
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
                            Get early access
                        </a>
                    </div>
                </div>
            </section>

            {/* how it works */}
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
                <ScrollReveal className="max-w-5xl w-full">
                    <h2
                        className={`text-light md:text-4xl text-3xl text-center ${font_head.className}`}
                    >
                        How it works
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 md:pt-14 pt-10">
                        {/* step 1 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                01
                            </div>
                            <div
                                className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}
                            >
                                Dictate
                            </div>
                            <p className="text-light/85 md:text-base text-sm pt-4 leading-relaxed">
                                Dictate your operative note directly into
                                RVUPilot. It analyzes what&apos;s there in real
                                time.
                            </p>
                        </div>

                        {/* step 2 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                02
                            </div>
                            <div
                                className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}
                            >
                                Analyze
                            </div>
                            <p className="text-light/85 md:text-base text-sm pt-4 leading-relaxed">
                                RVUPilot parses the note, identifies the CPT-coded
                                procedures, and calculates the current RVU based
                                on what the language supports.
                            </p>
                        </div>

                        {/* step 3 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col">
                            <div
                                className={`text-light/60 md:text-base text-sm tracking-[0.25em] font-mono`}
                            >
                                03
                            </div>
                            <div
                                className={`text-light md:text-2xl text-xl pt-2 ${font_head.className}`}
                            >
                                Suggest
                            </div>
                            <p className="text-light/85 md:text-base text-sm pt-4 leading-relaxed">
                                See specific language opportunities to capture
                                additional RVUs. Only for procedures the note
                                already implies you performed and that your
                                documentation can clinically support.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* why this exists */}
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
                <ScrollReveal className="max-w-3xl w-full">
                    <h2
                        className={`text-zinc-800 md:text-4xl text-3xl text-center ${font_head.className}`}
                    >
                        Why this exists
                    </h2>
                    <div className="md:pt-10 pt-6 space-y-5 text-zinc-700 md:text-lg text-base leading-relaxed">
                        <p>
                            Operative documentation has some of the most intricate
                            requirements in medicine. Small wording differences
                            mean meaningful RVU differences. Surgeons can&apos;t
                            realistically keep up with every code, modifier, and
                            language nuance while running a full clinic and OR
                            schedule.
                        </p>
                        <p>
                            RVUPilot does that part. So you don&apos;t leave
                            reimbursement on the table for work you actually did.
                        </p>
                        <p className="text-zinc-600 md:text-base text-sm pt-2">
                            To be clear: RVUPilot does not invent procedures. It
                            identifies language gaps for things you already did
                            and documented. The judgment of what is clinically
                            supportable stays with the surgeon.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* video — RVUPilot in action */}
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
                <ScrollReveal className="max-w-4xl w-full">
                    <h2
                        className={`text-light md:text-4xl text-3xl text-center ${font_head.className}`}
                    >
                        See RVUPilot in action
                    </h2>
                    <p className="text-light/70 md:text-lg text-base text-center md:pt-4 pt-3">
                        RVUPilot: from dictation to RVU optimization in real time.
                    </p>

                    <div className="md:pt-12 pt-8">
                        <div className="border border-white/10 shadow-[0_0_80px_rgba(47,79,225,0.12)]">
                            <VideoPlayer
                                src="/videos/rvupilot-ortho.mp4"
                                poster="/images/rvupilot/rvupilot-ortho-poster.jpg"
                                title="RVUPilot"
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* closer */}
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
                <ScrollReveal className="max-w-3xl w-full text-center">
                    <h2
                        className={`text-zinc-800 md:text-4xl text-3xl ${font_head.className}`}
                    >
                        Ready to try RVUPilot?
                    </h2>
                    <p className="text-zinc-700 md:text-lg text-base md:pt-6 pt-4 leading-relaxed">
                        Currently in beta. Sign up and try it on your next op
                        note.
                    </p>

                    <div className="md:pt-10 pt-8">
                        <a
                            href="https://coding.voythos.io?utm_source=coldemail&utm_medium=email&utm_campaign=rvupilot_ortho&utm_content=lp_signup_closer"
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
                            Get early access
                        </a>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default RVUPilotOrthoPage;
