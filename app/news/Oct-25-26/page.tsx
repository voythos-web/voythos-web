import ClientOnly from "@/app/components/ClientOnly";
import Oct25Client from "./Oct25Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "October 25 News",
    description: "Voythos research presented at the 2026 NESVS Annual Meeting"
}

const Oct25 = () => {
    return (
        <ClientOnly>
            <Oct25Client />
        </ClientOnly>
    );
}

export default Oct25
