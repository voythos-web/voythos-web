import ClientOnly from "@/app/components/ClientOnly";
import Feb18Client from "./Feb18Client";

export const metadata = {
    title: "February 18 News",
    description: "Voythos joins Rice Nexus"
}

const Feb18Page = () => {
    return (
        <ClientOnly>
            <Feb18Client />
        </ClientOnly>
    );
}

export default Feb18Page;