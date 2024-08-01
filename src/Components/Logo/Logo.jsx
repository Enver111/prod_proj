import React from "react";
import LogoImg from "../../libs/icons/logo.svg";
import s from "./Logo.module.css";

const Logo = ({ onClick }) => {
  return (
    <button className={s.logo} onClick={onClick}>
      <img src={LogoImg} alt="logo" />
      <p>Glamly</p>
    </button>
  );
};
export default Logo;
