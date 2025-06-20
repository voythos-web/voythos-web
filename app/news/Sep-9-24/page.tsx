import ClientOnly from "@/app/components/ClientOnly";
import Sep9Client from "./Sep9Client";

const Sep9Page = () => {
    return (
        <ClientOnly>
            <Sep9Client />
        </ClientOnly>
    );
}

export default Sep9Page;