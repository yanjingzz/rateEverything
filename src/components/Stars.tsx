import React, {useState} from 'react';
import './Stars.css';
import {ReactComponent as StarIcon} from './StarIcon.svg';

type StarsProp = {
  rating: Number;
  setRating: (value: Number) => void;

};

function Stars({rating, setRating}: StarsProp) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };
  const starButtons = [1,2,3,4,5].map((number) => 
        <div className="star-rating" key={number}>
          <input type="radio" id={"star-rating-"+number} name="star-rating" value={number} onChange={onChange}/>
          <label className={"star-icon star-icon-hover " + ((number <= rating) ? "star-icon-yellow" : "")} 
                  htmlFor={"star-rating-"+number}> 
            <StarIcon />
          </label>
        </div>
        );
  return (
    <div className="p">
      {
        starButtons
      }
      
    </div>
    );
}

export default Stars;