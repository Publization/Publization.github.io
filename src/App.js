import React from 'react';
import './App.css';
import Fastheader from './Includes/Fastheader.js';
import FastBody from './Includes/FastBody.js';
import FastFooter from './Includes/FastFooter.js';

function App () {
  return (
    <div className="App">
      <div>
        <Fastheader />
        <FastBody />
        <FastFooter />
      </div>
    </div>
  );
}

export default App;
