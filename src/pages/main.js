import React, { useState } from "react"
import '../styles.css'
import tft from '../images/TFTlime.jpg'
import oled from '../images/oled image.jpg'
import mono from '../images/mono-display.jpg'
import gradient from '../images/gradient.jpg';

const navContainerStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "black",
  color: "white",
  paddingLeft: "20em",
  paddingRight: "20em"
};

const linkContainerStyles = {
  fontFamily: "Kulim Park Light, sans-serif",
  fontWeight: "300",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "1em"
};

const titleStyles = {
  fontFamily: "Kulim Park, sans-serif",
  fontSize: "24px",
  marginLeft: "10px"
};

const navLinkStyles = {
  margin: "10px",
  textDecoration: "none",
  color: "white",
  fontSize: "14px"
};

const heroStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  height: "50em",
  // backgroundColor: "white",
  backgroundImage: `url(${gradient})`,
  backgroundSize: "cover"
};

const productsContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "auto",
  height: "53em",
  backgroundColor: "white",
  fontFamily: "Kulim Park, sans-serif",
  paddingTop: "5em"
  // fontSize: "64px",
  // letterSpacing: "-0.05em",
  // color: "black"
};

const productsSubHeadingStyles = {
  fontFamily: "Kulim Park Light, sans-serif",
  fontSize: "14px",
  color: "black",
  fontWeight: "350"
};

const productsCardContainer = {
  display: "flex",
  flexDirection: "row",
  marginTop: "1em"
};

const productCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  margin: "2rem",
  // border: "1px solid black",
  boxShadow: "0 0 2px rgba(33,33,33,.75)",
  borderRadius: "40px",
  backgroundColor: "white",
  opacity: "1"
};

const productCardHover = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  margin: "2rem",
  borderRadius: "40px",
  // border: "1px solid black",
  backgroundColor: "white",
  // opacity: "0.75",
  // filter: "contrast(130%) brightness(52%)",
  boxShadow: "0 0 12px rgba(33,33,33,.75)",
  cursor: "pointer"
}

const productPhoto = {
  width: "20em",
  height: "20em"
};

const productText = {
  fontSize: "12px",
  fontFamily: "Kulim Park Light, sans-serif",
  marginBottom: "3em"
};

const heroHeadingStyles = {
  fontFamily: "Kulim Park, sans-serif",
  fontSize: "64px",
  letterSpacing: "-0.05em",
  color: "black"
};

const heroSubHeadingStyles = {
  fontFamily: "Kulim Park Light, sans-serif",
  fontSize: "18px",
  color: "#616161",
  fontWeight: "350",
  marginBottom: "3em",
  opacity: "0.75"
};

const heroButtonStyles = {
  fontFamily: "Kulim Park, sans-serif",
  fontSize: "16px",
  color: "white",
  padding: "12px 20px",
  borderRadius: "12px",
  backgroundColor: "#008CBA",
  border: "none"
};

const footer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "black",
  width: "auto",
  height: "10em"
}

const footerContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const footerText = {
  color: "white",
  fontSize: "12px",
  fontFamily: "Kulim Park Light, sans-serif",
}

const hrStyles = {
  width: "30%",
  opacity: "0.25",
  marginBottom: "1.5rem"
}

const IndexPage = () => {
  const [hoverTft, setHoverTft] = useState(false);
  const [hoverOled, setHoverOled] = useState(false);
  const [hoverMono, setHoverMono] = useState(false);
  
  return (
    <div>
      <div style={navContainerStyles}>
        <div>
          <h1 style={titleStyles}>Goldentek Inc.</h1>
        </div>
        <div style={linkContainerStyles}>
          <a href=" " style={navLinkStyles}>Home</a>
          <a href=" " style={navLinkStyles}>Products</a>
          <a href=" " style={navLinkStyles}>About Us</a>
          <a href=" " style={navLinkStyles}>Contact</a>
        </div>
      </div>
      <div style={heroStyles}>
        <h1 style={heroHeadingStyles}>Providing display solutions <br></br>to meet all of your needs.</h1>
        <p style={heroSubHeadingStyles}>We specialize design, manufacturing, and supply of high-quality LCD and TFT modules. We also offer OLED and E-ink displays through strategic partnerships.</p>
        <button style={heroButtonStyles}>Explore Products</button>
      </div>
      <div style={productsContainerStyles}>
        <h1 style={{ color: "black", fontSize: "38px" }}>Products</h1>
        <p style={productsSubHeadingStyles}>
          We provide a variety of products to meet all of your customized needs through quality and reliability.
        </p>
        <div style={productsCardContainer}>
          <div 
            onMouseEnter={() => setHoverTft(true)} 
            onMouseLeave={() => setHoverTft(false)} 
            style={hoverTft ? productCardHover : productCard}
          >
            <h2>TFT</h2>
            <hr style={hrStyles} />
            <img style={productPhoto} src={tft} alt='tft module' />
            <p style={productText}>We offer both TN and IPS TFT Modules.</p>
          </div>
          <div 
            onMouseEnter={() => setHoverOled(true)} 
            onMouseLeave={() => setHoverOled(false)} 
            style={hoverOled ? productCardHover : productCard}
          >
            <h2>OLED</h2>
            <hr style={hrStyles} />
            <img style={productPhoto} src={oled} alt='oled' />
            <p style={productText}>OLED provides advantages like brightness and refresh rate.</p>
          </div>
          <div 
            onMouseEnter={() => setHoverMono(true)} 
            onMouseLeave={() => setHoverMono(false)} 
            style={hoverMono ? productCardHover : productCard}
          >
            <h2>Mono-display</h2>
            <hr style={hrStyles} />
            <img style={productPhoto} src={mono} alt='mono' />
            <p style={productText}>We offer a variety of TN/STN/FSTN displays.</p>
          </div>
        </div>
      </div>
      <div style={footer}>
        <div style={footerContainer}>
          <p style={footerText}>Goldentek Display America Inc. Copyright © 1998 All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
