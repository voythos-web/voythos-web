import ClientOnly from "@/app/components/ClientOnly";
import May3Client from "./May3Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "May 3 News",
    description: "Voythos featured in Mayo Clinic Platform_Accelerate showcase"
}

const May3 = () => {
    return (
        <ClientOnly>
            <May3Client />
        </ClientOnly>
    );
}

export default May3