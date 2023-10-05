import "../../Styles/DigitalMarketing/socialMediaMarketing.css";

function SocialMediaMarketing() {
  return (
    <div className="socialMediaMarketing position-relative bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading mb-5">
              <h2 className="heading text-center">
                <span>Social Media</span> Marketing
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <div className="social-card">
              <h5 className="mb-5">Facebook Marketing</h5>
              <div className="image-wrapper d-flex justify-content-center align-items-center mb-5">
                <img
                  src="/Images/DigitalMarketing/socialMediaMarketing/social1.png"
                  className="img-fluid"
                />
              </div>
              <div className="gradient-content-container">
                <p className="gray-text text-center">Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="social-card">
              <h5 className="mb-5">Facebook Marketing</h5>
              <div className="image-wrapper d-flex justify-content-center align-items-center mb-5">
                <img
                  src="/Images/DigitalMarketing/socialMediaMarketing/social1.png"
                  className="img-fluid"
                />
              </div>
              <div className="gradient-content-container">
                <p className="gray-text text-center">Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaMarketing;
