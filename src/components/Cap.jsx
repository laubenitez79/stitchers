// src/components/Cap.jsx
import React, { useState } from 'react';
import './Cap.css';

const Cap = ({ Color, StaticImage, GifImage, Svg }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="cap-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="cap-image" src={isHovered ? GifImage : StaticImage} alt="" />
      <img id="cap-svg" src={Svg} alt="Cap SVG" />
    </div>
  );
};

export default Cap;
