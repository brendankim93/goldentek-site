import React from "react";
import "./src/styles/global.css";

const rootStyle = {
  margin: 0,
  padding: 0,
};

export const wrapRootElement = ({ element }) => {
  return <div style={rootStyle}>{element}</div>;
};