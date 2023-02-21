import styles from "../homePage.module.scss";

const SecondContentSection = ({ title, description, buttonText, image }) => {
  return (
    <section className={styles["contentSection"]}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 d-flex  justify-content-center d-lg-block mb-4 mb-lg-0">
            <img src={image} alt={title} />
          </div>
          <div className="col-12 col-lg-4 offset-lg-2 d-flex flex-column align-items-center d-lg-block ">
            <h3>{title}</h3>
            <p>{description}</p>
            <button type="button">{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondContentSection;
