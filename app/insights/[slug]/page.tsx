import { insightPosts } from "../posts";
import { notFound } from "next/navigation";
import { font_head } from "@/app/fonts";
import InsightNav from "./InsightNav";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = insightPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Not Found" };

    return {
        title: `${post.title} | Voythos Insights`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.voythos.io/insights/${post.slug}`,
            siteName: "Voythos",
            type: "article",
            publishedTime: post.date,
        },
    };
}

export async function generateStaticParams() {
    return insightPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function InsightPage({ params }: PageProps) {
    const { slug } = await params;
    const postIndex = insightPosts.findIndex((p) => p.slug === slug);

    if (postIndex === -1) {
        notFound();
    }

    const post = insightPosts[postIndex];
    const nextPost = insightPosts[postIndex + 1] ?? null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "url": `https://www.voythos.io/insights/${post.slug}`,
        "author": {
            "@type": "Organization",
            "name": "Voythos",
            "url": "https://www.voythos.io",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Voythos",
            "url": "https://www.voythos.io",
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.voythos.io/insights/${post.slug}`,
        },
        "isPartOf": {
            "@type": "Blog",
            "name": "Voythos Insights",
            "url": "https://www.voythos.io/insights",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="flex flex-col md:mt-32 mt-24 md:mx-64 mx-4">
                <div className="text-sm tracking-wide uppercase text-primary font-medium">
                    {post.category}
                </div>
                <time className="text-xl text-zinc-800 pt-2">
                    {post.date}
                </time>
                <h1 className={`md:text-5xl text-3xl text-zinc-800 pt-5 ${font_head.className}`}>
                    {post.title}
                </h1>
                <div className="pt-10 flex flex-col gap-6">
                    {post.body.map((paragraph, index) => (
                        <p key={index} className="md:text-xl text-lg text-zinc-800 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <InsightNav nextSlug={nextPost?.slug ?? null} />
            </article>
        </>
    );
}
