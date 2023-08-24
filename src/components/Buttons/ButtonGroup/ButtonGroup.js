import React, { useState } from "react";
import styles from "./ButtonGroup.module.scss";

function ButtonGroup(props) {
  const [selectedButton, setSelectedButton] = useState(null);
  function buttonClickHandler(event) {
    setSelectedButton(event.target.id);
  }

  return (
    <div className={styles.btnGroup}>
      {props.childrenButtons.map((item) => (
        <button
          className={`${styles.btn} ${
            selectedButton === item ? styles.selectedBtn : ""
          }`}
          key={item}
          id={item}
          onClick={buttonClickHandler}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
