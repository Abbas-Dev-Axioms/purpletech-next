"use client";

import "../../Styles/DropShiping/DropShipSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";


function DropShipSwiper() {
  return (
    <>
      <div className="dropshipSwiper position-relative bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <div className="section-heading mb-5">
                <h2 className="heading">
                  <span>Lorem Ipsum</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiperBanner position-relative bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 offset-xl-1 col-lg-5 d-flex align-items-center">
              <div className="tab-content" id="ex2-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-7"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-7"
                >
                  <div className="SubContent">
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                    <button className="white-btn">Get Started</button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-8"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-8"
                >
                  <div className="SubContent">
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                    <button className="white-btn">Get Started</button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-9"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-9"
                >
                  <div className="SubContent">
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                    <button className="white-btn">Get Started</button>
                  </div>
                </div>
              </div>
              {/* <div className="SubContent">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                  <button className="white-btn">Get Started</button>
                </div> */}
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7 position-relative py-4">
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={2}
                  pagination={{ el: ".dropShipSwiperPagination", clickable: true }}
              modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="ex1-tab-7"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-7"
                        role="tab"
                        aria-controls="ex1-tabs-7"
                        aria-selected="true"
                      >
                        <div className="swiper-content text-center">
                          <h5 className="subtitle">Lorem Ipsum</h5>
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean fames
                            arcu eget fermentum aliquam.
                          </p>
                        </div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex1-tab-8"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-8"
                        role="tab"
                        aria-controls="ex1-tabs-8"
                        aria-selected="false"
                      >
                        <div className="swiper-content text-center">
                          <h5 className="subtitle">Lorem Ipsum</h5>
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean fames
                            arcu eget fermentum aliquam.
                          </p>
                        </div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex1-tab-9"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-9"
                        role="tab"
                        aria-controls="ex1-tabs-9"
                        aria-selected="false"
                      >
                        <div className="swiper-content text-center">
                          <h5 className="subtitle">Lorem Ipsum</h5>
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean fames
                            arcu eget fermentum aliquam.
                          </p>
                        </div>
                      </a>
                    </li>
                  </SwiperSlide>
                </Swiper>
              </ul>
                  <div className="swiper-pagination dropShipSwiperPagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropShipSwiper;
