import ClientOnly from "@/app/components/ClientOnly";
import Jul10Client from "./Jul10Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jul 10 News",
    description: "test"
}

const Jul10Page = () => {
    return (
        <ClientOnly>
            <Jul10Client />
        </ClientOnly>
    );
}

export default Jul10Page;