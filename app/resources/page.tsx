import type { Metadata } from "next";
import Link from "next/link";
import { font_head, font_med } from "@/app/fonts";
import { RESOURCES, RESOURCES_INDEXABLE } from "@/lib/resources";

export const metadata: Metadata = {
    title: "Resources",
    description:
        "Cited reports and evidence on the aortic care gap, from the Voythos team.",
    robots: RESOURCES_INDEXABLE ? undefined : { index: false, follow: false },
};

const ResourcesIndex = () => {
    return (
        <div className="w-full flex flex-col mt-20">
            <div className="flex flex-col justify-center md:h-52 h-40 bg-[url('/images/backgrounds/allnews_bg.png')] bg-cover">
                <div className={`md:pl-12 px-4 md:text-5xl text-4xl text-light ${font_head.className}`}>
                    Resources
                </div>
            </div>

            <div className="md:mx-24 mx-4">
                <div className={`text-3xl text-zinc-800 md:pt-20 pt-10 ${font_med.className}`}>
                    Reports &amp; evidence
                </div>
                <p className="text-zinc-600 md:text-lg text-base mt-3 max-w-2xl">
                    Cited research on where vascular programs lose aortic patients,
                    and what the evidence says it costs.
                </p>
                <hr className="text-zinc-500 mt-4" />

                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mt-8 mb-16">
                    {RESOURCES.map((r) => (
                        <Link
                            key={r.slug}
                            href={`/resources/${r.slug}`}
                            className="group border border-zinc-300 hover:border-primary bg-lightbg flex flex-col transition duration-200 md:p-8 p-6"
                        >
                            <div className={`text-primary text-xs tracking-[0.18em] uppercase ${font_med.className}`}>
                                {r.kind}
                            </div>
                            <div className={`md:text-2xl text-xl text-zinc-800 group-hover:text-primary transition duration-200 mt-4 ${font_head.className}`}>
                                {r.title}
                            </div>
                            <div className="text-zinc-600 text-base mt-3 leading-snug flex-1">
                                {r.description}
                            </div>
                            <div className={`text-zinc-800 text-sm mt-6 inline-flex items-center gap-1.5 ${font_med.className}`}>
                                Read the report
                                <span aria-hidden className="group-hover:translate-x-1 transition">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourcesIndex;
