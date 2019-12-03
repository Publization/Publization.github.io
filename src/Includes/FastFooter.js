import React from 'react';
import FastLogo from './FastLogo.js';
import './FastFooter.css';

function FastFooter () {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} className="Footer">
      <FastLogo CarColor="#fff" FstColor="#fff" DColor="#fff" />
      <div style={{color: "#fff"}}>
        &copy;{new Date().getFullYear()} FastnD. All rights reserved.
      </div>
      <div className="Websites-Brand" style={{display: "flex", alignItems: "center"}}>
        <a href="#" style={{textDecoration: "none"}} className="Pink">
          f
        </a>
        <a href="#" style={{textDecoration: "none"}} className="Pink">
          in
        </a>
      </div>
    </div>
  );
}

export default FastFooter;
