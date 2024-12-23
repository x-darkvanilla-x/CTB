import React from "react";
import { SecondaryButton } from "./SecondaryButton";
import HeroDesign from "../../assets/images/herodesign.png";
import { useLocation } from "react-router-dom";
import { OutLineButton } from "./OutLineButton";

export const Parallex = ({
  image,
  title,
  subtitle,
  buttontext,
  buttontext2,
}) => {
  const location = useLocation();

  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean) // Remove empty strings from path segments
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)) // Capitalize first letter
      .join(" / "); // Join segments with " / "
  };

  return (
    <div className="header-container">
      {/* <img className="header-image" src={image} alt="Header Background" /> */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          minHeight: "1000px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative"
        }}
      ></div>
      <div className="header-overlay" />
      <div className="header-content" data-aos="fade-up">
        <p className="header-title">{title}</p>
        {subtitle ? (
          <p className="header-subtitle">{subtitle}</p>
        ) : (
          <p className="header-subtitle">
            Home / {formatPath(location.pathname)}
          </p>
        )}
        <div style={{ display: "flex", gap: "30px" }}>
          {buttontext && <SecondaryButton label={buttontext} />}
          {buttontext2 && <OutLineButton label={buttontext2} />}
        </div>
      </div>

      <style>
        {`
        .header-container {
          background-color: red;
          width: 100%;
          aspect-ratio: 2 / 1;
          position: relative;
          overflow: hidden;
        }

        .header-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
        }

        .header-design {
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 1;
          height: 100%;
          object-fit: cover;
          width: 100%; 
          height: auto; 
          pointer-events: none; 
        }

        .header-overlay {
          position: absolute;
          background: #127987;
          width: 100%;
          height: 100%;
          opacity: 0.75;
          top: 0;
          left: 0;
        }

        .header-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          gap: 30px;
          padding: 20px;
        }

        .header-title {
          font-size: 60px;
          line-height: 1.4;
          max-width: 800px
        }

        .header-subtitle {
          font-size: 16px;
          line-height: 1.4;
          width: 50%;
          max-width: 500px
        }

        @media (max-width: 768px) {
          .header-container {
            aspect-ratio: 3/4;
            height: auto;
          }

          .header-content {
            text-align: left;
            align-items: flex-start;
            width: 90%;
          }

          .header-title {
            font-size: 40px;
            line-height: 1.4;
          }

          .header-subtitle {
            font-size: 14px;
            width: 100%;
          }
        }
        `}
      </style>
    </div>
  );
};