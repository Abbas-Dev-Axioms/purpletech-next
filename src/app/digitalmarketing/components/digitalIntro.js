import React from "react";
import "../../Styles/DigitalMarketing/digitalIntro.css";

function DigitalIntro() {
  return (
    <div className="digital-intro position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center">
            <div className="section-heading mb-5">
              <h2 className="heading">
                <span>Search Engine</span> optimization
              </h2>
            </div>
          </div>
          <div className="col-lg-9">
            <p className="text-center grey-text">
              Describe your logo design service, highlighting your expertise,
              commitment to quality, and the importance of a strong brand
              identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalIntro;
