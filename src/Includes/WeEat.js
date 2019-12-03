import React from 'react';
import './WeEat.css';

function WeEat ({ImgSrc, Name, Desc}) {
  return (
    <div className="WeEat">
      <img src={ImgSrc} />
      <div className="WeEat-Name Pink">
        {Name}
      </div>
      <div className="WeEat-Desc NoteText">
        {Desc}
      </div>
      <div style={{display: "flex"}}>
        <a href="#" className="Btn">Read more</a>
      </div>
    </div>
  );
}

export default WeEat;
