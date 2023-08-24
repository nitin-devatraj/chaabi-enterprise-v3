import React from "react";
import styles from "./SecondaryButton.module.scss";

function SecondaryButton(props) {
  return (
    <button
      className={styles.secondaryBtn}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default SecondaryButton;
