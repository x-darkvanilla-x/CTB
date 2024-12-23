import React from "react";

export const ServiceCard = ({ image, title, caption }) => {
  return (
    <div
      style={{
        width: "300px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0px 4px 12px 0px #00000026",
      }}
      data-aos="fade-left"
    >
      <img
        style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover" }}
        src={image}
        alt={title}
      />
      <div
        style={{
          padding: "20px",
          gap: "10px",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</p>
        <p style={{ fontSize: "16px", color: "#545454" }}>{caption}</p>
      </div>
    </div>
  );
};