"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "../../Styles/BusinessSolution/resourceOutSourcing.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function ResourceOutsourcing() {
  const swiperRef = useRef();

  return (
    <div className="rescource position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-heading text-center mb-4">
              <h2 className="heading">
                <span>Resource</span> Outsourcing
              </h2>
            </div>
          </div>
          <div className="col-lg-9 mb-4">
            <p className="darkgrey-text text-center fw-semibold">
              Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
              fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
              Pellentesque vel tellus id ipsum metus elit et rhoncus mauris. Et
              donec etiam consectetur felis sed tristique.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="smallCard col-1 d-flex align-items-center justify-content-center">
            <button
              className="swiper-btn"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img
                height="30px"
                className="prev"
                src="/Images/HomePage/EcomSolutions/slide 1.png"
              />
            </button>
          </div>
          <div className="smallCard col-lg-8 col-10">
            <Swiper
                spaceBetween={20}
              slidesPerView={2}
              centeredSlides={true}
              centeredSlidesBounds= {true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="image-swiper">
                  <img
                    src="/Images/BusinessSolution/ResourceOutSourcing/swiperSlide1.png"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-swiper">
                  <img
                    src="/Images/BusinessSolution/ResourceOutSourcing/swiperSlide1.png"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-swiper">
                  <img
                    src="/Images/BusinessSolution/ResourceOutSourcing/swiperSlide1.png"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-swiper">
                  <img
                    src="/Images/BusinessSolution/ResourceOutSourcing/swiperSlide1.png"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-swiper">
                  <img
                    src="/Images/BusinessSolution/ResourceOutSourcing/swiperSlide1.png"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="smallCard col-1 d-flex align-items-center justify-content-center">
            <button
              className="swiper-btn"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img
                height="30px"
                className="next"
                src="/Images/HomePage/EcomSolutions/slide 1.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceOutsourcing;
