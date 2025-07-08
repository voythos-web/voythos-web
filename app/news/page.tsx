import ClientOnly from "../components/ClientOnly";
import NewsClient from "./NewsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "News",
    description: "The latest news and updates"
}

const News = () => {
    return (
        <ClientOnly>
            <NewsClient />
        </ClientOnly>
    );
}

export default News