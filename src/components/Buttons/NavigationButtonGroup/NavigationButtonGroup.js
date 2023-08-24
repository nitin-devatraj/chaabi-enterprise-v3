import React from "react";
import styles from "./NavigationButtonGroup.module.scss";
import classes from "../../../global-styles/style.module.scss";

function NavigationButtonGroup() {
  return (
    <div className={styles.navBtnGroup}>
      <button className={`${styles.btn} ${classes.t3Med}`}>&#8592;</button>
      <button className={`${styles.btn} ${classes.t3Med}`}>&#43;</button>
      <button className={`${styles.btn} ${classes.t3Med}`}>&#8594;</button>
    </div>
  );
}

export default NavigationButtonGroup;
