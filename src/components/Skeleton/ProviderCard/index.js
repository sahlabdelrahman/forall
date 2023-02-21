import styles from "./ProviderCard.module.scss";

const ProviderCardSkeleton = () => {
  return (
    <div className={`${styles["providerCard"]}`}>
      <div className={styles["imageContainer"]}></div>
      <h4></h4>
    </div>
  );
};

export default ProviderCardSkeleton;
