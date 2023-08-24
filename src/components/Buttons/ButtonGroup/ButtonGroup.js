import React, { useState } from "react";
import styles from "./ButtonGroup.module.scss";

function ButtonGroup({ buttons }) {
  const [selectedButton, setSelectedButton] = useState(null);
  function buttonClickHandler(event) {
    setSelectedButton(event.target.id);
  }

  return (
    <div className={styles.btnGroup}>
      {buttons.map((item) => (
        <button
          className={selectedButton === item ? styles.selectedBtn : styles.btn}
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
