import styles from "./ProviderCard.module.scss";

import { Link } from "react-router-dom";

const ProviderCard = ({ name, image, description, id, first }) => {
  return (
    <Link
      to={`/${id}`}
      state={{ id, name, image, description }}
      className={`${styles["providerCard"]} `}
    >
      <div className={styles["imageContainer"]}>
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
    </Link>
  );
};

export default ProviderCard;
