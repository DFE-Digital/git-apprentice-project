import React from "react";
import styles from "./footer.module.scss";
import dfeLogo from "../../pages/home-page/images/dfeLogo.png";
import fbLogo from "../../pages/home-page/images/fbLogo.png";
import instaLogo from "../../pages/home-page/images/instaLogo.png";
import linkedinLogo from "../../pages/home-page/images/linkedinLogo.png";
import twitterLogo from "../../pages/home-page/images/twitterLogo.png";
import youtubeLogo from "../../pages/home-page/images/youtubeLogo.png";

// import twitterIcon from "./images/twitter-icon.png"

const Footer = props => {
  return (
    <div id={styles.background}>
      <ul id={styles.socialMediaIconsContainer}>
        <li>
          <img src={fbLogo} className={styles.socialMediaIcons} />
        </li>
        <li>
          <img src={instaLogo} className={styles.socialMediaIcons} />
        </li>
        <li>
          <img src={linkedinLogo} className={styles.socialMediaIcons} />
        </li>
        <li>
          <img src={twitterLogo} className={styles.socialMediaIcons} />
        </li>
        <li>
          <img src={youtubeLogo} className={styles.socialMediaIcons} />
        </li>
      </ul>
      <img src={dfeLogo} id={styles.dfeLogo} />
    </div>
  );
};
export default Footer;
