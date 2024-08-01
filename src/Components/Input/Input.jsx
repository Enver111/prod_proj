import React, { useState } from "react";
import Show from "../../libs/icons/Input/show.svg";
import Hide from "../../libs/icons/Input/hide.svg";
import s from "./Input.module.css";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  name,
  required = false,
  disabled = false,
  className,
  style,
  inputSizeWidth,
  inputSizeHeight,
  fontSize,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputStyle = {
    width: inputSizeWidth ? `${inputSizeWidth}px` : "auto",
    height: inputSizeHeight ? `${inputSizeHeight}px` : "auto",
    fontSize: fontSize ? `${fontSize}px` : "16px",
    ...style,
  };

  return (
    <div className={`${s.inputContainer} ${className}`} style={inputStyle}>
      {label && (
        <label
          htmlFor={name}
          style={{ fontSize: fontSize ? `${fontSize}px` : "16px" }}
        >
          {label}
        </label>
      )}
      <div className={s.inputWrapper}>
        <input
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={name}
          name={name}
          required={required}
          disabled={disabled}
          className={s.input}
          style={inputStyle}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={s.toggleButton}
          >
            {showPassword ? (
              <img src={Hide} alt="Hide" />
            ) : (
              <img src={Show} alt="Show" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
