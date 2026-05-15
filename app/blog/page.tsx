import type { Metadata } from "next";
import BlogCard from "@/app/components/blog/BlogCard";
import { font_head, font_med } from "@/app/fonts";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Blog",
    description: "Insights and perspectives from the Voythos team.",
};

const BlogIndex = () => {
    const posts = getAllPosts();

    return (
        <div className="w-full flex flex-col mt-20">
            <div className="flex flex-col justify-center md:h-52 h-40 bg-[url('/images/backgrounds/allnews_bg.png')] bg-cover">
                <div
                    className={`md:pl-12 px-4 md:text-5xl text-4xl text-light ${font_head.className}`}
                >
                    Blog
                </div>
            </div>
            <div className="md:mx-24 mx-4">
                <div
                    className={`text-3xl text-zinc-800 md:pt-20 pt-10 ${font_med.className}`}
                >
                    Latest posts
                </div>
                <hr className="text-zinc-500 mt-4" />
                {posts.length === 0 ? (
                    <div className="text-zinc-700 text-lg pt-10 pb-20">
                        No posts yet. Check back soon.
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mt-8 max-w-full mb-10">
                        {posts.map((p) => (
                            <BlogCard
                                key={p.slug}
                                title={p.title}
                                date={formatDate(p.date)}
                                excerpt={p.excerpt}
                                href={`/blog/${p.slug}`}
                                cover={p.cover}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogIndex;
