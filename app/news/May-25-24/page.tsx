import ClientOnly from "@/app/components/ClientOnly";
import May25Client from "./May25Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "May 25 News",
    description: "Voythos Awarded First Place in LifeX 2023 Accelerator"
}

const May25Page = () => {
    return (
        <ClientOnly>
            <May25Client />
        </ClientOnly>
    );
}

export default May25Page;