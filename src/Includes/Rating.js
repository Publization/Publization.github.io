import React from 'react';
import './Rating.css';

function Rating ({Rate}) {
  return (
    <div style={{display: "flex", alignItems: "center"}} className="Rating">
      <svg width="16" height="16">
        <polygon style={{cursor: "pointer"}} points="8,0 11,5 16,6 12.5,10.5 14,16 8,12 2,16 3.5,10.5 0,6 5,5 8,0" fill={Rate > 0? "#bfaf2a":"#bbb"}></polygon>
      </svg>
      <svg width="16" height="16">
        <polygon style={{cursor: "pointer"}} points="8,0 11,5 16,6 12.5,10.5 14,16 8,12 2,16 3.5,10.5 0,6 5,5 8,0" fill={Rate > 1? "#bf852a":"#bbb"}></polygon>
      </svg>
      <svg width="16" height="16">
        <polygon style={{cursor: "pointer"}} points="8,0 11,5 16,6 12.5,10.5 14,16 8,12 2,16 3.5,10.5 0,6 5,5 8,0" fill={Rate > 2? "#c461c8":"#bbb"}></polygon>
      </svg>
      <svg width="16" height="16">
        <polygon style={{cursor: "pointer"}} points="8,0 11,5 16,6 12.5,10.5 14,16 8,12 2,16 3.5,10.5 0,6 5,5 8,0" fill={Rate > 3? "#cf38d5":"#bbb"}></polygon>
      </svg>
      <svg width="16" height="16">
        <polygon style={{cursor: "pointer"}} points="8,0 11,5 16,6 12.5,10.5 14,16 8,12 2,16 3.5,10.5 0,6 5,5 8,0" fill={Rate > 4? "#e500ee":"#bbb"}></polygon>
      </svg>
    </div>
  );
}

export default Rating;
