import React from 'react';
import './Dessert.css';

function Dessert ({ImgSrc, Name}) {
  return (
    <div className="Dessert">
        <img src={ImgSrc} />
        <div className="Dessert-Name Pink">
            {Name}
        </div>
    </div>
  );
}

export default Dessert;
