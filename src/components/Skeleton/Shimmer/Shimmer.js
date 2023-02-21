import styles from "./Shimmer.module.scss";

const Shimmer = () => {
  return (
    <div className={styles["shimmerWrapper"]}>
      <div className={styles["shimmer"]}></div>
    </div>
  );
};

export default Shimmer;
