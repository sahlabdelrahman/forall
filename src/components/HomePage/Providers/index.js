import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ApiConfig from "../../../services/apiConfig";

import ProviderCard from "../ProviderCard";
import ProviderCardSkeleton from "../../Skeleton/ProviderCard";
import NextButton from "../../../assets/images/NextButton.svg";
import PrevButton from "../../../assets/images/PrevButton.svg";

import styles from "./Providers.module.scss";
import "swiper/css";

const Providers = () => {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    ApiConfig.get()
      .then((res) => {
        setProviders(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className={styles["providers"]}>
      <header>
        <h4>Our Providers</h4>
      </header>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 m-auto">
              <Swiper
                navigation={{
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                  disabledClass: "swiper-button-disabled",
                }}
                slidesPerView={3}
                spaceBetween={150}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },

                  992: {
                    slidesPerView: 2,
                  },

                  1199: {
                    slidesPerView: 3,
                  },
                }}
              >
                {providers.length > 0
                  ? providers.map((provider, i) => (
                      <SwiperSlide key={provider?.id}>
                        <ProviderCard
                          image={provider?.logo["512px"]}
                          name={provider?.name?.value}
                          description={provider?.description?.value}
                          id={provider?.id}
                          first={i === 0 ? true : false}
                        />
                      </SwiperSlide>
                    ))
                  : [1, 2, 3].map((element) => (
                      <SwiperSlide key={element}>
                        <ProviderCardSkeleton />
                      </SwiperSlide>
                    ))}
              </Swiper>
            </div>
          </div>
          <ul className={styles["carouselButtons"]}>
            <li className="swiper-button image-swiper-button-prev">
              <img src={PrevButton} alt="prev button" />
            </li>
            <li className="swiper-button image-swiper-button-next">
              <img src={NextButton} alt="next button" />
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Providers;
