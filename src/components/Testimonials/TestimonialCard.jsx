import React from "react";
import { ReactComponent as Quote } from "../../assets/icons/quote.svg";

export const TestimonialCard = ({ image, name, caption }) => {
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
        justifyContent: "space-between"
      }}
      data-aos="fade-left"
    >
      <Quote width="30" height="30" />
      <p style={{ fontSize: "16px", color: "#545454", lineHeight: "1.4" }}>
      {caption.length > 100 ? `${caption.substring(0, 100)}...` : caption}
      </p>
      <div
        style={{
          justifyContent: "",
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
          padding: "10px 0px",
          gap: "20px",
        }}
      >
        <img
          style={{
            width: "50px",
            aspectRatio: "1",
            objectFit: "cover",
            borderRadius: "50%",
            backgroundColor: "#f3f3f3"
          }}
          src={image}
          alt={name}
        />
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            lineHeight: "1.4",
            color: "#107988",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};