import React, { useState } from "react";
import Logo from "../../assets/logo/come-to-be-coaching-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Workshops",
    "Pathway",
    "Blogs",
    "Policy",
  ];

  return (
    <div>
      <div
        style={{
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img src={Logo} style={{ height: "50px" }} alt="Logo" />
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              cursor: "pointer",
            }}
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              style={{ width: "25px", height: "3px", backgroundColor: "black" }}
            ></div>
            <div
              style={{ width: "25px", height: "3px", backgroundColor: "black" }}
            ></div>
            <div
              style={{ width: "25px", height: "3px", backgroundColor: "black" }}
            ></div>
          </div>

          <div
            style={{ display: "flex", gap: "30px" }}
            className="desktop-menu"
          >
            {menuItems.map((item, index) => (
              <p
                key={index}
                style={{
                  fontSize: "16px",
                  lineHeight: "1.4",
                  color: active === index ? "#107988" : "black",
                  borderBottom:
                    active === index
                      ? "2px solid #107988"
                      : "2px solid transparent",
                  cursor: "pointer",
                  transition: "color 0.5s, border-bottom 0.5s",
                }}
                onClick={() => setActive(index)}
              >
                <Link
                  to={`/${item.toLowerCase()}`} 
                  style={{ textDecoration: "none", color: "inherit" }} 
                >
                  {item}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: menuOpen ? 0 : "-100%",
          width: "250px",
          height: "100vh",
          backgroundColor: "#fff",
          boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.3)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          transition: "left 0.3s ease",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            alignSelf: "flex-end",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        {menuItems.map((item, index) => (
          <p
            key={index}
            style={{
              fontSize: "18px",
              color: active === index ? "#107988" : "black",
              borderBottom:
                active === index
                  ? "2px solid #107988"
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "color 0.5s, border-bottom 0.5s",
            }}
            onClick={() => {
              setActive(index);
              setMenuOpen(false);
            }}
          >
             <Link
                  to={`/${item.toLowerCase()}`} 
                  style={{ textDecoration: "none", color: "inherit" }} 
                >
                  {item}
                </Link>
          </p>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .burger-menu {
              display: flex !important;
            }
            .desktop-menu {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};