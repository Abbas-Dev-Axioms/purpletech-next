"use client"
import React, { useRef } from "react";
import "../Styles/HomePage/ecomSolutions.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function EcomSolutions() {
  const swiperRef = useRef();

  return (
    <div className="ecomsolutions position-relative">
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-xxl-4 col-xl-4 col-lg-12 d-flex justify-content-center align-items-center mb-5">
            <div>
              <div className="section-heading mb-3">
                <h2 className="heading">Ecommerce Solutions</h2>
              </div>
              <p className="">
                From start-ups to established brands, our ecommerce solutions
                are tailored to fuel your business growth. With our expertise,
                we offer practical and innovative strategies designed to fit
                your needs, ensuring your online success every step of the way.
              </p>
              <div className="expore-button-container">
                <a className="explore-btn active">Explore</a>
              </div>
            </div>
          </div>
          <div className="largeCard col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 col-sm-4 mb-5">
            <div className="ecom-Card">
              <img
                src="/Images/HomePage/EcomSolutions/Amazon Wholesale 1.png"
                className="ecom-image"
                width="100%"
                height="100%"
              />
              <h6 className="position-absolute ecom-title">
                Amazon Wholesale FBA
              </h6>
              <a className="explore-btn active position-absolute">Learn More</a>
            </div>
          </div>
          <div className="largeCard col-xxl-2 col-xl-2 col-lg-3 col-sm-4 mb-5">
            <div className="ecom-Card">
              <img
                src="/Images/HomePage/EcomSolutions/Shopify Droppshipping 1.png"
                className="ecom-image"
                width="100%"
                height="100%"
              />
              <h6 className="position-absolute ecom-title">
                Amazon Wholesale FBA
              </h6>
              <a className="explore-btn active position-absolute">Learn More</a>
            </div>
          </div>
          <div className="largeCard col-xxl-2 col-xl-2 col-lg-3 col-sm-4 mb-5">
            <div className="ecom-Card">
              <img
                src="/Images/HomePage/EcomSolutions/Facebbok-Market-place 1.png"
                className="ecom-image"
                width="100%"
                height="100%"
              />
              <h6 className="position-absolute ecom-title">
                Amazon Wholesale FBA
              </h6>
              <a className="explore-btn active position-absolute">Learn More</a>
            </div>
          </div>
          <div className="smallCard col-2 d-flex align-items-center justify-content-end">
            <button className="swiper-btn" onClick={() => swiperRef.current?.slidePrev()}><img height="30px" className="prev" src="/Images/HomePage/EcomSolutions/slide 1.png"/></button>
          </div>
          <div className="smallCard col-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              // centeredSlides={true}
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
                <div className="ecom-swiper-card-container pb-4">
                  <div className="ecom-Card">
                    <img
                      src="/Images/HomePage/EcomSolutions/Amazon Wholesale 1.png"
                      className="ecom-image"
                      width="100%"
                      height="100%"
                    />
                    <h6 className="position-absolute ecom-title">
                      Amazon Wholesale FBA
                    </h6>
                    <a className="explore-btn active position-absolute">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ecom-swiper-card-container pb-4">
                  <div className="ecom-Card">
                    <img
                      src="/Images/HomePage/EcomSolutions/Amazon Wholesale 1.png"
                      className="ecom-image"
                      width="100%"
                      height="100%"
                    />
                    <h6 className="position-absolute ecom-title">
                      Amazon Wholesale FBA
                    </h6>
                    <a className="explore-btn active position-absolute">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="smallCard col-2 d-flex align-items-center">
            <button className="swiper-btn" onClick={() => swiperRef.current?.slideNext()}><img height="30px" className="next" src="/Images/HomePage/EcomSolutions/slide 1.png"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcomSolutions;
