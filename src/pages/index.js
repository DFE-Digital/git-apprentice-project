import React from "react";
import indexStyles from "./index.module.scss";
import inspireTheNextGeneration from "../images/home-page/inspire-the-next-generation.png";
import inspireTheNextGenerationSmall from "../images/home-page/inspire-the-next-generation-small.png";

export default () => (
  <div style={{ maxWidth: 1200, margin: "auto" }}>
    <img
      src={inspireTheNextGeneration}
      alt="Inspire the next generation"
      className={indexStyles.inspireImage}
    />
    <img
      src={inspireTheNextGenerationSmall}
      alt="Inspire the next generation"
      className={indexStyles.inspireImageSmall}
    />
    <button className={indexStyles.findEventsButton}>Find Events</button>
  </div>
);
