import React from "react";
import "../Styles/HomePage/experice.css";
import VideoLayOut from "./VideoLayOut";

function Experiece() {
  return (
    <div className="experice position-relative">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 mb-5">
              <div className="section-heading mb-2">
                <h2 className="heading text-center">
                  Experience <span>Our Proccess</span>
                </h2>
              </div>
            </div>
            {/* <div className="col-sm-10 col-md-8 col-lg-8">
                <div className="videoSection position-relative">
                <img src="/Images/HomePage/Experice/Video-Section-Image 1.png" className="img-fluid"/>
                <img src="/Images/HomePage/Experice/play-icon 1.png" className="position-absolute play-btn"/>
                </div>
            </div> */}
            <VideoLayOut/>
          </div>
        </div>
      </div>
  );
}

export default Experiece;
