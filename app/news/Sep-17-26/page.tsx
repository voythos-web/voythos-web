import ClientOnly from "@/app/components/ClientOnly";
import Sep17Client from "./Sep17Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "September 17 News",
    description: "Voythos presents research on renal malperfusion after acute type B dissection at MVSS 2026"
}

const Sep17 = () => {
    return (
        <ClientOnly>
            <Sep17Client />
        </ClientOnly>
    );
}

export default Sep17
