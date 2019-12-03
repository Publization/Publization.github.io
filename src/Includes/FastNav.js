import React, { useRef, useState } from 'react';
import './FastNav.css';

const TextStyle = {textDecoration: "none", color: "#fff"};

function FastNav () {
    const NavElem = useRef(null);

    const onSVGClick = () => {
        const Display = window.getComputedStyle(NavElem.current).display;
        NavElem.current.style.display = (Display == "none"? "block":"none");
    };

    window.onresize = () => {
        if (window.innerWidth > 900) NavElem.current.style.display = "block";
        else NavElem.current.style.display = "none";
    };

    return (
        <div style={{position: "relative"}}>
            <svg className="NavSVG" width="28" height="8" onClick={onSVGClick} style={{cursor: "pointer", display: "none"}}>
                <circle r="4" cx="4" cy="4" fill="#fff"></circle>
                <circle r="4" cx="14" cy="4" fill="#fff"></circle>
                <circle r="4" cx="24" cy="4" fill="#fff"></circle>
            </svg>
            <nav ref={NavElem} className="FastNav">
                <ul style={{display: "flex", alignItems: "center"}}>
                    <li>
                        <a href="#" style={TextStyle}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" style={TextStyle}>
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#" style={TextStyle}>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" style={TextStyle}>
                            Contact
                        </a>
                    </li>
                    <li style={{cursor: "unset"}}>
                        <a href="#" style={TextStyle} className="Btn">
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default FastNav;
