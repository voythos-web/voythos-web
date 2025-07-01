import ClientOnly from "../components/ClientOnly";
import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact",
    description: "Get in touch with us"
}

const Contact = () => {
    return (
        <ClientOnly>
            <ContactClient />
        </ClientOnly>
    );
}

export default Contact;