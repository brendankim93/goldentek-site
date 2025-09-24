import * as React from 'react';
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ContactForm } from "../components/contactForm";

const ContactPage = () => {
    return (
        <>
        <NavBar />
        <ContactForm />
        <Footer />
        </>
    );
};

export default ContactPage;