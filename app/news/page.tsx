import ClientOnly from "../components/ClientOnly";
import NewsClient from "./NewsClient";

const News = () => {
    return (
        <ClientOnly>
            <NewsClient />
        </ClientOnly>
    );
}

export default News