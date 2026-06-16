import InsightCard from "../components/insights/InsightCard";
import { font_head, font_med } from "../fonts";
import { insightPosts } from "./posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights | Voythos",
    description: "Perspectives and analysis on AI in aortic care, cardiovascular disease prediction, and the future of clinical decision support from the Voythos team.",
    openGraph: {
        title: "Insights | Voythos",
        description: "Perspectives and analysis on AI in aortic care, cardiovascular disease prediction, and the future of clinical decision support.",
        url: "https://www.voythos.io/insights",
        siteName: "Voythos",
        type: "website",
    },
};

export default function Insights() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Voythos Insights",
        "description": metadata.description,
        "url": "https://www.voythos.io/insights",
        "publisher": {
            "@type": "Organization",
            "name": "Voythos",
            "url": "https://www.voythos.io",
        },
        "blogPost": insightPosts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://www.voythos.io/insights/${post.slug}`,
            "datePublished": post.date,
            "author": {
                "@type": "Organization",
                "name": "Voythos",
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full flex flex-col mt-20">
                <div className="flex flex-col justify-center md:h-52 h-40 bg-[url('/images/backgrounds/allnews_bg.png')] bg-cover">
                    <h1 className={`md:pl-12 px-4 md:text-5xl text-4xl text-light ${font_head.className}`}>
                        Insights
                    </h1>
                </div>
                <div className="md:mx-24 mx-4">
                    <h2 className={`text-3xl text-zinc-800 md:pt-20 pt-10 ${font_med.className}`}>
                        Perspectives & Analysis
                    </h2>
                    <hr className="text-zinc-500 mt-4" />

                    {insightPosts.length > 0 ? (
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mt-8 max-w-full mb-10">
                            {insightPosts.map((post) => (
                                <InsightCard
                                    key={post.slug}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.date}
                                    category={post.category}
                                    href={`/insights/${post.slug}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-32 text-zinc-400">
                            <div className={`text-2xl ${font_head.className}`}>
                                Coming soon
                            </div>
                            <p className="text-lg pt-2">
                                New insights are on the way.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
