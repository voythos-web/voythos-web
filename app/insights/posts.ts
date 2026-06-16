export interface InsightPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    body: string[];
}

export const insightPosts: InsightPost[] = [
    // Add your blog posts here. Each post needs a unique slug (used in the URL),
    // a title, short excerpt, date, category, and body paragraphs.
    //
    // Example:
    // {
    //     slug: "understanding-aortic-disease",
    //     title: "Understanding Aortic Disease: What You Need to Know",
    //     excerpt: "A deep dive into the complexities of aortic disease and how AI is transforming early detection.",
    //     date: "March 5, 2026",
    //     category: "Clinical Insights",
    //     body: [
    //         "First paragraph of the blog post...",
    //         "Second paragraph with more details...",
    //         "Concluding thoughts..."
    //     ]
    // },
];
