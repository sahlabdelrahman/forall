import styles from "./ProviderInfo.module.scss";

const ProviderIfo = ({ name, image, description }) => {
  return (
    <section className={styles["providerInfo"]}>
      <div className={styles["imageContainer"]}>
        <img src={image} alt="" />
      </div>
      <h5>{name}</h5>
      <p>{description}</p>
    </section>
  );
};

export default ProviderIfo;
