import styles from "./ProviderContent.module.scss";

const ProviderContent = ({
  firstContentSectionData,
  secondContentSectionData,
}) => {
  return (
    <section className={styles["providerContent"]}>
      <div className="container-fluid">
        <div className="row justify-content-between text-center">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <h3>{firstContentSectionData.title}</h3>
            <p>{firstContentSectionData.description}</p>
          </div>
          <div className="col-12 col-lg-4">
            <h3>{secondContentSectionData.title}</h3>
            <p>{secondContentSectionData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderContent;
