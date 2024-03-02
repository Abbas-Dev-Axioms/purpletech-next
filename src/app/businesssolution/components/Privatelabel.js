import "../../Styles/BusinessSolution/privateLabel.css";

function Privatelabel() {
  return (
    <div className="privateLabel position-relative bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="section-heading text-center">
              <h2 className="heading">
                <span>Ecommerce Private</span> <br />
                Label
              </h2>
            </div>
          </div>
        </div>
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-lg-4 offset-lg-1 col-md-7 d-flex align-items-center">
            <div className="agency-card">
              <div className="sub-heading mb-2">
                <h3>lorem Ipsum</h3>
              </div>
              <div className="content-text">
                <p className="darkgrey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-6 offset-lg-1 col-8 d-flex justify-content-center">
            <img
              className="img-fluid"
              src="Images/BusinessSolution/PrivateLabel/private1.png"
            />
          </div>
        </div>
        <div className="row justify-content-center justify-content-lg-evenly">
          <div className="col-lg-6 col-md-5 col-sm-6 col-8 d-flex justify-content-center justify-content-lg-start">
            <img
              className="img-fluid grey"
              src="Images/BusinessSolution/PrivateLabel/private1.png"
            />
          </div>
          <div className="col-lg-4 col-md-7 d-flex align-items-center">
            <div className="agency-card">
              <div className="sub-heading mb-2">
                <h3>lorem Ipsum</h3>
              </div>
              <div className="content-text">
                <p className="darkgrey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privatelabel;
