"use client"
import React from "react";
import "../Styles/HomePage/customers.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper/modules";

function Customers() {
  return (
    <div className="customers position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="underline-heading section-heading text-center">
              <h2 className="heading mb-5">Proudly Serving</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-card ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="py-4">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  // centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src="/Images/HomePage/Clients/Partner-1.png"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Images/HomePage/Clients/Partner-2.png"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Images/HomePage/Clients/Partner-3.png"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Images/HomePage/Clients/Partner-4.png"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Images/HomePage/Clients/Partner-5.png"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Images/HomePage/Clients/Partner-6.png"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
