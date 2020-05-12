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
import simonTeacherSmall from "./images/simon-teacher-small.jpg";
import abigailTeacher from "./images/abigail-teacher.jpg";
import abigailTeacherSmall from "./images/abigail-teacher-small.jpg";
import teacherTraining from "./images/teacher-training-adviser.png";
import manchesterMap from "./images/manchester-map.png";

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
          videoSrcURL="https://youtube.com/embed/aGd_Rrs-qNY"
          videoTitle="Theo English teacher"
        />
      </div>
      <div id={styles.howIBecameATeacherTextContainer}>
        <div id={styles.howIBecameATeacherHeadingContainer}>
          <StyledHeading
            to="/life-as-a-teacher/stories/"
            textAndBackground={[
              { text: "How I became", color: constantStyles.gitPink },
              { text: "a teacher", color: null },
            ]}
            rotation={-5}
            paddingLeft="50px"
          />
        </div>
        <h3 className={styles.howIBecameATeacherText} id={styles.theoText}>
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
    <div id={styles.simonTeacherContainer} className={styles.teacherContainer}>
      <img
        id={styles.simonTeacherImage}
        src={simonTeacher}
        alt="Teacher teaching a student"
      />
      <img
        id={styles.simonTeacherImageSmall}
        src={simonTeacherSmall}
        alt="Teacher teaching a student"
      />
      <div className={styles.teacherText}>
        <p>
          The best parts of teaching for me are seeing that lightbulb moment
          when a child suddenly understands something they didn't before.
        </p>
        <p>Simon, teacher</p>
      </div>
    </div>
    <div id={styles.teacherTrainingContainer}>
      <div
        className={styles.teacherTrainingHeadingContainer}
        id={styles.teacherTrainingHeadingContainerLarge}
      >
        <StyledHeading
          to="/life-as-a-teacher/stories/"
          textAndBackground={[
            { text: "Get advice from a teacher" },
            { text: "training adviser" },
          ]}
        />
      </div>
      <div
        className={styles.teacherTrainingHeadingContainer}
        id={styles.teacherTrainingHeadingContainerSmall}
      >
        <StyledHeading
          to="/life-as-a-teacher/stories/"
          textAndBackground={[
            { text: "Get advice" },
            { text: "from a teacher" },
            { text: "training" },
            { text: "adviser" },
          ]}
        />
      </div>
      <img
        src={teacherTraining}
        alt="Teacher training adviser"
        id={styles.teacherTrainingAdviserImage}
      />
    </div>
    <div id={styles.signUpAdviserContainer}>
      <p id={styles.signUpAdviserText}>
        Sign up and get advice on how to take your next step into teaching
      </p>
      <div id={styles.signUpAdviserButtonContainer}>
        <StyledButton
          text="Sign up for an adviser"
          backgroundColor={constantStyles.gitPurple}
        />
      </div>
    </div>
    <div
      className={styles.teacherContainer}
      id={styles.abigailAndFindEventsContainer}
    >
      <div id={styles.abigailTeacherContainer}>
        <div id={styles.abigailTeacherBorder}>
          <img
            src={abigailTeacher}
            id={styles.abigailTeacherImage}
            alt="Teacher teaching a student"
          ></img>
        </div>
        <img
          src={abigailTeacherSmall}
          id={styles.abigailTeacherImageSmall}
          alt="Teacher teaching a student"
        />
        <div className={styles.teacherText}>
          <p>
            ...it's a job that is full of rewards and you have the privilege of
            seeing children progress, grow and shine during their time with you.
            There is no greater feeling.
          </p>
          <p>Abigail, Primary teacher</p>
        </div>
      </div>
      <div id={styles.findAnEventNearYouBorder}>
        <div id={styles.findAnEventNearYouBackground}>
          <StyledHeading
            to="/life-as-a-teacher/stories/"
            textAndBackground={[{ text: "Find an event near you" }]}
          />
        </div>
      </div>
      <div id={styles.mapImageContainer}>
        <img
          src={manchesterMap}
          id={styles.manchesterMapImage}
          alt="Aerial map of Manchester, UK"
        />
        <div id={styles.findEventsButton}>
          <StyledButton
            text="Find Events"
            backgroundColor={constantStyles.gitPink}
          />
        </div>
        <h3 id={styles.comeToATeachingEventText}>
          Come to a free teaching event and find out how you can train to be a
          teacher.
        </h3>
      </div>
    </div>

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
