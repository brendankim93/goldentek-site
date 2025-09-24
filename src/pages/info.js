import * as React from 'react';
import parrot from '../images/parrot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faHardDrive } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const infoStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "9em",
    paddingBottom: "9em"
};

const infoHeader = {
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "38px",
    letterSpacing: "-0.05em",
    display: "flex",
    justifyContent: "center"
};

const infoContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "4em"
};

const infoItemContainer = {
    fontFamily: "Kulim Park Light, sans-serif",
    color: "#404040",
    fontWeight: "100",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: "5em"
};

const infoItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",
    border: "1px solid #404040",
    // backgroundColor: "#404040",
    padding: "1.5rem",
    cursor: "pointer"
};

const iconStyles = {
    paddingRight: "0.75rem",
};

const InfoPage = () => {
    return (
        <React.Fragment>
            <div style={infoStyles}>
                <h1 style={infoHeader}>How does Goldentek specialize in LCD?</h1>
                <div style={infoContainer}>
                    <img src={parrot} alt="parrot" />
                    <div style={infoItemContainer}>
                        <span style={infoItem}>
                            <FontAwesomeIcon 
                                style={iconStyles}
                                icon={faWandMagicSparkles} 
                                size="lg"
                            />
                            Quality you can trust
                        </span>
                        <span style={infoItem}>
                            <FontAwesomeIcon 
                                style={iconStyles}
                                icon={faFlask} 
                                size="lg"
                            />
                            Carefully inspected
                        </span>
                        <span style={infoItem}>
                            <FontAwesomeIcon 
                                style={iconStyles}
                                icon={faHardDrive} 
                                size="lg"
                            />
                            Wide range of products
                        </span>
                        <span style={infoItem}>    
                            <FontAwesomeIcon 
                                style={iconStyles}
                                icon={faUserGear} 
                                size="lg"
                            />
                            Customized to your needs
                        </span>
                        <span style={infoItem}>
                            <FontAwesomeIcon 
                                style={iconStyles}
                                icon={faCalendarCheck} 
                                size="lg"
                            />
                            Designed for longevity
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InfoPage;