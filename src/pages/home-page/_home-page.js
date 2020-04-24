import React from "react";
import { Link } from "gatsby";
import styles from "./home-page.module.scss";
import constantStyles from "../../utils/constants.scss";
import Video from "../../components/video";
import StyledButton from "../../components/styledButton/styledButton";
import StyledHeading from "../../components/styledHeading/styledHeading";
import inspireTheNextGeneration from "./images/inspire-the-next-generation.png";
import inspireTheNextGenerationSmall from "./images/inspire-the-next-generation-small.png";
import simonTeacher from "./images/simon-teacher.jpg";
import simonTeacherImageSmall from "./images/simon-teacher-small.jpg";

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
      <div id={styles.howIBecameATeacherVideoContainer}>
        <Video
          id={styles.howIBecameATeacherVideo}
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
      <div id={styles.howIBecameATeacherTextContainer}>
        <StyledHeading
          to="/life-as-a-teacher/stories/"
          textAndBackground={[
            { text: "How I became", color: constantStyles.gitPink },
            { text: "a teacher", color: null },
          ]}
          rotation={-5}
        />
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
    </div>
    <div id={styles.simonTeacherContainer}>
      <img
        id={styles.simonTeacherImage}
        src={simonTeacher}
        alt="Teacher teaching a student"
      ></img>
      <img
        id={styles.simonTeacherImageSmall}
        src={simonTeacherImageSmall}
        alt="Teacher teaching a student"
      ></img>
      <div id={styles.simonTeacherText}>
        <p>
          The best parts of teaching for me are seeing that lightbulb moment
          when a child suddenly understands something they didn't before.
        </p>
        <p>Simon, teacher</p>
      </div>
    </div>
    <StyledButton
      text="Sign up for an adviser"
      backgroundColor={constantStyles.gitPurple}
      // to="/life-as-a-teacher/stories/"
    />
    <StyledButton text="Find Events" backgroundColor={constantStyles.gitPink} />
    <div style={{ backgroundColor: "black" }}>
      <StyledHeading
        to="/life-as-a-teacher/stories/"
        textAndBackground={[
          { text: "Just trying out", color: constantStyles.gitPink },
          { text: "the component", color: constantStyles.gitPink },
        ]}
        rotation={-5}
      />
      <div>
        <StyledHeading
          to="/life-as-a-teacher/stories/"
          textAndBackground={[
            { text: "Inspire the next", color: constantStyles.gitBlue },
            { text: "generation" },
            { text: "skewed to the right!" },
          ]}
          rotation={5}
        />
      </div>
    </div>
  </div>
);
