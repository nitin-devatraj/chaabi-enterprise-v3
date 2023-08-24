import React from "react";
import styles from "./ButtonWithLeftIcon.module.scss";

function ButtonWithRightIcon(props) {
  return (
    <button
      className={styles.btnWithRightIcon}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonWithRightIcon;
