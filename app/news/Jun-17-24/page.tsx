import ClientOnly from "@/app/components/ClientOnly";
import Jun17Client from "./Jun17Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "June 17 News",
    description: "Voythos joins Science Center Capital Readiness Program"
}

const Jun17Page = () => {
    return (
        <ClientOnly>
            <Jun17Client />
        </ClientOnly>
    );
}

export default Jun17Page;