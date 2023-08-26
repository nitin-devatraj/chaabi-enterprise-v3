import React from "react";
import styles from "./SecondaryButton.module.scss";

function SecondaryButton({ disabled, onClick, children }) {
  return (
    <button
      className={styles.secondaryBtn}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
