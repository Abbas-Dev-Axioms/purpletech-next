"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../Styles/WholeSaleBanner/amazonRetailer.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

function AmazonRetailer() {
  return (
    <div className="amazonRetailer position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5">
            <div className="section-heading text-center">
              <h2 className="heading">
                <span>
                  Achieve Astounding Success, Redefining Retail Excellence!{" "}
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-7 mb-5">
            <p className="grey-text text-center">
              Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
              fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
              Pellentesque vel tellus id ipsum metus elit et rhoncus mauris. Et
              donec etiam consectetur felis sed tristique.
            </p>
          </div>
        </div>
        <div className="row content-container">
          <div className="col-lg-5 col-md-12 d-flex align-items-center mb-3">
            <div className="agency-card">
              <div className="sub-heading mb-2">
                <h3>
                  <span>Amazon seller</span> Retail Excellence!
                </h3>
              </div>
              <div className="content-text mb-5">
                <p className="grey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
              <a className="explore-btn active d-inline">Learn More</a>
            </div>
          </div>
          <div className=" col-xl-6 offset-xl-1 col-lg-7 offset-lg-0 col-md-10 offset-md-1  position-realtive">
            <Swiper
              pagination={{ el: ".amazonretailer", clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
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
                  <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" alt="image"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imageWrapper">
                  <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" alt="image"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imageWrapper">
                  <img src="/Images/AmazonWholeSale/AmazonRetailer/mobileDevice1.png" alt="image"/>
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
            <div className="amazonretailer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmazonRetailer;
