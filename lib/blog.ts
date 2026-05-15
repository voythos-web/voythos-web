import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    cover?: string;
    author?: string;
}

export interface BlogPost extends BlogPostMeta {
    content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPost(filename: string): BlogPost {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
        cover: data.cover ? String(data.cover) : undefined,
        author: data.author ? String(data.author) : undefined,
        content,
    };
}

export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith(".md"))
        .map((f) => {
            const { content: _content, ...meta } = readPost(f);
            return meta;
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    return readPost(`${slug}.md`);
}

export function formatDate(iso: string): string {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
