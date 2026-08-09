import ClientOnly from "@/app/components/ClientOnly";
import Jul13Client from "./Jul13Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "July 13 News",
    description: "Voythos announces a data partnership with Northwestern Medicine Ventures and Innovation"
}

const Jul13 = () => {
    return (
        <ClientOnly>
            <Jul13Client />
        </ClientOnly>
    );
}

export default Jul13
