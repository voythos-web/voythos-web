import ClientOnly from "@/app/components/ClientOnly";
import Oct13Client from "./Oct13Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "October 13 News",
    description: "Voythos selected for TechCrunch Startup Battlefield 200"
}

const Oct13 = () => {
    return (
        <ClientOnly>
            <Oct13Client />
        </ClientOnly>
    );
}

export default Oct13
