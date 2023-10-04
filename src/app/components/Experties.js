import React from "react";
import "../Styles/HomePage/experties.css";

function Experties() {
  return (
    <div className="experties position-relative">
      <div className="container-fluid">
        <div className="section-heading mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-3 d-flex align-items-center">
              <div className="blueLine"></div>
            </div>
            <div className="col-8 col-sm-6 col-lg-3">
              <div className="section-heading mb-2">
                <h2 className="heading text-center">Our Expertise</h2>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center">
              <div className="blueLine"></div>
            </div>
            <div className="col-lg-8 pt-4">
              <p className="text-center subtitle">
                Backed by experience, we bring a dynamic approach to your
                digital needs. Discover a range of comprehensive services
                tailored to your success
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10">
              <div className="ExperinceCard">
                <div className="imageWrapper mx-3 mb-5">
                <img
                  src="/Images/HomePage/Experties/Design-and-development 1.png"
                  width="100%"
                />
                </div>
                <h6 className="px-3 card-heading mb-4">DESIGN & DEVELOPMENT</h6>
                <ul className="services">
                  <li>Logo Design</li>
                  <li>Marketing Design</li>
                  <li>Video Animation</li>
                  <li>Web Development</li>
                  <li>App Development</li>
                  <li>Real-time Visualization</li>
                </ul>
                <a className="explore-btn">Explore</a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4  col-md-6 col-sm-8 col-10">
              <div className="ExperinceCard">
              <div className="imageWrapper mx-3 mb-5">
                <img
                  src="/Images/HomePage/Experties/Digital-marketing 1.png"
                  width="100%"
                />
                </div>
                <h6 className="px-3 card-heading mb-4">Digital Marketing</h6>
                <ul className="services mb-4">
                  <li>Search Engine Optimization</li>
                  <li>Social Media Marketing</li>
                  <li>Lead Genration</li>
                  <li>PPC Campaigns</li>
                  <li>GDN Advertisting</li>
                  <li>Amazon Marketing</li>
                </ul>
                <a className="explore-btn">Explore</a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10">
              <div className="ExperinceCard">
              <div className="imageWrapper mx-3 mb-5">
                <img
                  src="/Images/HomePage/Experties/Biussiness-Solution 1.png"
                  width="100%"
                />
                </div>
                <h6 className="px-3 card-heading mb-4">DESIGN & DEVELOPMENT</h6>
                <ul className="services">
                  <li>Logo Design</li>
                  <li>Marketing Design</li>
                  <li>Video Animation</li>
                  <li>Web Development</li>
                  <li>App Development</li>
                  <li>Real-time Visualization</li>
                </ul>
                <a className="explore-btn">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experties;
