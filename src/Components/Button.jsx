import React from "react";
import s from "./Style.module.css";

const Button = ({
  size,
  variant,
  text,
  icon,
  width,
  height,
  border,
  radius,
}) => {
  const buttonStyle = {
    cursor: "pointer",
    fontSize: size ? `${size}px` : "14px",
    color: variant === "primary" ? "white" : "black",
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
    border: border ? `${border}` : "none",
    borderRadius: radius ? `${radius}` : "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    marginRight: "6px",
  };

  return (
    <button className={s.btn} style={buttonStyle}>
      {icon && <img src={icon} alt="icon" style={iconStyle} />}
      <span className="btn-text">{text}</span>
    </button>
  );
};

export default Button;
