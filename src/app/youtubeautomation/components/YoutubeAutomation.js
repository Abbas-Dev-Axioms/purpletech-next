"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

function YoutubeAutomationType() {
  const swiperRef = useRef();

  return (
    <div className="youtubeType position-relative bg-white py-5">
      <div className="container">
        <div className="position-relative mb-5">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ el: ".youtubeTypePagination", clickable: true }}
              modules={[Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-12">
                <div className="row flex-column-reverse flex-md-row">
                  <div className="col-lg-4 offset-lg-1 col-md-6 d-flex align-items-center mb-md-0 mb-4 ">
                    <div className="section-heading">
                      <h2 className="heading mb-5">
                        <span>Lorem Ipsum</span>
                      </h2>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet consectetur. Aenean fames
                        arcu eget fermentum aliquam. Ac tempus feugiat odio
                        adipiscing arcu mi ac. Pellentesque vel tellus id ipsum
                        metus elit et rhoncus mauris. Et donec etiam consectetur
                        felis sed tristique.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-2 col-md-6 col-sm-8 offset-sm-2">
                    <img
                      className="img-fluid"
                      src="/Images/YoutubeAutomation/YoutubeType/img1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-12">
                <div className="row flex-column-reverse flex-md-row">
                  <div className="col-lg-4 offset-lg-1 col-md-6 d-flex align-items-center mb-md-0 mb-4 ">
                    <div className="section-heading">
                      <h2 className="heading mb-5">
                        <span>Lorem Ipsum</span>
                      </h2>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet consectetur. Aenean fames
                        arcu eget fermentum aliquam. Ac tempus feugiat odio
                        adipiscing arcu mi ac. Pellentesque vel tellus id ipsum
                        metus elit et rhoncus mauris. Et donec etiam consectetur
                        felis sed tristique.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-2 col-md-6 col-sm-8 offset-sm-2">
                    <img
                      className="img-fluid"
                      src="/Images/YoutubeAutomation/YoutubeType/img1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-12">
                <div className="row flex-column-reverse flex-md-row">
                  <div className="col-lg-4 offset-lg-1 col-md-6 d-flex align-items-center mb-md-0 mb-4 ">
                    <div className="section-heading">
                      <h2 className="heading mb-5">
                        <span>Lorem Ipsum</span>
                      </h2>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet consectetur. Aenean fames
                        arcu eget fermentum aliquam. Ac tempus feugiat odio
                        adipiscing arcu mi ac. Pellentesque vel tellus id ipsum
                        metus elit et rhoncus mauris. Et donec etiam consectetur
                        felis sed tristique.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-2 col-md-6 col-sm-8 offset-sm-2">
                    <img
                      className="img-fluid"
                      src="/Images/YoutubeAutomation/YoutubeType/img1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination youtubeTypePagination"></div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeAutomationType;
