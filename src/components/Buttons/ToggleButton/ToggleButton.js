import React, { useState } from "react";
import styles from "./ToggleButton.module.scss";
import { ReactComponent as ToggleButtonIcon } from "../../../assets/icons/button-icons/toggle-button-icon.svg";

function ToggleButton({ onClick }) {
  const [isToggleActive, setIsToggleActive] = useState(false);

  function toggleBtnHandler() {
    setIsToggleActive((prevState) => !prevState);
    onClick();
  }

  return (
    <div
      className={`${styles.toggleBtnInactive} ${
        isToggleActive ? styles.toggleBtnActive : null
      }`}
      onClick={toggleBtnHandler}
    >
      <ToggleButtonIcon className={styles.toggleIcon} />
    </div>
  );
}

export default ToggleButton;
