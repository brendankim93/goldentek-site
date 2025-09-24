import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarOn } from '@fortawesome/free-solid-svg-icons';
import { faTowerObservation } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';

const main = {
    paddingTop: "10rem",
    paddingBottom: "8rem",
    backgroundColor: "#404040",
    // width: "80%",
    // margin: "auto",
    // borderRadius: "10px",
    color: "white"
};

const industriesHeader = {
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "38px",
    letterSpacing: "-0.05em",
    display: "flex",
    justifyContent: "center",
    fontWeight: "400"
};

const industriesContainer = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
    padding: "5rem"
};

const industry = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem"
};

const iconStyles = {
    width: "4rem",
    height: "4rem"
};

const industryText = {
    fontFamily: "Kulim Park, sans-serif",
    fontWeight: "100"
};

const IndustriesPage = () => {
    return (
        <React.Fragment>
            <div style={main}>
                <h1 style={industriesHeader}>Industries we serve but aren't limited to</h1>
                <div style={industriesContainer}>
                    <div style={industry}>
                        <FontAwesomeIcon
                            style={iconStyles} 
                            icon={faCarOn} 
                            size="lg"
                        />
                        <h3 style={industryText}>Automotive</h3>
                    </div>
                    <div style={industry}>
                        <FontAwesomeIcon
                            style={iconStyles} 
                            icon={faTowerObservation} 
                            size="lg"
                        />
                        <h3 style={industryText}>Industrial</h3>
                    </div>
                    <div style={industry}>
                        <FontAwesomeIcon 
                            style={iconStyles}
                            icon={faStethoscope} 
                            size="lg"
                        />
                        <h3 style={industryText}>Medical</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default IndustriesPage;