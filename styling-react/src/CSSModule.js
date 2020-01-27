import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      hello <span className="something"> CSSModule</span>
    </div>
  );
};

export default CSSModule;
