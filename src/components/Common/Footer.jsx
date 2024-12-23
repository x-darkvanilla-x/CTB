import React, { useState } from "react";
// import { ReactComponent as Insta } from "../../assets/icons/instagram.svg";
// import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
// import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";

export const Footer = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        backgroundColor: "#340A3E",
        color: "white",
        padding: "50px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "1.4",
            }}
          >
            Contact Info
          </p>
          <div>
            <p
              style={{ fontSize: "16px", lineHeight: "1.4" }}
              data-aos="fade"
              data-aos-duration={500}
            >
              1602 Tiara, Hiranandani Estate,
            </p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.4" }}
              data-aos="fade"
              data-aos-duration={500}
            >
              Ghodbunder Road, Thane, Mumbai
            </p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.4" }}
              data-aos="fade"
              data-aos-duration={500}
            >
              Area, MH 400607 IN
            </p>
          </div>
          <p
            style={{ fontSize: "16px", lineHeight: "1.4" }}
            data-aos="fade"
            data-aos-duration={500 * 2}
          >
            Phone : +91 98199 26379
          </p>
          <p
            style={{ fontSize: "16px", lineHeight: "1.4" }}
            data-aos="fade"
            data-aos-duration={500 * 3}
          >
            Email : crm@cometobecoaching.com
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "1.4",
            }}
          >
            Services
          </p>
          {[
            "Career Coaching",
            "Leadership Coaching",
            "Public Speaking Coaching",
            "ICF Coach Certification",
            "Life Coaching",
          ].map((item, index) => (
            <p
              key={index}
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
                color: hovered === item ? "#107988" : "white",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
              data-aos="fade"
              data-aos-duration={200 * index}
            >
              {item}
            </p>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "1.4",
            }}
          >
            Pages
          </p>
          {["Workshops", "About Us", "Blogs", "Policy", "Faq"].map(
            (item, index) => (
              <p
                key={index}
                style={{
                  fontSize: "16px",
                  lineHeight: "1.4",
                  color: hovered === item ? "#107988" : "white",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                data-aos="fade"
                data-aos-duration={200 * index}
              >
                {item}
              </p>
            )
          )}
        </div>
      </div>
      {/* <div style={{ display: "flex", gap: "20px" }}>
        <Insta width={18} height={18} />
        <Facebook width={18} height={18} />
        <Linkedin width={18} height={18} />
      </div> */}
      <div
        style={{
          width: "80%",
          height: "1px",
          backgroundColor: "#d9d9d9",
        }}
      />
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.4",
          textAlign: "center",
        }}
      >
        Copyright © 2024
        <span style={{ color: "#107988" }}> ComeToBeCoaching.com </span>- All
        Rights Reserved.
      </p>
    </div>
  );
};