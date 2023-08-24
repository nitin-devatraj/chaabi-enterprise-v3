import React from "react";
import styles from "./ButtonWithLeftIcon.module.scss";

function ButtonWithLeftIcon(props) {
  return (
    <button
      className={styles.btnWithLeftIcon}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonWithLeftIcon;
