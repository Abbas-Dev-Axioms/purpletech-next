import "../../Styles/WholeSaleBanner/amazonRetailer.css";

function TikTokIntroduction() {
  return (
    <div className="amazonRetailer position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5">
            <div className="section-heading text-center">
              <h2 className="heading">
                <span>Lorem Ipsum</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-7 mb-3">
            <p className="grey-text text-center">
              Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
              fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
              Pellentesque vel tellus id ipsum metus elit et rhoncus mauris. Et
              donec etiam consectetur felis sed tristique.
            </p>
          </div>
        </div>
        <div className="row content-container">
          <div className=" col-xl-5 offset-xl-1 col-lg-6 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 mb-3">
            <img src="/Images/tiktokAutomation/TiktokIntro/tiktokIntroImage.png" className="img-fluid"/>

          </div>
          <div className=" col-xl-4 col-lg-5 col-md-6 d-flex align-items-center mb-3">
            <div className="agency-card">
              <div className="sub-heading mb-2">
                <h3>
                  <span>Lorem Ipsum</span>
                </h3>
              </div>
              <div className="content-text mb-5">
                <p className="grey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
              <a className="explore-btn active d-inline">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TikTokIntroduction;
