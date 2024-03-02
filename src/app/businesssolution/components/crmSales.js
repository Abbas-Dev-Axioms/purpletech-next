"use client"
import "../../Styles/BusinessSolution/CrmSales.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

function CrmSales() {
  return (
    <div className="CrmSales position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 mb-4">
            <div className="section-heading text-center">
              <h2 className="heading">
                <span>Agency</span> Branding
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <p className="Branding fw-semibold text-center darkgrey-text">
              Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
              fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
              Pellentesque vel tellus id ipsum metus elit et rhoncus mauris. Et
              donec etiam consectetur felis sed tristique.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 position-realtive">
            <Swiper
              pagination={{ el: ".logoSwiper", clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
              spaceBetween={50}
            >
              <SwiperSlide>
                <div className="row flex-sm-row flex-column-reverse">
                  <div className="col-xl-4 offset-xl-2 col-lg-4 col-md-5 col-sm-6 d-flex align-items-center">
                    <div className="agency-card">
                      <div className="sub-heading mb-2">
                        <h3>lorem Ipsum</h3>
                      </div>
                      <div className="content-text">
                        <p className="darkgrey-text">
                          Lorem ipsum dolor sit amet consectetur. Aenean fames
                          arcu eget fermentum aliquam. Ac tempus feugiat odio
                          adipiscing arcu mi ac. Pellentesque vel tellus id
                          ipsum metus elit et rhoncus mauris. Et donec etiam
                          consectetur felis sed tristique.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 offset-xl-1 col-lg-5 col-md-5 offset-md-2 col-sm-6 offset-lg-3 d-flex justify-content-center">
                        <img src="Images/BusinessSolution/CrmSales/crmSales.png" className="img-fluid"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row flex-sm-row flex-column-reverse">
                  <div className="col-xl-4 offset-xl-2 col-lg-4 col-md-5 col-sm-6 d-flex align-items-center">
                    <div className="agency-card">
                      <div className="sub-heading mb-2">
                        <h3>lorem Ipsum</h3>
                      </div>
                      <div className="content-text">
                        <p className="darkgrey-text">
                          Lorem ipsum dolor sit amet consectetur. Aenean fames
                          arcu eget fermentum aliquam. Ac tempus feugiat odio
                          adipiscing arcu mi ac. Pellentesque vel tellus id
                          ipsum metus elit et rhoncus mauris. Et donec etiam
                          consectetur felis sed tristique.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 offset-xl-1 col-lg-5 col-md-5 offset-md-2 col-sm-6 offset-lg-3 d-flex justify-content-center">
                        <img src="Images/BusinessSolution/CrmSales/crmSales.png" className="img-fluid"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row flex-sm-row flex-column-reverse">
                  <div className="col-xl-4 offset-xl-2 col-lg-4 col-md-5 col-sm-6 d-flex align-items-center">
                    <div className="agency-card">
                      <div className="sub-heading mb-2">
                        <h3>lorem Ipsum</h3>
                      </div>
                      <div className="content-text">
                        <p className="darkgrey-text">
                          Lorem ipsum dolor sit amet consectetur. Aenean fames
                          arcu eget fermentum aliquam. Ac tempus feugiat odio
                          adipiscing arcu mi ac. Pellentesque vel tellus id
                          ipsum metus elit et rhoncus mauris. Et donec etiam
                          consectetur felis sed tristique.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 offset-xl-1 col-lg-5 col-md-5 offset-md-2 col-sm-6 offset-lg-3 d-flex justify-content-center">
                        <img src="Images/BusinessSolution/CrmSales/crmSales.png" className="img-fluid"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row flex-sm-row flex-column-reverse">
                  <div className="col-xl-4 offset-xl-2 col-lg-4 col-md-5 col-sm-6 d-flex align-items-center">
                    <div className="agency-card">
                      <div className="sub-heading mb-2">
                        <h3>lorem Ipsum</h3>
                      </div>
                      <div className="content-text">
                        <p className="darkgrey-text">
                          Lorem ipsum dolor sit amet consectetur. Aenean fames
                          arcu eget fermentum aliquam. Ac tempus feugiat odio
                          adipiscing arcu mi ac. Pellentesque vel tellus id
                          ipsum metus elit et rhoncus mauris. Et donec etiam
                          consectetur felis sed tristique.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 offset-xl-1 col-lg-5 col-md-5 offset-md-2 col-sm-6 offset-lg-3 d-flex justify-content-center">
                        <img src="Images/BusinessSolution/CrmSales/crmSales.png" className="img-fluid"/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination logoSwiper"></div>
            {/* <div className="swiper-pagination logoSwiper"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmSales;
