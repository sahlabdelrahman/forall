import styles from "./Header.module.scss";

import { Link } from "react-router-dom";
import { headerData } from "../../data/static-data";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles["menuContainer"]} col-4`}>
            <img src={headerData.menuIcon} alt="menu icon" />
          </div>
          <div className={`${styles["logoContainer"]} col-4`}>
            <Link to="/">
              <img src={headerData.image} alt="logo" />
            </Link>
            <h4>{headerData.name}</h4>
            <p>{headerData.slug}</p>
          </div>
          <div className="col-4">
            <ul>
              {headerData.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
