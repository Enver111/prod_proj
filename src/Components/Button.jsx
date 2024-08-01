import React from "react";
import s from "./Style.module.css";

const Button = ({
  size,
  backgroundColor,
  variant,
  text,
  icon1,
  icon2,
  width,
  height,
  border,
  radius,
  hoverBackgroundColor,
  hoverColor,
  onClick,
  justifyContent,
}) => {
  const buttonStyle = {
    cursor: "pointer",
    fontSize: size ? `${size}px` : "14px",
    backgroundColor: backgroundColor ? `${backgroundColor}` : "rgb(35, 61, 74)",
    color: variant === "primary" ? "white" : "black",
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
    border: border ? `${border}` : "none",
    borderRadius: radius ? `${radius}` : "unset",
    justifyContent: justifyContent ? `${justifyContent}` : "space-between",
    transition: "background-color 0.3s, color 0.3s",
  };

  const handleMouseEnter = (e) => {
    if (hoverBackgroundColor) {
      e.target.style.backgroundColor = hoverBackgroundColor;
    }
    if (hoverColor) {
      e.target.style.color = hoverColor;
    }
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = backgroundColor
      ? backgroundColor
      : "rgb(35, 61, 74)";
    e.target.style.color = variant === "primary" ? "white" : "black";
  };
  return (
    <button
      className={s.btn}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {icon1 && <img src={icon1} alt="icon" />}
      <span className="btn-text">{text}</span>
      {icon2 && <img src={icon2} alt="icon" />}
    </button>
  );
};

export default Button;
