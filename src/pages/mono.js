import React, { useState, useEffect } from "react";
import mono from '../images/mono.jpg';
import { data, standardGraphic } from '../data/mono_modules_data';
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import ProductCards from "../components/ProductCards";

const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "33rem",
    backgroundImage: `url(${mono})`,
    backgroundSize: "38rem 28rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
};

const headerStyle = {
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "52px",
    letterSpacing: "-0.05em",
    color: "white",
    opacity: "85%"
};

const tableHeaderStyle = {
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "30px",
    letterSpacing: "-0.05em",
    color: "black",
    opacity: "85%"
};

const tableHeaderContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px"
}

const headerText = {
    width: "50%",
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "48px",
    letterSpacing: "-0.05em",
    color: "black"
};

const textContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 13rem",
};

const subTextStyle = {
    fontFamily: "Kulim Park Light, sans-serif",
    fontSize: "18px",
    fontWeight: "350",
    lineHeight: "1.6"
};

const containerStyle = {
  margin: "2rem auto",
  overflowX: "auto",
  maxWidth: "100%",
};

const tableContainer = {
  padding: "0px 150px"
};

const tableBaseStyle = {
  width: "100%",
  borderCollapse: "collapse",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  fontFamily: "Arial, sans-serif",
};

const thBaseStyle = {
  background: "linear-gradient(to right, #686a6eff, #404040)",
  color: "white",
  textAlign: "left",
  padding: "12px 16px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const tdBaseStyle = {
  padding: "12px 16px",
  borderTop: "1px solid #e5e7eb",
  color: "#333",
};

const trEvenStyle = { background: "#ffffff" };
const trOddStyle = { background: "#f9fafb" };
const trHoverStyle = { transition: "background 0.2s ease" };


const Table = ({ data, columns }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640); // breakpoint: 640px
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tableStyle = {
    ...tableBaseStyle,
    fontSize: isMobile ? "0.8rem" : "0.95rem",
  };

  const thStyle = {
    ...thBaseStyle,
    fontSize: isMobile ? "0.75rem" : "0.9rem",
    padding: isMobile ? "8px 10px" : "12px 16px",
  };

  const tdStyle = {
    ...tdBaseStyle,
    fontSize: isMobile ? "0.75rem" : "0.95rem",
    padding: isMobile ? "8px 10px" : "12px 16px",
  };

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} style={thStyle}>
                {col.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              style={{
                ...(i % 2 === 0 ? trEvenStyle : trOddStyle),
                ...trHoverStyle,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#eef3ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  i % 2 === 0 ? "#ffffff" : "#f9fafb")
              }
            >
              {columns.map((col) => (
                <td key={col.accessor} style={tdStyle}>
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MonoPage = () => {
    const columns = [
        { Header: "Display Format", accessor: "displayFormat" },
        { Header: "Part Number", accessor: "partNumber" },
        { Header: "Outline Dimension (W*H) [mm]", accessor: "outlineDimensions" },
        { Header: "Effective Viewing Area (W*H) [mm]", accessor: "viewingArea" },
        { Header: "Dot Size (W*H) [mm]", accessor: "dotSize" },
        { Header: "Dot Pitch (W*H) [mm]", accessor: "dotPitch" },
    ];

    return (
        <React.Fragment>
            <NavBar />
            <div style={divStyle}>
              <h1 style={headerStyle}>MONO <br /> - DISPLAY <br /> MODULES</h1>
            </div>
            <div style={textContainer}>
                <h1 style={headerText}>We offer a large variety of Mono-Display modules.</h1>
                <p style={subTextStyle}>We supply TN, STN, and FSTN displays designed to support a wide range of resolutions and operating temperatures, making them adaptable to diverse applications. Customization is available across key features, including size options in COG/COG TAB, backlighting, and industrial polarizers in reflective, transflective, or transmissive formats. We also offer fully customized LCD panel designs—covering any size or shape, low power consumption, thin and compact structures, color requirements, and a variety of connector and mounting methods—ensuring each display is built to match your exact specifications.</p>
            </div>
            <div style={tableContainer}>
                <Table data={data} columns={columns} />
            </div>
            <div style={tableHeaderContainer}>
              <h1 style={tableHeaderStyle}>Standard Graphic</h1>
            </div>
            <div style={tableContainer}>
                <Table data={standardGraphic} columns={columns} />
            </div>
            <ProductCards />
            <Footer />
        </React.Fragment>
    );
};

export default MonoPage;