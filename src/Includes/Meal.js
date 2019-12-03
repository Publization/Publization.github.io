import React from 'react';
import Rating from './Rating.js';
import './Meal.css';

const ltr = {flexDirection: "row"};
const rtl = {flexDirection: "row-reverse"};

function Meal ({Dir, ImgSrc, Name, Desc, Rate, Price}) {
    return (
        <div className="Meal" style={Dir == "ltr"? ltr:rtl}>
            <div style={{position: "relative", display: "flex"}}>
                <img src={ImgSrc} />
                <div className="Meal-Name-Cont">
                    <div className={Dir == "ltr"? "Meal-Name-Left Meal-Name":"Meal-Name-Right Meal-Name"}>
                        {Name}
                    </div>
                </div>
            </div>
            <div className={Dir == "ltr"? "Meal-Desc-Offset-Right Meal-Desc":"Meal-Desc-Offset-Left Meal-Desc"}>
                <svg width="5" height="5">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#f22ec0"></circle>
                </svg>
                <div className="NoteText">
                    {Desc}
                </div>
                <Rating Rate={Rate} />
                <div className="Meal-Price-Cont">
                    <div className="Meal-Price Purple">
                        $<span>{Price}</span>
                    </div>
                    <a href="#" className="Btn">Add</a>
                </div>
            </div>
        </div>
    );
}

export default Meal;
