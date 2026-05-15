import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/app/components/blog/BlogPost";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";

const SITE_URL = "https://www.voythos.ai";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Blog" };

    const url = `${SITE_URL}/blog/${slug}`;
    const imageUrl = post.cover ? `${SITE_URL}${post.cover}` : undefined;

    return {
        title: post.title,
        description: post.excerpt || post.title,
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.excerpt || post.title,
            type: "article",
            url,
            images: imageUrl ? [imageUrl] : undefined,
            publishedTime: post.date || undefined,
            authors: post.author ? [post.author] : undefined,
        },
        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            title: post.title,
            description: post.excerpt || post.title,
            images: imageUrl ? [imageUrl] : undefined,
        },
    };
}

const BlogPostPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const url = `${SITE_URL}/blog/${slug}`;
    const imageUrl = post.cover ? `${SITE_URL}${post.cover}` : undefined;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt || post.title,
        datePublished: post.date,
        dateModified: post.date,
        author: post.author
            ? { "@type": "Person", name: post.author }
            : { "@type": "Organization", name: "Voythos" },
        publisher: {
            "@type": "Organization",
            name: "Voythos",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/logo_blue_2.svg`,
            },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        ...(imageUrl ? { image: imageUrl } : {}),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostView
                title={post.title}
                date={formatDate(post.date)}
                cover={post.cover}
                author={post.author}
                content={post.content}
            />
        </>
    );
};

export default BlogPostPage;
