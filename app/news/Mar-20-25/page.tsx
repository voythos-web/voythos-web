import ClientOnly from "@/app/components/ClientOnly";
import Mar20Client from "./Mar20Client";

const Mar20Page = () => {
    return (
        <ClientOnly>
            <Mar20Client />
        </ClientOnly>
    );
}

export default Mar20Page;