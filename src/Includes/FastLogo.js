import React from 'react';

const LogoTextStyle = {transform: "rotate(270deg)", fontSize: "25px"};
const ParentStyle = {display: "flex", fontSize: "24px", alignItems: "center", userSelect: "none", cursor: "pointer"};

function FastLogo ({CarColor, FstColor, DColor}) {
  return (
    <div className="notranslate" style={ParentStyle}>
        <svg width="20" height="23" style={{marginRight: "5px"}}>
            <circle cx="5" cy="19" r="3.7" fill={CarColor}></circle>
            <circle cx="15" cy="19" r="3.7" fill={CarColor}></circle>
            <text x="-16" y="19" style={LogoTextStyle} fill={CarColor}>D</text>
        </svg>
        <div style={{height: "34px"}}>
            <span style={{color: FstColor}}>Fastn</span><span style={{color: DColor}}>D</span>
        </div>
    </div>
  );
}

export default FastLogo;