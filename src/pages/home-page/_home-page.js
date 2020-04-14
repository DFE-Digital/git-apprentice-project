import React from "react";
import { Link } from "gatsby";
import styles from "./home-page.module.scss";
import inspireTheNextGeneration from "./images/inspire-the-next-generation.png";
import inspireTheNextGenerationSmall from "./images/inspire-the-next-generation-small.png";
import howIBecameATeacher from "./images/how-i-became-a-teacher.png";

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
    <div id={styles.howIBecameATeacherContainer}>
      <img
        src={howIBecameATeacher}
        alt="How I became a Teacher"
        id={styles.howIBecameATeacherHeader}
      />
      <h3 id={styles.howIBecameATeacherText}>
        Theo swapped his office job for a career as an English teacher. Read
        Theo's story
      </h3>
      <Link
        to="/life-as-a-teacher/stories/"
        id={styles.howIBecameATeacherAnchor}
      >
        {/* TODO: add more space after stories */}
        <h3>View more stories ></h3>
      </Link>
    </div>
  </div>
);
