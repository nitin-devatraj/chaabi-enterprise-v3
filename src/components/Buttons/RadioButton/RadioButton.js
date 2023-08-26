import React, { useState } from "react";
import styles from "./RadioButton.module.scss";
import { ReactComponent as RadioButtonIcon } from "../../../assets/icons/button-icons/radio-button-icon.svg";

function RadioButton() {
  const [isRadioBtnClicked, setIsRadioBtnClicked] = useState(false);

  function radioBtnHandler() {
    setIsRadioBtnClicked((prevState) => !prevState);
  }
  return (
    <div className={styles.radioBtn} onClick={radioBtnHandler}>
      {isRadioBtnClicked && <RadioButtonIcon className={styles.radioBtnIcon} />}
    </div>
  );
}

export default RadioButton;
