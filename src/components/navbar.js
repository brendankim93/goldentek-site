import * as React from "react";
import { Link } from "gatsby";
import logo from '../images/goldentek-hi-res.png';

const navContainerStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "black",
  color: "white",
  paddingLeft: "20em",
  paddingRight: "20em",
  paddingTop: "2.75em"
};

const linkContainerStyles = {
  fontFamily: "Kulim Park Light, sans-serif",
  fontWeight: "300",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1em"
};

const navLinkStyles = {
  margin: "10px",
  textDecoration: "none",
  color: "white",
  fontSize: "14px",
  fontWeight: "500"
};

const logoStyle = {
  width: "150px",
  height: "150px"
};

export const NavBar = () => {
    return (
        <React.Fragment>
            <div style={navContainerStyles}>
                    <div>
                      {/* <h1 style={titleStyles}>Goldentek Inc.</h1> */}
                      <Link to="/">
                      <img style={logoStyle} src={logo} />
                      </Link>
                    </div>
                    <div style={linkContainerStyles}>
                      <Link to="/" style={navLinkStyles}>Home</Link>
                      <Link to="/products" style={navLinkStyles}>Products</Link>
                      <Link to="/about" style={navLinkStyles}>About Us</Link>
                      <Link to="/contact" style={navLinkStyles}>Contact</Link>
                    </div>
                  </div>
        </React.Fragment>
    )
};