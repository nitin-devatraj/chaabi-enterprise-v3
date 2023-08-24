import React from "react";

import styles from "./TertiaryButton.module.scss";

function TertiaryButton(props) {
  return (
    <button
      className={styles.tertiaryBtn}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default TertiaryButton;
