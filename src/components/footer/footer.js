import React from "react";
import styles from "./footer.module.scss";
import dfeLogo from "./images/dfe-footer-logo.png";
import fbLogo from "./images/fb-logo.png";
import instagramLogo from "./images/insta-logo.png";
import linkedinLogo from "./images/linkedin-logo.png";
import twitterLogo from "./images/twitter-logo.png";
import youtubeLogo from "./images/youtube-logo.png";

const Footer = () => {
  const externalLinks = {
    facebook: "https://www.facebook.com/getintoteaching/",
    instagram: "https://www.instagram.com/get_into_teaching/?hl=en",
    linkedIn: `https://www.linkedin.com/organization-guest/company/get-into-teaching?
challengeId=AQEweUa0UAznCAAAAXIZHpvpzoIHuZDoQkljLCbinesRTxhkS8KBRpKBbFLWH1F7-pfve37
6XbOJWAVGZctuygBtEWYcLHQx-g&submissionId=97631740-cb3f-0f16-6a50-d2fd8674305b`,
    twitter:
      "https://twitter.com/getintoteaching?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    youtube: "https://www.youtube.com/user/getintoteaching",
    dfeHomePage:
      "https://www.gov.uk/government/organisations/department-for-education",
    crownCopyright:
      "https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright/crown-copyright/",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialWrapper}>
          <div className={styles.social}>
            <ul className={styles.socialMediaIconsList}>
              <li className={styles.socialMediaIcons}>
                <a href={externalLinks.facebook}>
                  <img alt="Facebook Icon" src={fbLogo} />
                </a>
              </li>
              <li>
                <a href={externalLinks.instagram}>
                  <img alt="Instagram Icon" src={instagramLogo} />
                </a>
              </li>
              <li>
                <a href={externalLinks.linkedIn}>
                  <img alt="LinkedIn Icon" src={linkedinLogo} />
                </a>
              </li>
              <li>
                <a href={externalLinks.twitter}>
                  <img alt="Twitter Icon" src={twitterLogo} />
                </a>
              </li>
              <li>
                <a href={externalLinks.youtube}>
                  <img alt="YouTube Icon" src={youtubeLogo} />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.copyright}>
            <a href={externalLinks.crownCopyright}>© Crown copyright</a>
          </div>
          <div className={styles.footerLogo}>
            <a
              href={externalLinks.dfeHomePage}
              title="Department for Education home page"
            >
              <img
                src={dfeLogo}
                className={styles.dfeLogo}
                alt="Department for Education Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
