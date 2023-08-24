import React from "react";
import styles from "./PhoneInput.module.scss";
import { ReactComponent as DownArrow } from "../../../assets/icons/chevron-down.svg";

function PhoneInput(props) {
  return (
    <div className={styles.phoneInputContainer}>
      <label htmlFor="phone-input" className={styles.label}>
        {props.label}
      </label>

      <div className={styles.inputContainer}>
        <div className={styles.dropdown}>
          IN <DownArrow />
        </div>
        <input
          className={styles.input}
          type="tel"
          name="phone-input"
          id="phone-input"
          disabled={props.disabled}
          required={props.required}
          placeholder={props.placeholder}
        />
      </div>

      {/* <input
        className={styles.input}
        type="tel"
        name="phone-input"
        id="phone-input"
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      /> */}
      <p className={styles.helperText}>{props.helperText}</p>
    </div>
  );
}

export default PhoneInput;
