import React from "react";
import { Link } from "gatsby";
import styles from "./home-page.module.scss";
import inspireTheNextGeneration from "./images/inspire-the-next-generation.png";
import inspireTheNextGenerationSmall from "./images/inspire-the-next-generation-small.png";

export default () => (
  <div className={styles.container}>
    <div id={styles.inspireImageLargeContainer}>
      <Link id={styles.anchorLifeAsATeacher} to="/life-as-a-teacher/" />
      <img
        src={inspireTheNextGeneration}
        alt="Inspire the next generation"
        id={styles.inspireImageLarge}
      />
    </div>
    <div id={styles.inspireImageSmallContainer}>
      <Link to="/life-as-a-teacher/" id={styles.anchorLifeAsATeacherSmall}>
        <img
          src={inspireTheNextGenerationSmall}
          alt="Inspire the next generation"
        />
      </Link>
    </div>
    <div></div>
  </div>
);
