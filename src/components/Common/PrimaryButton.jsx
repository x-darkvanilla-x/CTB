import React from "react";
import "../../styles/PrimaryButton.css";

export const PrimaryButton = ({ label, onClick, style }) => {
  return (
    <button
      className="sheen-button"
      onClick={onClick}
      style={{
        backgroundColor: "#107988",
        ...style,
      }}
    >
      {label}
    </button>
  );
};

// import React, { useState } from "react";

// export const PrimaryButton = ({ label, onClick, style }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         padding: "10px 30px",
//         backgroundColor: isHovered ? "#340A3E" : "#107988", 
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
