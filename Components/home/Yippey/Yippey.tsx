import React from "react";
import Image from "next/image";

import styles from "./Yippey.module.css";

type propsData = {
  text: string;
  title?: string;
  hidden?: boolean;
  footer?: React.ReactNode;
};

const Yippey = ({ title, text, hidden, footer }: propsData) => {
  return (
    <div hidden={hidden} className={styles.Yippey}>
      <Image
        width="200"
        height="100"
        src="/businessman-he-is-successful-run-to-the-finish-line-the-concept-of-victory-of-success-achieves-the-goals-set-flat-style-cartoon-illustration-vector.webp"
        alt="Gift"
      />
      <h1>{title || "Yippey"}!</h1>
      <p>{text}</p>
      {footer}
    </div>
  );
};

export default Yippey;
