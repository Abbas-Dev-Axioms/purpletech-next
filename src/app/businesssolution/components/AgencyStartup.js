import "../../Styles/BusinessSolution/agencyStartup.css";

function AgencyStartup() {
  return (
    <div className="AgencyBranding position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div className="section-heading text-center">
              <h2 className="heading">
                <span>Agency</span> Startup
              </h2>
            </div>
          </div>
          <div className="col-lg-9 mb-5">
            <p className="grey-text text-center">
              Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
              fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
              Pellentesque vel tellus id ipsum metus elit et rhoncus mauris. Et
              donec etiam consectetur felis sed tristique.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row content-container">
              <div className="col-lg-5 col-md-6">
                <div className="agency-card">
                  <div className="sub-heading mb-2">
                    <h3>lorem Ipsum</h3>
                  </div>
                  <div className="content-text mb-5">
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                  </div>
                  <a className="explore-btn active d-inline">Learn More</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 offset-lg-1 d-flex align-items-center">
                <div className="image-wrapper position-relative d-inline-block">
                  <img
                    src="/Images/BusinessSolution/AgencyStartup/startup.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyStartup;
