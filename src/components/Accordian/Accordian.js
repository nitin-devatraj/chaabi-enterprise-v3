import React from "react";
import styles from "./Accordian.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";

function Accordian({ tabs }) {
  return (
    <div className={styles.accordianContainer}>
      {tabs.map((item) => (
        <div className={styles.tab}>
          <div>{item.title}</div>
          <ArrowRightIcon />
        </div>
      ))}
    </div>
  );
}

export default Accordian;
