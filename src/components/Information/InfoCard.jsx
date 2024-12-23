import React from "react";
import { ReactComponent as Quote } from "../../assets/icons/quote.svg";

export const InfoCard = ({title, subtitle , caption, type}) => {
  return (
    <div
      style={{
        width: "250px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0px 4px 12px 0px #00000026",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {type === 1 && (
        <div
          style={{
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
            padding: "10px 0px",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "50px",
              aspectRatio: "1",
              objectFit: "cover",
              borderRadius: "50%",
              backgroundColor: "#f3f3f3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Quote width="30" height="30" />
          </div>
          <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              lineHeight: "1.4",
            }}
          >
            {subtitle}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "1.4",
            }}
          >
            {title}
          </p>
          </div>
          
        </div>
      )}

      {type === 2 && (
        <div>
          <Quote width="30" height="30" />
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "1.4",
            }}
          >
            {title}
          </p>
        </div>
      )}

      <p style={{ fontSize: "16px", color: "#545454", lineHeight: "1.4" }}>
        {caption}
      </p>
    </div>
  );
};
