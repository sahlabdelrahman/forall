import { useEffect } from "react";
import FirstContentSection from "../../components/HomePage/FirstContentSection";
import Providers from "../../components/HomePage/Providers";
import SecondContentSection from "../../components/HomePage/SecondContentSection";
import { homePageData } from "../../data/static-data";

const Home = () => {
  const firstContentSectionData = homePageData.firstContentSection;
  const secondContentSectionData = homePageData.secondContentSection;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <FirstContentSection
        title={firstContentSectionData.title}
        description={firstContentSectionData.description}
        buttonText={firstContentSectionData.buttonText}
        image={firstContentSectionData.image}
      />
      <SecondContentSection
        title={secondContentSectionData.title}
        description={secondContentSectionData.description}
        buttonText={secondContentSectionData.buttonText}
        image={secondContentSectionData.image}
      />
      <Providers />
    </div>
  );
};

export default Home;
