import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css'

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleOMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleOnMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div>
      <h1>Please Rate Us</h1>
      {[...Array(noOfStars)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
          key={index}
          className={index <= hover ? "active" : "inactive"}
            onClick={() => handleOnClick(index)}
            onMouseMove={() => handleOMouseEnter(index)}
            onMouseLeave={() => handleOnMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
