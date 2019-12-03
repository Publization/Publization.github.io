import React from 'react';
import FastData from './FastData';
import FastNav from './FastNav';

const ParentStyle = {display: "flex", alignItems: "center", justifyContent: "space-between"};

function Fastheader () {
  return (
    <header style={ParentStyle}>
        <FastData />
        <FastNav />
    </header>
  );
}

export default Fastheader;
