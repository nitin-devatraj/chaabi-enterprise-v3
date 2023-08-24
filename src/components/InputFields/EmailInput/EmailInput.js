import React from "react";
import styles from "./EmailInput.module.scss";

function EmailInput(props) {
  return (
    <div className={styles.emailInputContainer}>
      <label htmlFor="email-input" className={styles.label}>
        {props.label}
      </label>
      <input
        className={styles.input}
        type="email"
        name="email-input"
        id="email-input"
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
      <p className={styles.helperText}>{props.helperText}</p>
    </div>
  );
}

export default EmailInput;
