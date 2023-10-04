import React from "react";

function SectionHeading() {
  return (
    <div className="position-relative py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-heading text-center mb-5">
              <h2 className="heading mb-5">
                <span>Logo</span> Design
              </h2>
              <p>
                Describe your logo design service, highlighting your expertise,
                commitment to quality, and the importance of a strong brand
                identity.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-6 mb-2">
                <div className="logoDesigns">
                    <img src="/Images/LogoDesign/logo2.png" className="img-fluid"/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-2">
                <div className="logoDesigns">
                    <img src="/Images/LogoDesign/logo2.png" className="img-fluid"/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-2">
                <div className="logoDesigns">
                    <img src="/Images/LogoDesign/logo2.png" className="img-fluid"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
