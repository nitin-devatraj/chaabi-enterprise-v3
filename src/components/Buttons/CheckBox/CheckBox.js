import React, { useState } from "react";
import styles from "./CheckBox.module.scss";
import { ReactComponent as CheckBoxIcon } from "../../../assets/icons/button-icons/checkbox-icon.svg";

function CheckBox() {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);

  function checkboxHandler() {
    setIsCheckboxClicked((prevState) => !prevState);
  }

  return (
    <div className={styles.checkBox} onClick={checkboxHandler}>
      {isCheckboxClicked && <CheckBoxIcon className={styles.checkBoxIcon} />}
    </div>
  );
}

export default CheckBox;
