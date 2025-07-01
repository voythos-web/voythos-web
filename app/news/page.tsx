import ClientOnly from "../components/ClientOnly";
import NewsClient from "./NewsClient";

export const metadata = {
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