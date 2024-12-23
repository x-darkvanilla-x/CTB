import React from "react";
import "../../styles/SecondaryButton.css";

export const SecondaryButton = ({ label, onClick, style }) => {
  return (
    <button
      className="sheen-button"
      onClick={onClick}
      style={{
        backgroundColor: "#340A3E",
        ...style,
      }}
    >
      {label}
    </button>
  );
};


// import React, { useState } from "react";

// export const SecondaryButton = ({ label, onClick, style }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         padding: "10px 30px",
//         backgroundColor: isHovered ? "#107988" : "#340A3E", 
//         color: "#ffffff",
//         border: "none",
//         fontSize: "16px",
//         borderRadius: "50px",
//         cursor: "pointer",
//         transition: "background-color 0.3s ease", 
//         ...style,
//       }}
//     >
//       {label}
//     </button>
//   );
// };
