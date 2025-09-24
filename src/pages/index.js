import * as React from "react";
import { Link } from "gatsby";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ProductCards } from '../components/productCards';
import InfoPage from './info';
import IndustriesPage from './industries';
import { ContactForm } from '../components/contactForm';

// const titleStyles = {
//   fontFamily: "Kulim Park, sans-serif",
//   fontSize: "24px",
//   marginLeft: "10px"
// };

const heroStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  height: "50em",
  backgroundColor: "black",
  backgroundSize: "cover"
};

const heroHeadingStyles = {
  fontFamily: "Kulim Park, sans-serif",
  fontSize: "64px",
  letterSpacing: "-0.05em",
  color: "white"
};

const heroSubHeadingStyles = {
  fontFamily: "Kulim Park Light, sans-serif",
  fontSize: "18px",
  color: "white",
  fontWeight: "350",
  opacity: "0.75"
};

const heroButtonStyles = {
  fontFamily: "Kulim Park, sans-serif",
  fontSize: "16px",
  color: "white",
  padding: "12px 20px",
  borderRadius: "12px",
  backgroundColor: "#008CBA",
  border: "none",
  marginTop: "40px",
  cursor: "pointer"
};

const IndexPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div style={heroStyles}>
        <h1 style={heroHeadingStyles}>Providing display solutions <br></br>to meet all of your needs.</h1>
        <p style={heroSubHeadingStyles}>
          We specialize in design, manufacturing, and supply of high-quality LCD and TFT modules.
        </p>
        <p style={heroSubHeadingStyles}>
          OLED and E-ink also offered through strategic partnerships.
        </p>
        <Link to="/products">
        <button style={heroButtonStyles}>Explore Products</button>
        </Link>
      </div> 
      <InfoPage />
      <IndustriesPage />
      <ProductCards />
      <ContactForm />
      <Footer />
    </React.Fragment>
  )
};

export default IndexPage

export const Head = () => <title>GOLDENTEK - Technology</title>
