import React from "react";
import { Link } from "gatsby";
import styles from "./home-page.module.scss";
import Video from "../../components/video";
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
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
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
        <h3>View more stories&nbsp;&nbsp;&nbsp;&nbsp;></h3>
      </Link>
    </div>
  </div>
);