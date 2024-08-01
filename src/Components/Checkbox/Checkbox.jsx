import React from "react";
import s from "./Checkbox.module.css";

const Checkbox = () => {
  return (
    <div className={s.checkbox_wrapper_15}>
      <input
        className={s.inp_cbx}
        id="cbx-15"
        type="checkbox"
        style={{ display: "none" }}
      />

      <label className={s.cbx} htmlFor="cbx-15">
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
