import ClientOnly from "../components/ClientOnly";
import ContactClient from "./ContactClient";

const Contact = () => {
    return (
        <ClientOnly>
            <ContactClient />
        </ClientOnly>
    );
}

export default Contact;