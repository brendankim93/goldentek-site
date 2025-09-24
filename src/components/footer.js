import * as React from "react";

const footer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "black",
  width: "auto",
  height: "10em"
};

const footerContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const footerText = {
  color: "white",
  fontSize: "12px",
  fontFamily: "Kulim Park Light, sans-serif",
};

export const Footer = () => {
    return (
        <React.Fragment>
        <div style={footer}>
            <div style={footerContainer}>
                <p style={footerText}>Goldentek Display America Inc. Copyright © 1998 All rights reserved.</p>
                <p style={footerText}>Copyright © 1998-2021</p>
                <p style={footerText}>All rights reserved.</p>
            </div>
        </div>
        </React.Fragment>
    )
};