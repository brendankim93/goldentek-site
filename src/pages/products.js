import * as React from 'react';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';
import { ContactForm } from '../components/contactForm';
import { ProductCards } from '../components/productCards';

const ProductsPage = () => {
    return (
        <>
          <NavBar />
          <ProductCards />
          <ContactForm /> 
          <Footer />
        </>
    );
};

export default ProductsPage;
