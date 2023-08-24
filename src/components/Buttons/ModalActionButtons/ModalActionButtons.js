import React from "react";
import styles from "./ModalActionButtons.module.scss";

function ModalActionButtons(props) {
  return (
    <div className={styles.modalActionBtnGroup}>
      <button className={styles.secondaryBtn}>
        {props.secondaryButtonText}
      </button>
      <button className={styles.primaryBtn}>{props.primaryButtonText}</button>
    </div>
  );
}

export default ModalActionButtons;
