import type { MetadataRoute } from "next";
import { insightPosts } from "./insights/posts";

const BASE_URL = "https://www.voythos.io";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/contact`,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/news`,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/insights`,
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];

    const newsPages: MetadataRoute.Sitemap = [
        "May-3-25", "Apr-18-25", "Mar-20-25", "Feb-18-25",
        "Nov-11-24", "Sep-9-24", "Jun-17-24", "May-25-24", "Jul-10-25",
    ].map((slug) => ({
        url: `${BASE_URL}/news/${slug}`,
        changeFrequency: "yearly" as const,
        priority: 0.6,
    }));

    const insightPages: MetadataRoute.Sitemap = insightPosts.map((post) => ({
        url: `${BASE_URL}/insights/${post.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...newsPages, ...insightPages];
}
