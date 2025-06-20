import ClientOnly from "@/app/components/ClientOnly";
import Nov11Client from "./Nov11Client";

const Nov11Page = () => {
    return (
        <ClientOnly>
            <Nov11Client />
        </ClientOnly>
    );
}

export default Nov11Page;