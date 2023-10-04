"use client"
import React from "react";
import "../Styles/HomePage/testinomial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards,Autoplay } from "swiper/modules";

function Testimonials() {
  return (
    <div className="testimonials position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center">
            <div className="section-heading mb-5">
              <p className="subtitles">Testimonials</p>
              <h2 className="heading color-heading-purple">
                Let us share how we’ve helped <span>businesses</span> grow
              </h2>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 mb-4">
            <div className="reviewContainer">
              {/* <div className="reviewCard">
                <div className="reviewText mb-3">
                  <p>
                    “I switched from a "local service provider" to Breakthru, to
                    save some bucks originally but it turned out they are
                    equally good. I really like the service and timely lead
                    delivery. They have got amazing features that make your job
                    really easy and that mobile app is definitely a plus.”
                  </p>
                </div>
                <div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div>
                <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                  <div className="reviewOwner d-flex gap-3 align-items-center">
                    <div className="review-Image">
                      <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                    </div>
                    <div className="reviewName">
                      <h5>James Mabus</h5>
                      <p className="grey-text reviewedBy">Creative Director</p>
                    </div>
                  </div>
                  <p className="grey-text reviewedBy">Facebook Testimonials</p>
                </div>
              </div> */}
               <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards,Autoplay]}
                className="mySwiper"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* <div className="col-lg-6 offset-lg-1 secondReview">
            <div className="reviewContainer">
               {/* <div className="reviewCard">
                <div className="reviewText mb-3">
                  <p>
                    “I switched from a "local service provider" to Breakthru, to
                    save some bucks originally but it turned out they are
                    equally good. I really like the service and timely lead
                    delivery. They have got amazing features that make your job
                    really easy and that mobile app is definitely a plus.”
                  </p>
                </div>
                <div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div>
                <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                  <div className="reviewOwner d-flex gap-3 align-items-center">
                    <div className="review-Image">
                      <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                    </div>
                    <div className="reviewName">
                      <h5>James Mabus</h5>
                      <p className="grey-text reviewedBy">Creative Director</p>
                    </div>
                  </div>
                  <p className="grey-text reviewedBy">Facebook Testimonials</p>
                </div>
              </div>  
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="reviewCard">
                  <div className="reviewText mb-3">
                    <p>
                      “I switched from a "local service provider" to Breakthru,
                      to save some bucks originally but it turned out they are
                      equally good. I really like the service and timely lead
                      delivery. They have got amazing features that make your
                      job really easy and that mobile app is definitely a plus.”
                    </p>
                  </div>
                  <div className="review-footer mt-4 d-flex gap-3 align-items-center justify-content-between">
                    <div className="reviewOwner d-flex gap-3 align-items-center">
                      <div className="review-Image">
                        <img src="/Images/HomePage/Testinomials/facebook-icon.png" />
                      </div>
                      <div className="reviewName">
                        <h5>James Mabus</h5>
                        <p className="grey-text reviewedBy">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <p className="grey-text reviewedBy">
                      Facebook Testimonials
                    </p>
                  </div>
                </div></SwiperSlide>
              </Swiper>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
