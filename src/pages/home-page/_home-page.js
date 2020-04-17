import React from "react";
import { Link } from "gatsby";
import styles from "./home-page.module.scss";
import constantStyles from "../../utils/constants.scss";
import Video from "../../components/video";
import StyledButton from "../../components/styledButton/styledButton";
import inspireTheNextGeneration from "./images/inspire-the-next-generation.png";
import inspireTheNextGenerationSmall from "./images/inspire-the-next-generation-small.png";
import StyledHeading from "../../components/styledHeading/styledHeading";

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
      <StyledHeading
        to="/life-as-a-teacher/stories/"
        textAndBackground={[
          { text: "How I became", color: constantStyles.gitPink },
          { text: "a teacher", color: null },
        ]}
        rotation="-5"
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
        rotation="-5"
      />
      <div>
        <StyledHeading
          to="/life-as-a-teacher/stories/"
          textAndBackground={[
            { text: "Inspire the next", color: constantStyles.gitBlue },
            { text: "generation" },
            { text: "skewed to the right!" },
          ]}
          rotation="5"
        />
      </div>
    </div>
  </div>
);
