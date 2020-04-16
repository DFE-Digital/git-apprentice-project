import React from "react";
import { Link } from "gatsby";
import styles from "./home-page.module.scss";
import constantStyles from "../../utils/constants.scss";
import Video from "../../components/video";
import StyledButton from "../../components/styledButton/styledButton";
import inspireTheNextGeneration from "./images/inspire-the-next-generation.png";
import inspireTheNextGenerationSmall from "./images/inspire-the-next-generation-small.png";

export default () => (
  <div className={styles.container}>
    <div id={styles.inspireImageLargeContainer}>
      {/* TODO: Replace image with text once we have got stock image background? */}
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
        id={styles.howIBecameATeacherVideo}
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
      <div id={styles.containerHeaderHowIBecameATeacher}>
        <Link
          id={styles.anchorHeaderHowIBecameATeacher}
          to="/life-as-a-teacher/stories/"
        >
          <h1 id={styles.headerHowIBecameATeacher}>
            <span id={styles.headerLineOneBackgroundHowIBecameATeacher}>
              <div
                className={styles.headerTextHowIBecameATeacher}
                id={styles.headerLineOneHowIBecameATeacher}
              >
                How I became
              </div>
            </span>
            <div>
              <span
                className={styles.headerTextHowIBecameATeacher}
                id={styles.headerLineTwoHowIBecameATeacher}
              >
                a teacher
              </span>
            </div>
          </h1>
        </Link>
      </div>
      <h3 className={styles.howIBecameATeacherText}>
        Theo swapped his office job for a career as an English teacher. Read
        Theo's story
      </h3>
      <Link
        to="/life-as-a-teacher/stories/"
        id={styles.howIBecameATeacherAnchor}
      >
        <h3 className={styles.howIBecameATeacherText}>
          View more stories&nbsp;&nbsp;&nbsp;&nbsp;>
        </h3>
      </Link>
    </div>
    <StyledButton
      text="Sign up for an advisor"
      backgroundColor={constantStyles.gitPurple}
      // to="/life-as-a-teacher/stories/"
    />
    <StyledButton text="Find Events" backgroundColor={constantStyles.gitPink} />
  </div>
);
