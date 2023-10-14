"use client";

import "../../Styles/YoutubeAutomation/YoutubeSwiper.css";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  EffectCoverflow, FreeMode, Thumbs, Controller } from "swiper/modules";

function YoutubeSwiper() {
  const swiperRef = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="youtubeSwiper position-relative bg-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2 className="heading mb-3">
                <span>Lorem Ipsum</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <p className="grey-text text-center">
              Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
              fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
              Pellentesque vel tellus id ipsum metus elit et rhoncus mauris. Et
              donec etiam consectetur felis sed tristique.
            </p>
          </div>
        </div>
        <div className="row mb-5">
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
          <div className="smallCard col-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
            //   grabCursor
              effect={"coverflow"}
              centeredSlides={true}
              slideToClickedSlide= {true}
              pagination={{ clickable: true }}
            //  loop={true}
            onSwiper={setThumbsSwiper}
            controller={{ control: thumbsSwiper }}
            modules={[EffectCoverflow ,FreeMode, Thumbs, Controller]}
            initialSlide= {0}
            slidesPerGroup= {1}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1.5,
                slideShadows: false,
              }}
              breakpoints={{
                575: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="mySwiper pb-4"
            >
              <SwiperSlide>
                <div className="ecom-swiper-card-container">
                  <div className="ecom-Card">
                    <img
                      src="/Images/YoutubeAutomation/YoutubeSwiper/swiperSlide1.jpg"
                      className="ecom-image"
                      width="100%"
                      height="100%"
                    />
                    <div className="content">
                        <p className="Heading">
                        Youtube Automation1
                        </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ecom-swiper-card-container">
                  <div className="ecom-Card">
                    <img
                      src="/Images/YoutubeAutomation/YoutubeSwiper/swiperSlide1.jpg"
                      className="ecom-image"
                      width="100%"
                      height="100%"
                    />
                    <div className="content">
                        <p className="Heading">
                        Youtube Automation2
                        </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ecom-swiper-card-container">
                  <div className="ecom-Card">
                    <img
                      src="/Images/YoutubeAutomation/YoutubeSwiper/swiperSlide1.jpg"
                      className="ecom-image"
                      width="100%"
                      height="100%"
                    />
                    <div className="content">
                        <p className="Heading">
                        Youtube Automation3
                        </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ecom-swiper-card-container">
                  <div className="ecom-Card">
                    <img
                      src="/Images/YoutubeAutomation/YoutubeSwiper/swiperSlide1.jpg"
                      className="ecom-image"
                      width="100%"
                      height="100%"
                    />
                    <div className="content">
                        <p className="Heading">
                        Youtube Automation4
                        </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ecom-swiper-card-container">
                  <div className="ecom-Card">
                    <img
                      src="/Images/YoutubeAutomation/YoutubeSwiper/swiperSlide1.jpg"
                      className="ecom-image"
                      width="100%"
                      height="100%"
                    />
                    <div className="content">
                        <p className="Heading">
                        Youtube Automation5
                        </p>
                    </div>
                  </div>
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
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              freeMode={true}
              watchSlidesProgress={true}
              spaceBetween={10}
              slidesPerView={1}
              modules={[Thumbs]}
              className="mySwiper"
              noSwiping ={false}
              allowTouchMove= {false}
            //   onSwiper={setThumbsSwiper}
            //   loop={true}
            //   spaceBetween={10}
            //   slidesPerView={4}
            //   freeMode={true}
            //   watchSlidesProgress={true}
            //   modules={[FreeMode ,Thumbs, Controller]}
            //   className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-content">
                  <p className="text-center">
                    At The Purple Tech our team of experts utilizes a mix of
                    highly skilled resources, lean process and bespoke strategy
                    to offer a one-stop Business Process Outsourcing (BPO)
                    solution.
                  </p>
                  <button className="explore-btn active">Explore More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-content">
                  <p className="text-center">
                    At The Purple Tech our team of experts utilizes a mix of
                    highly skilled resources, lean process and bespoke strategy
                    to offer a one-stop Business Process Outsourcing (BPO)
                    solution.
                  </p>
                  <button className="explore-btn active">Explore More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-content">
                  <p className="text-center">
                    At The Purple Tech our team of experts utilizes a mix of
                    highly skilled resources, lean process and bespoke strategy
                    to offer a one-stop Business Process Outsourcing (BPO)
                    solution.
                  </p>
                  <button className="explore-btn active">Explore More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-content">
                  <p className="text-center">
                    At The Purple Tech our team of experts utilizes a mix of
                    highly skilled resources, lean process and bespoke strategy
                    to offer a one-stop Business Process Outsourcing (BPO)
                    solution.
                  </p>
                  <button className="explore-btn active">Explore More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-content">
                  <p className="text-center">
                    At The Purple Tech our team of experts utilizes a mix of
                    highly skilled resources, lean process and bespoke strategy
                    to offer a one-stop Business Process Outsourcing (BPO)
                    solution.
                  </p>
                  <button className="explore-btn active">Explore More</button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeSwiper;
