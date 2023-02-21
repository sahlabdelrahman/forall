// import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProviderContent from "../../components/ProviderPage/ProviderContent";
import ProviderIfo from "../../components/ProviderPage/ProviderInfo";

import { providerPageData } from "../../data/static-data";

const Provider = () => {
  const { state } = useLocation();
  const firstContentSectionData = providerPageData.firstContentSection;
  const secondContentSectionData = providerPageData.secondContentSection;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <ProviderIfo
        name={state?.name ? state.name : ""}
        image={state?.image ? state?.image : ""}
        description={state?.description ? state?.description : ""}
      />
      <ProviderContent
        firstContentSectionData={firstContentSectionData}
        secondContentSectionData={secondContentSectionData}
      />
    </div>
  );
};

export default Provider;
