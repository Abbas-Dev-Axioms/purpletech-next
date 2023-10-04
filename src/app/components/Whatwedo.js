import React from "react";
import "../Styles/HomePage/what-we-do.css";

function Whatwedo() {
  return (
    <div className="what-we-do position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="section-heading mb-3">
              <div className="underline-heading mb-3 text-center">
                <h3 className="color-heading-purple heading">What We Do</h3>
              </div>
              <p className="grey-text text-center">
                Our services are defined by quality and commitment.
              </p>
            </div>
          </div>
          <div className="purpose-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="purpose-card">
                    <div className="purposeImage">
                      <img src="Images/HomePage/What-we-do/Consulting-Icon 1.png" />
                    </div>
                    <h5 className="text-center purposeHeading">Consulting</h5>
                    <p>We help you create a clear digital strategy that optimizes
                      your path to comprehensive, technology-led business
                      success.</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="purpose-card">
                    <div className="purposeImage">
                      <img src="Images/HomePage/What-we-do/Consulting-Icon 2.png" />
                    </div>
                    <h5 className="text-center purposeHeading">Consulting</h5>
                    <p>We help you create a clear digital strategy that optimizes
                      your path to comprehensive, technology-led business
                      success.</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="purpose-card">
                    <div className="purposeImage">
                      <img src="Images/HomePage/What-we-do/Consulting-Icon 3.png" />
                    </div>
                    <h5 className="text-center purposeHeading">Consulting</h5>
                    <p>We help you create a clear digital strategy that optimizes
                      your path to comprehensive, technology-led business
                      success.</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="purpose-card">
                    <div className="purposeImage">
                      <img src="Images/HomePage/What-we-do/Consulting-Icon 4.png" />
                    </div>
                    <h5 className="text-center purposeHeading">Consulting</h5>
                    <p>We help you create a clear digital strategy that optimizes
                      your path to comprehensive, technology-led business
                      success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
