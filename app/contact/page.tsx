import ClientOnly from "../components/ClientOnly";
import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
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