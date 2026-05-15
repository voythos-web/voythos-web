import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/app/components/blog/BlogPost";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";

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

    return {
        title: post.title,
        description: post.excerpt || post.title,
        openGraph: {
            title: post.title,
            description: post.excerpt || post.title,
            type: "article",
            images: post.cover ? [post.cover] : undefined,
        },
    };
}

const BlogPostPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <BlogPostView
            title={post.title}
            date={formatDate(post.date)}
            cover={post.cover}
            author={post.author}
            content={post.content}
        />
    );
};

export default BlogPostPage;
