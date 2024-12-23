import React from "react";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";

export const BlogCard1 = ({ image, title, date, category }) => {
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "10/4",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          src={image}
          alt={title}
        />
        <p
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            fontSize: "12px",
            color: "white",
            padding: "4px 8px",
            borderRadius: "50px",
            backgroundColor: "red",
          }}
        >
          {category}
        </p>
      </div>

      <p style={{ fontSize: "18px", fontWeight: "bold", lineHeight: "1.4" }}>
        {title}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Clock width="16" height="16" />
        <p style={{ fontSize: "16px", color: "#545454", lineHeight: "1.4" }}>
          {date}
        </p>
      </div>
    </div>
  );
};