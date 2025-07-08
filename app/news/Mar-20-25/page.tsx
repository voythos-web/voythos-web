import ClientOnly from "@/app/components/ClientOnly";
import Mar20Client from "./Mar20Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "March 20 News",
    description: "Voythos joins Northwestern Medicine and Techstars Healthcare Accelerator"
}

const Mar20Page = () => {
    return (
        <ClientOnly>
            <Mar20Client />
        </ClientOnly>
    );
}

export default Mar20Page;