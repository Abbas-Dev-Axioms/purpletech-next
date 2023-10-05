"use client";
import "../../Styles/DigitalMarketing/ppcCampaign.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PpcCampaign() {
  const swiperRef = useRef();

  return (
    <div className="ppc position-relative bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2 className="heading d-inline-block position-relative">
                <span>PPC</span> Campaign
                <div className="mouse-img">
                    <img src="/Images/DigitalMarketing/ppcCamp/Group.svg"/>
                </div>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="smallCard col-lg-2 col-1 d-flex align-items-center justify-content-center">
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
                <div className="ppc-slide text-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ppc-slide text-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ppc-slide text-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="smallCard col-lg-2 col-1 d-flex align-items-center justify-content-center">
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

export default PpcCampaign;
