import ClientOnly from "@/app/components/ClientOnly";
import May3Client from "./May3Client";

const May3 = () => {
    return (
        <ClientOnly>
            <May3Client />
        </ClientOnly>
    );
}

export default May3