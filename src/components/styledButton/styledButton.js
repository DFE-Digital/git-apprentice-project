import React from "react";
import styles from "./StyledButton.module.scss";

const StyledButton = props => (
  <button id={styles.styledButton}>{props.text}</button>
);

export default StyledButton;
