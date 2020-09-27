import React from "react";
import Container from "../container";
import styles from "./style.module.css";

function Text({ text }) {
  return (
    <Container>
      <div className={styles.text}>{text}</div>
    </Container>
  );
}

export default Text;
