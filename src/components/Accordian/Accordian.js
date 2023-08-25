import React from "react";
import styles from "./Accordian.module.scss";
import Tab from "./Tab/Tab";

function Accordian({ tabs }) {
  return (
    <div className={styles.accordianContainer}>
      {tabs.map((item) => (
        <Tab item={item} />
      ))}
    </div>
  );
}

export default Accordian;
