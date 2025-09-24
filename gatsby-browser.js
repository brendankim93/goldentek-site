import React from "react";

const rootStyle = {
  margin: 0,
  padding: 0,
};

export const wrapRootElement = ({ element }) => {
  return <div style={rootStyle}>{element}</div>;
};