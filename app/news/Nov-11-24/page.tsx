import ClientOnly from "@/app/components/ClientOnly";
import Nov11Client from "./Nov11Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "November 11 News",
    description: "Voythos Recognized as One of the Most Promising Life Science Companies"
}

const Nov11Page = () => {
    return (
        <ClientOnly>
            <Nov11Client />
        </ClientOnly>
    );
}

export default Nov11Page;