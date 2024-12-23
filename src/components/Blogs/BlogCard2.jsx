import React from "react";
import { ReactComponent as Clock } from "../../assets/icons/clock-white.svg";

export const BlogCard2 = ({ image, title, readtime, category, caption }) => {
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
          aspectRatio: "16/9",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
          <Clock width="16" height="16" />
          <p style={{ fontSize: "16px", color: "white", lineHeight: "1.4" }}>
            {readtime}
          </p>
          <p
            style={{
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
      </div>

      <p style={{ fontSize: "18px", fontWeight: "bold", lineHeight: "1.4" }}>
        {title}
      </p>
      <p style={{ fontSize: "16px", color: "#545454", lineHeight: "1.4" }}>
        {caption}
      </p>
    </div>
  );
};