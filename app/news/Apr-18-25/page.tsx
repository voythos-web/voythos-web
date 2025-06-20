import ClientOnly from "@/app/components/ClientOnly";
import Apr18Client from "./Apr18Client";

const Apr18Page = () => {
    return (
        <ClientOnly>
            <Apr18Client />
        </ClientOnly>
    );
}

export default Apr18Page;