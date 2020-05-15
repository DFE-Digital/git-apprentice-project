import React from "react";
import styles from "./footer.module.scss";
import dfeLogo from "../../pages/home-page/images/dfeLogo.png";
import fbLogo from "../../pages/home-page/images/fbLogo.png";
import instaLogo from "../../pages/home-page/images/instaLogo.png";
import linkedinLogo from "../../pages/home-page/images/linkedinLogo.png";
import twitterLogo from "../../pages/home-page/images/twitterLogo.png";
import youtubeLogo from "../../pages/home-page/images/youtubeLogo.png";

const Footer = props => {
  return (
    <div id={styles.background}>
      <ul id={styles.socialMediaIconsContainer}>
        <li>
          <a href="https://www.facebook.com/getintoteaching/">
            <img
              alt="FaceBook Icon"
              src={fbLogo}
              className={styles.socialMediaIcons}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/get_into_teaching/?hl=en">
            <img
              alt="Instagram Icon"
              src={instaLogo}
              className={styles.socialMediaIcons}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/organization-guest/company/get-into-teaching?challengeId=AQEweUa0UAznCAAAAXIZHpvpzoIHuZDoQkljLCbinesRTxhkS8KBRpKBbFLWH1F7-pfve376XbOJWAVGZctuygBtEWYcLHQx-g&submissionId=97631740-cb3f-0f16-6a50-d2fd8674305b">
            <img
              alt="LinkedIn Icon"
              src={linkedinLogo}
              className={styles.socialMediaIcons}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/getintoteaching?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <img
              alt="Twitter Icon"
              src={twitterLogo}
              className={styles.socialMediaIcons}
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/getintoteaching">
            <img
              alt="YouTube Icon"
              src={youtubeLogo}
              className={styles.socialMediaIcons}
            />
          </a>
        </li>
      </ul>
      <img src={dfeLogo} id={styles.dfeLogo} />
    </div>
  );
};
export default Footer;
