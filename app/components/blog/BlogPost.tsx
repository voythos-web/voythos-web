import { font_head, font_med } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface BlogPostProps {
    title: string;
    date: string;
    cover?: string;
    author?: string;
    content: string;
}

const BlogPostView: React.FC<BlogPostProps> = ({
    title,
    date,
    cover,
    author,
    content,
}) => {
    return (
        <article className="flex flex-col md:mt-32 mt-24 md:mx-64 mx-4 md:pb-16 pb-8">
            <div className="text-xl text-zinc-800">{date}</div>
            <h1
                className={`md:text-5xl text-3xl text-zinc-800 pt-5 ${font_head.className}`}
            >
                {title}
            </h1>
            {author && (
                <div className={`text-lg text-zinc-700 pt-3 ${font_med.className}`}>
                    By {author}
                </div>
            )}

            {cover && (
                <div className="pt-10 w-full">
                    <Image
                        src={cover}
                        alt={title}
                        width={1600}
                        height={1067}
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="w-full h-auto"
                        priority
                    />
                </div>
            )}

            <div
                className={`pt-10 md:text-xl text-lg text-zinc-800 ${font_med.className}`}
            >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ children }) => (
                            <h1
                                className={`md:text-4xl text-2xl text-zinc-800 mt-10 mb-4 ${font_head.className}`}
                            >
                                {children}
                            </h1>
                        ),
                        h2: ({ children }) => (
                            <h2
                                className={`md:text-3xl text-2xl text-zinc-800 mt-10 mb-4 ${font_head.className}`}
                            >
                                {children}
                            </h2>
                        ),
                        h3: ({ children }) => (
                            <h3
                                className={`md:text-2xl text-xl text-zinc-800 mt-8 mb-3 ${font_head.className}`}
                            >
                                {children}
                            </h3>
                        ),
                        p: ({ children }) => (
                            <p className="my-5 leading-relaxed">{children}</p>
                        ),
                        a: ({ href, children }) => (
                            <a
                                href={href}
                                target={href?.startsWith("http") ? "_blank" : undefined}
                                rel={
                                    href?.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="text-primary underline underline-offset-4 hover:opacity-60 transition"
                            >
                                {children}
                            </a>
                        ),
                        ul: ({ children }) => (
                            <ul className="list-disc list-outside my-5 pl-6 space-y-2">
                                {children}
                            </ul>
                        ),
                        ol: ({ children }) => (
                            <ol className="list-decimal list-outside my-5 pl-6 space-y-2">
                                {children}
                            </ol>
                        ),
                        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-zinc-700">
                                {children}
                            </blockquote>
                        ),
                        code: ({ children, ...props }) => {
                            const isInline = !(props as { className?: string }).className;
                            return isInline ? (
                                <code className="bg-lightbg text-zinc-900 px-1.5 py-0.5 text-base">
                                    {children}
                                </code>
                            ) : (
                                <code className="block bg-zinc-100 text-zinc-900 p-4 overflow-x-auto text-base">
                                    {children}
                                </code>
                            );
                        },
                        pre: ({ children }) => (
                            <pre className="my-6 overflow-x-auto">{children}</pre>
                        ),
                        hr: () => <hr className="my-10 border-zinc-300" />,
                        img: ({ src, alt }) => (
                            <span className="block my-8">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} className="w-full h-auto" />
                            </span>
                        ),
                        strong: ({ children }) => (
                            <strong className="text-zinc-900">{children}</strong>
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>

            <Link
                href="/blog"
                className="flex flex-row md:mt-20 mt-10 group cursor-pointer w-fit"
            >
                <MdKeyboardArrowLeft className="text-zinc-600 text-2xl mt-1 group-hover:opacity-50 group-hover:-translate-x-2 duration-200 ease-in transition" />
                <div className="text-2xl text-zinc-600 group-hover:opacity-50">
                    All posts
                </div>
            </Link>
        </article>
    );
};

export default BlogPostView;
