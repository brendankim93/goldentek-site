import React, { useState, useEffect } from "react";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import tft from '../images/tft2.jpg';
import { data } from '../data/tft_modules_data';
import ProductCards from "../components/productCards";

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

const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "33rem",
    backgroundImage: `url(${tft})`,
    backgroundSize: "38rem 28rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 90%"
};

const headerStyle = {
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "64px",
    letterSpacing: "-0.05em",
    color: "black"
};

const headerText = {
    width: "45rem",
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
    padding: "1rem 11rem"
};

const subTextStyle = {
    fontFamily: "Kulim Park Light, sans-serif",
    fontSize: "18px",
    fontWeight: "350",
    lineHeight: "1.6"
};

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

const TftPage = () => {
    
    const columns = [
        { Header: "Size [in]", accessor: "size" },
        { Header: "Dot Format", accessor: "dotFormat" },
        { Header: "Part Number", accessor: "partNumber" },
        { Header: "Outline Dimension [mm]", accessor: "outline" },
        { Header: "Brightness", accessor: "brightness" },
        { Header: "Controller", accessor: "controller" },
        { Header: "Viewing Angle", accessor: "viewingAngle" },
    ];

    return (
        <React.Fragment>
            <NavBar />
            <div style={divStyle}>
              {/* <img style={imageStyle} src={tft} alt="tft module" /> */}
              <h1 style={headerStyle}>TFT MODULES</h1>
            </div>
            <div style={textContainer}>
                <h1 style={headerText}>We offer the best of both worlds in TN TFT and IPS TFT Modules.</h1>
                <p style={subTextStyle}>We offer both standard and custom TN TFT LCD modules, giving you the flexibility to adjust features like touch integration, brightness, and more. For applications that demand superior performance, our IPS TFT modules provide vivid colors, high contrast, wide viewing angles, faster response times, and lower power consumption. And if your project requires something beyond the standard, we can deliver custom performance specifications to ensure your display is engineered precisely to your needs.</p>
            </div>
            <div style={tableContainer}>
                <Table data={data} columns={columns} />
            </div>
            {/* <div style={buttonDiv}>
                <a 
                  style={linkStyle} 
                  target="_blank" 
                  rel="noreferrer"
                  href="https://docs.google.com/spreadsheets/d/14rYu_szcir2kuMKnxaUBkxLfvMINVReGqMuYwByI1Co/edit?gid=286064987#gid=286064987"
                >
                    <button style={heroButtonStyles}>
                        View Specifications
                    </button>
                </a>
            </div> */}
            <ProductCards />
            <Footer />
        </React.Fragment>
    )
};

export default TftPage;