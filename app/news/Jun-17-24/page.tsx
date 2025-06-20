import ClientOnly from "@/app/components/ClientOnly";
import Jun17Client from "./Jun17Client";

const Jun17Page = () => {
    return (
        <ClientOnly>
            <Jun17Client />
        </ClientOnly>
    );
}

export default Jun17Page;