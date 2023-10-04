"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "../../Styles/DesignAndDevelopment/logoDesignsSwiper.css";

function LogoDesignSwiper() {
  return (
    <div className="LogoDesignSwiper position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-8 position-reltive">
            <Swiper
              pagination={{ el: ".logoSwiper", clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="/Images/LogoDesign/logoDesignSwiper/logoDesignSwiper1.png"
                  className="img-fluid"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Images/LogoDesign/logoDesignSwiper/logoDesignSwiper2.jpg"
                  className="img-fluid"
                />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination logoSwiper"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoDesignSwiper;
