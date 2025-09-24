import * as React from 'react';
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ContactForm } from '../components/contactForm';
import chip from '../images/pexels-tima.jpg';

const heroStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "auto",
  height: "50em",
  padding: "3em 15em",
  backgroundColor: "black",
  backgroundSize: "cover"
};

const heroHeadingStyles = {
  fontFamily: "Kulim Park, sans-serif",
  letterSpacing: "-0.05em",
  color: "white",
  marginBottom: "2em"
};

const heroSubHeadingStyles = {
  fontFamily: "Kulim Park Light, sans-serif",
  fontSize: "16px",
  color: "white",
  fontWeight: "300",
  paddingTop: "5em"
};

const imageStyle = {
    height: "20em",
    width: "30em"
};

const AboutPage = () => {
    return (
        <React.Fragment>
          <NavBar />
          <div style={heroStyles}>
            <h1 style={heroHeadingStyles}>About Us</h1>
            <img style={imageStyle} src={chip} />
            <p style={heroSubHeadingStyles}>
              Since 1999, Goldentek has been powering innovation with high-performance display technology across North America and beyond.
              <br />
              <br />
              From LCD and TFT modules to next-gen OLED and E-ink displays, we deliver products that bring clarity, color, and reliability to your designs.

              Backed by our state-of-the-art factory in China and certified to ISO 9001, ISO 14000, and TS 16949 standards, every module—ranging from 1.77" to 15.6"—is built for excellence.
              <br />
              <br />
              With local inventory hubs in Anaheim, CA; Ciudad Juárez, Mexico; and Hong Kong, we ensure fast, just-in-time delivery so you can keep your projects moving without delays.

              Goldentek combines global reach with local support—delivering the displays you need, when you need them.
            </p>
            {/* <p style={heroSubHeadingStyles}>
              OLED and E-ink also offered through strategic partnerships.
            </p> */}
            {/* <button style={heroButtonStyles}>Explore Products</button> */}
          </div> 
          <ContactForm />
          <Footer />
        </React.Fragment>
    );
};

export default AboutPage;