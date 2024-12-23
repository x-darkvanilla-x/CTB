import React, { useState } from "react";

export const OutLineButton = ({ label, onClick, style }) => {
    const [isHovered, setIsHovered] = useState(false);
  

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "10px 30px",
        backgroundColor: isHovered ? "black" : "transparent",
        border: isHovered ? "2px solid black" : "2px solid white",
        color: "#ffffff",
        fontSize: "16px",
        borderRadius: "50px",
        cursor: "pointer",
        transition: "background-color 0.3s ease", 
        ...style,
      }}
    >
      {label}
    </button>
  );
};