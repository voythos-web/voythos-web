import ClientOnly from "@/app/components/ClientOnly";
import Apr9Client from "./Apr9Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "April 9 News",
    description: "Voythos presents at the 2026 MedTech Innovator Radar Forum"
}

const Apr9 = () => {
    return (
        <ClientOnly>
            <Apr9Client />
        </ClientOnly>
    );
}

export default Apr9
