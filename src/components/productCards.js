import * as React from 'react';
import { Link } from "gatsby";
import tft from '../images/TFTLime.jpg';
import mono from '../images/mono-display.jpg'
import oled2 from '../images/oled2.jpg'

const productsContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    height: "53em",
    backgroundColor: "white",
    fontFamily: "Kulim Park, sans-serif",
    paddingTop: "8em",
    paddingBottom: "8em"
    // fontSize: "64px",
    // letterSpacing: "-0.05em",
    // color: "black"
  };
  
  const productsSubHeadingStyles = {
    fontFamily: "Kulim Park Light, sans-serif",
    fontSize: "16px",
    color: "#616161",
    fontWeight: "350"
  };
  
  const productsCardContainer = {
    display: "flex",
    flexDirection: "row",
    marginTop: "2em",
    marginBottom: "5em"
  };
  
  const productCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3rem",
    margin: "2rem",
    border: "1px solid #404040",
    // boxShadow: "0 0 2px rgba(33,33,33,.75)",
    borderRadius: "40px",
    backgroundColor: "white",
    opacity: "1",
    textDecoration: "none"
  };
  
  const productCardHover = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3rem",
    margin: "2rem",
    borderRadius: "40px",
    border: "1px solid #404040",
    backgroundColor: "white",
    // opacity: "0.75",
    // filter: "contrast(130%) brightness(52%)",
    boxShadow: "0 0 12px rgba(33,33,33,.75)",
    cursor: "pointer",
    textDecoration: "none"
  }
  
  const productPhoto = {
    width: "20em",
    height: "20em"
  };
  
  const productText = {
    fontSize: "12px",
    fontFamily: "Kulim Park Light, sans-serif",
    marginBottom: "3em",
    textDecoration: "none"
  };

  const hrStyles = {
    width: "30%",
    opacity: "0.25",
    marginBottom: "1.5rem"
  };

export const ProductCards = () => {
    const [hoverTft, setHoverTft] = React.useState(false);
    const [hoverOled, setHoverOled] = React.useState(false);
    const [hoverMono, setHoverMono] = React.useState(false);
    return (
        <React.Fragment>
          <div style={productsContainerStyles}>
            <h1 style={{ color: "black", fontSize: "38px" }}>Products</h1>
            <p style={productsSubHeadingStyles}>
              We provide a variety of products to meet all of your customized needs through quality and reliability.
            </p>
            <div style={productsCardContainer}>
              <Link to="/tft" style={{ "textDecoration": "none", "color": "black" }}>
              <div 
                onMouseEnter={() => setHoverTft(true)} 
                onMouseLeave={() => setHoverTft(false)} 
                style={hoverTft ? productCardHover : productCard}
              >
                <img style={productPhoto} src={tft} alt='tft module' />
                <h2>TFT</h2>
                <hr style={hrStyles} />
                <p style={productText}>Both TN and IPS TFT Modules are available.</p>
              </div>
              </Link>
              <Link to="/mono" style={{ "textDecoration": "none", "color": "black" }}>
              <div 
                onMouseEnter={() => setHoverMono(true)} 
                onMouseLeave={() => setHoverMono(false)} 
                style={hoverMono ? productCardHover : productCard}
              >
                <img style={productPhoto} src={mono} alt='mono' />
                <h2>Mono-display</h2>
                <hr style={hrStyles} />
                <p style={productText}>We offer a variety of TN/STN/FSTN displays.</p>
              </div>
              </Link>
              <Link to="/oled" style={{ "textDecoration": "none", "color": "black" }}>
              <div 
                onMouseEnter={() => setHoverOled(true)} 
                onMouseLeave={() => setHoverOled(false)} 
                style={hoverOled ? productCardHover : productCard}
              >
                <img style={productPhoto} src={oled2} alt='oled' />
                <h2>OLED</h2>
                <hr style={hrStyles} />
                <p style={productText}>Higher brightness and faster refresh rates.</p>
              </div>
              </Link>
            </div>
          </div>
        </React.Fragment>
    );
};