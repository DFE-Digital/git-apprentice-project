import React from "react";
import { Link } from "gatsby";
import indexStyles from "./index.module.scss";
import inspireTheNextGeneration from "../images/home-page/inspire-the-next-generation.png";
import inspireTheNextGenerationSmall from "../images/home-page/inspire-the-next-generation-small.png";

export default () => (
  <div className={indexStyles.container}>
    <div id={indexStyles.inspireImageLargeContainer}>
      <Link id={indexStyles.anchorLifeAsATeacher} to="/life-as-a-teacher/" />
      <img
        src={inspireTheNextGeneration}
        alt="Inspire the next generation"
        className={indexStyles.inspireImage}
      />
    </div>
    <Link to="/life-as-a-teacher/">
      <img
        src={inspireTheNextGenerationSmall}
        alt="Inspire the next generation"
        className={indexStyles.inspireImageSmall}
      />
    </Link>
    <button className={indexStyles.findEventsButton}>Find Events</button>
  </div>
);
