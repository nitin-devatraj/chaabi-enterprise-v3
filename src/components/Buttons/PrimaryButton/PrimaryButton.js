import React from "react";
import styles from "./PrimaryButton.module.scss";

function PrimaryButton(props) {
  return (
    <button
      className={styles.primaryBtn}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default PrimaryButton;
