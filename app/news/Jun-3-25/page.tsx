import ClientOnly from "@/app/components/ClientOnly";
import Jun3Client from "./Jun3Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "June 3 News",
    description: "Voythos pitches at Techstars Northwestern Medicine Demo Day"
}

const Jun3 = () => {
    return (
        <ClientOnly>
            <Jun3Client />
        </ClientOnly>
    );
}

export default Jun3
