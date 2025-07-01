import ClientOnly from "@/app/components/ClientOnly";
import Sep9Client from "./Sep9Client";

export const metadata = {
    title: "September 9 News",
    description: "Mayo Clinic Platform Selects Voythos to Join Prestigious Accelerator"
}

const Sep9Page = () => {
    return (
        <ClientOnly>
            <Sep9Client />
        </ClientOnly>
    );
}

export default Sep9Page;