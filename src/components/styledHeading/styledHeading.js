import React from "react";
import { Link } from "gatsby";
import styles from "./styledHeading.module.scss";

const StyledHeading = props => {
  const { to, textAndBackground, rotation } = props;

  return (
    <div id={styles.containerHeading}>
      <Link id={styles.anchorHeading} to={to}>
        <h1
          id={styles.heading}
          style={{
            transform: `rotate(${rotation}deg)`,
            msTransform: `rotate(${rotation}deg)`,
          }}
        >
          {textAndBackground.map(line => (
            <div>
              <span
                style={{ backgroundColor: line.color }}
                id={styles.textContainerHeading}
              >
                <span className={styles.textHeading}>{line.text}</span>
              </span>
            </div>
          ))}
        </h1>
      </Link>
    </div>
  );
};

export default StyledHeading;