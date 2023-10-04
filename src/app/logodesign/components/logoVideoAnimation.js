import React from "react";
import "../../Styles/DesignAndDevelopment/logoVideoAnimation.css";
import VideoLayOut from "../../components/VideoLayOut";

function LogoVideoAnimation() {
  return (
    <div className="logoVideoAnimation position-relative">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="section-heading mb-5">
              <h2 className="heading text-center">
                <span>Video</span> Animation
              </h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="video-types mb-5">
              <div className="video-item">
                <p>3D Video</p>
              </div>
              <div className="video-item">
                <p>3D Design Video</p>
              </div>
              <div className="video-item">
                <p>Abstract Video</p>
              </div>
              <div className="video-item">
                <p>Education Video</p>
              </div>
              <div className="video-item">
                <p>3D Video</p>
              </div>
              <div className="video-item">
                <p>3D Design Video</p>
              </div>
              <div className="video-item">
                <p>Abstract Video</p>
              </div>
              <div className="video-item">
                <p>Education Video</p>
              </div>
              <div className="video-item">
                <p>3D Video</p>
              </div>
              <div className="video-item">
                <p>3D Design Video</p>
              </div>
              <div className="video-item">
                <p>Abstract Video</p>
              </div>
              <div className="video-item">
                <p>Education Video</p>
              </div>
            </div>
    
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-5">
            <div className="Video-content-container text-center mb-5">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
            </div>
          </div>
          <VideoLayOut />
        </div>
      </div>
    </div>
  );
}

export default LogoVideoAnimation;
