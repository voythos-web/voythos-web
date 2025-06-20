import ClientOnly from "@/app/components/ClientOnly";
import Feb18Client from "./Feb18Client";

const Feb18Page = () => {
    return (
        <ClientOnly>
            <Feb18Client />
        </ClientOnly>
    );
}

export default Feb18Page;