import React from 'react';
import FastLogo from './FastLogo';
import './FastData.css';

const ParentStyle = {display: "flex", alignItems: "center"};

function FastData () {
  return (
    <div style={ParentStyle}>
        <svg width="24" height="23" className="DataSVG">
            <line x1="0" y1="2" x2="24" y2="2" stroke-width="4" stroke="#4700e3"></line>
            <line x1="0" y1="10" x2="24" y2="10" stroke-width="4" stroke="#4700e3"></line>
            <line x1="0" y1="18" x2="24" y2="18" stroke-width="4" stroke="#4700e3"></line>
        </svg>
        <FastLogo CarColor="#f22ec0" FstColor="#000" DColor="#f22ec0" />
    </div>
  );
}

export default FastData;
