import ClientOnly from "@/app/components/ClientOnly";
import Oct28Client from "./Oct28Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "October 28 News",
    description: "Voythos selected for the SVS Foundation Enrico Ascher Vascular Innovation Institute"
}

const Oct28 = () => {
    return (
        <ClientOnly>
            <Oct28Client />
        </ClientOnly>
    );
}

export default Oct28
