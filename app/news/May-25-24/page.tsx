import ClientOnly from "@/app/components/ClientOnly";
import May25Client from "./May25Client";

const May25Page = () => {
    return (
        <ClientOnly>
            <May25Client />
        </ClientOnly>
    );
}

export default May25Page;