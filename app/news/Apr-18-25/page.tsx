import ClientOnly from "@/app/components/ClientOnly";
import Apr18Client from "./Apr18Client";

export const metadata = {
    title: "April 18 News",
    description: "Voythos CEO interviewed on Forging the Future podcast"
}

const Apr18Page = () => {
    return (
        <ClientOnly>
            <Apr18Client />
        </ClientOnly>
    );
}

export default Apr18Page;