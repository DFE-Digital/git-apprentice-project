import React from "react";
import { Link } from "gatsby";
import styles from "./StyledHeading.module.scss";

const StyledHeading = props => {
  const { to, textAndBackground, rotation } = props;

  return (
    <div id={styles.containerHeaderHowIBecameATeacher}>
      <Link id={styles.anchorHeaderHowIBecameATeacher} to={to}>
        <h1
          id={styles.headerHowIBecameATeacher}
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {textAndBackground.map(line => {
            if (line.color) {
              console.log(line.color);
              return (
                <div>
                  <span
                    style={{ backgroundColor: line.color }}
                    id={styles.headerLineBackgroundHowIBecameATeacher}
                  >
                    <div
                      className={styles.headerTextHowIBecameATeacher}
                      id={styles.headerLineTextBackgroundHowIBecameATeacher}
                    >
                      {line.text}
                    </div>
                  </span>
                </div>
              );
            } else {
              return (
                <div>
                  <span
                    className={styles.headerTextHowIBecameATeacher}
                    id={styles.headerLineTextHowIBecameATeacher}
                  >
                    {line.text}
                  </span>
                </div>
              );
            }
          })}
        </h1>
      </Link>
    </div>
  );
};
export default StyledHeading;
