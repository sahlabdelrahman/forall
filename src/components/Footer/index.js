import { Link } from "react-router-dom";
import { footerData } from "../../data/static-data";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles["linksContainer"]} col-4`}>
            <h4>{footerData.links.linksTitle}</h4>
            <ul>
              {footerData.links.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
            <div className={styles["storesContainer"]}>
              {footerData.stores.map((store, i) => (
                <img key={i} src={store} alt="store" />
              ))}
            </div>
          </div>
          <div className={`${styles["logoContainer"]} col-4`}>
            <Link to="/">
              <img src={footerData.image} alt="logo" />
            </Link>
            <h4>{footerData.name}</h4>
            <ul>
              {footerData.socialMediaIcons.map((link, i) => (
                <li key={i}>
                  <a href="/">
                    <img src={link} alt="social media icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles["infoContainer"]} col-4`}>
            <p>
              <img src={footerData.locationIcon} alt="location icon" />{" "}
              <span>{footerData.country}</span>
            </p>
            <p>{footerData.address}</p>
            <p>
              <span>Email:</span>
              {footerData.email}
              <span>Mobile: </span>
              {footerData.mobile}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
