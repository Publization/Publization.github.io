import React from 'react';
import './Title.css';

function Title ({Title, Desc}) {
  return (
    <div className="Title-Cont">
        <div className="Title">
            {Title}
        </div>
        <div className="Title Title-UnderScore">
            _
        </div>
        <div className="NoteText TitleNoteText">{Desc}</div>
    </div>
  );
}

export default Title;
