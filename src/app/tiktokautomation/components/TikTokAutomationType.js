"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";

import "../../Styles/TiktokAutomation/TikTokType.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

function TikTokAutomationType() {
  const swiperRef = useRef();

  return (
    <div className="TikTokAutomationType position-relative bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2 className="heading text-center mb-5">
                <span>Lorem Ipsum</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tikTok-type-card">
              <div className="img-wrapper mb-3">
                <img
                  src="/Images/DigitalMarketing/amazon/amazoncard1.png"
                  className="img-fluid"
                />
              </div>
              <div className="amazon-heading mb-2">
                <h3>Lorem ipsum</h3>
              </div>
              <div className="amazon-contant">
                <p className="grey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tikTok-type-card">
              <div className="img-wrapper mb-3">
                <img
                  src="/Images/DigitalMarketing/amazon/amazoncard1.png"
                  className="img-fluid"
                />
              </div>
              <div className="amazon-heading mb-2">
                <h3>Lorem ipsum</h3>
              </div>
              <div className="amazon-contant">
                <p className="grey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tikTok-type-card">
              <div className="img-wrapper mb-3">
                <img
                  src="/Images/DigitalMarketing/amazon/amazoncard1.png"
                  className="img-fluid"
                />
              </div>
              <div className="amazon-heading mb-2">
                <h3>Lorem ipsum</h3>
              </div>
              <div className="amazon-contant">
                <p className="grey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="row">
              <div className="smallCard col-1 d-flex align-items-center justify-content-end">
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
              <div className="col-10">
                <Swiper
                  pagination={{ el: ".amazonretailer", clickable: true }}
                  modules={[Pagination]}
                  className="mySwiper"
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  breakpoints={{
                    575: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="imageWrapper">
                      <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="imageWrapper">
                      <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="imageWrapper">
                      <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="imageWrapper">
                      <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="imageWrapper">
                      <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="imageWrapper">
                      <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="smallCard col-1 d-flex align-items-center">
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
      </div>
    </div>
  );
}

export default TikTokAutomationType;
