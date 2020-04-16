import React from "react";
import { Link } from "gatsby";
import styles from "./StyledButton.module.scss";

const StyledButton = props => {
  const { to, backgroundColor, text } = props;
  return (
    <Link to={to}>
      <button style={{ backgroundColor }} id={styles.styledButton}>
        {text}
      </button>
    </Link>
  );
};
export default StyledButton;
