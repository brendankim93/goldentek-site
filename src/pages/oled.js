import React, { useState, useEffect } from 'react';
import oled from '../images/oled1.jpg';
import { data } from '../data/oled_modules_data';
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import ProductCards from "../components/ProductCards";

const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "33rem",
    backgroundImage: `url(${oled})`,
    backgroundSize: "38rem 26rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
};

const headerStyle = {
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "48px",
    letterSpacing: "-0.05em",
    color: "white",
    opacity: "80%"
};

const headerText = {
    width: "60%",
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
    padding: "1rem 11rem",
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

const OledPage = () => {
    const columns = [
        { Header: "Size [in]", accessor: "size" },
        { Header: "Pixels", accessor: "pixels" },
        { Header: "Part Number", accessor: "partNumber" },
        { Header: "Color", accessor: "color" },
        { Header: "Panel Size", accessor: "panelSize" },
        { Header: "Active Area", accessor: "activeArea" },
        { Header: "Driver", accessor: "driver" },
        { Header: "Bonding", accessor: "bonding" },
        { Header: "Pin", accessor: "pin" }
    ];

    return (
        <React.Fragment>
            <NavBar />
            <div style={divStyle}>
              <h1 style={headerStyle}>OLED MODULES</h1>
            </div>
            <div style={textContainer}>
                <h1 style={headerText}>OLED technology provides numerous advantages worth considering.</h1>
                <p style={subTextStyle}>OLED technology offers a number of advantages, including superior contrast, higher brightness, wider viewing angles, and a broader color range. With faster refresh rates, lower power consumption, and an ultra-thin design, OLED displays deliver both performance and efficiency. They also operate reliably at low temperatures—down to -40°C—making them ideal for demanding environments.</p>
            </div>
            <div style={tableContainer}>
                <Table data={data} columns={columns} />
            </div>
            <ProductCards />
            <Footer />
        </React.Fragment>
    );
};

export default OledPage;