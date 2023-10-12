"use client";
import "../../Styles/DropShiping/DropShipTabs.css";

function DropshipTab() {
  return (
    <div className="DropshipServiceContainer position-relative bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5">
            <div className="section-heading text-center">
              <h2 className="heading">
                <span>Lorem Ipsum</span>
              </h2>
            </div>
          </div>
          {/* <div className="col-lg-7 mb-3">
            <p className="grey-text text-center">
              Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
              fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
              Pellentesque vel tellus id ipsum metus elit et rhoncus mauris. Et
              donec etiam consectetur felis sed tristique.
            </p>
          </div> */}
        </div>
        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
          <div className="row justify-content-center" style={{ width: "100%" }}>
            <div className="col-lg-4 mb-4 col-md-6 col-sm-6 col-6">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="ex1-tab-1"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  <div className="dropship-services text-center">
                    <img src="/Images/DigitalMarketing/leadGenration/Hover 2.png" />
                    <p className="swiper-text">Tab 1</p>
                  </div>
                </a>
              </li>
            </div>
            <div className="col-lg-4 mb-4 col-md-6 col-sm-6 col-6">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-2"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  <div className="dropship-services text-center">
                    <img src="/Images/DigitalMarketing/leadGenration/Hover 2.png" />
                    <p className="swiper-text">Tab 2</p>
                  </div>
                </a>
              </li>
            </div>
            <div className="col-lg-4 mb-4 col-md-6 col-sm-6 col-6">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-3"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-3"
                  role="tab"
                  aria-controls="ex1-tabs-3"
                  aria-selected="false"
                >
                  <div className="dropship-services text-center">
                    <img src="/Images/DigitalMarketing/leadGenration/Hover 2.png" />
                    <p className="swiper-text">Tab 3</p>
                  </div>
                </a>
              </li>
            </div>
            <div className="col-lg-4 mb-4 col-md-6 col-sm-6 col-6">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-4"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-4"
                  role="tab"
                  aria-controls="ex1-tabs-4"
                  aria-selected="false"
                >
                  <div className="dropship-services text-center">
                    <img src="/Images/DigitalMarketing/leadGenration/Hover 2.png" />
                    <p className="swiper-text">Tab 4</p>
                  </div>
                </a>
              </li>
            </div>
            <div className="col-lg-4 mb-4 col-md-6 col-sm-6 col-6">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-5"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-5"
                  role="tab"
                  aria-controls="ex1-tabs-5"
                  aria-selected="false"
                >
                  <div className="dropship-services text-center">
                    <img src="/Images/DigitalMarketing/leadGenration/Hover 2.png" />
                    <p className="swiper-text">Tab 5</p>
                  </div>
                </a>
              </li>
            </div>
            <div className="col-lg-4 mb-5 col-md-6 col-sm-6 col-6">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-6"
                  data-bs-toggle="tab"
                  href="#ex1-tabs-6"
                  role="tab"
                  aria-controls="ex1-tabs-6"
                  aria-selected="false"
                >
                  <div className="dropship-services text-center">
                    <img src="/Images/DigitalMarketing/leadGenration/Hover 2.png" />
                    <p className="swiper-text">Tab 6</p>
                  </div>
                </a>
              </li>
            </div>
            <div className="col-lg-7 col-md-10">
              {/* <img src="/Images/DropShipping/DropShipTabs/dropShipTab1.png" className="img-fluid"/> */}
              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <img
                    src="/Images/DropShipping/DropShipTabs/dropShipTab1.png"
                    className="img-fluid mb-5"
                  />
                  <div className="content mx-md-5">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <img
                    src="/Images/DropShipping/DropShipTabs/dropShipTab1.png"
                    className="img-fluid mb-5"
                  />
                  <div className="content mx-md-5">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <img
                    src="/Images/DropShipping/DropShipTabs/dropShipTab1.png"
                    className="img-fluid mb-5"
                  />
                  <div className="content mx-md-5">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-4"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-4"
                >
                  <img
                    src="/Images/DropShipping/DropShipTabs/dropShipTab1.png"
                    className="img-fluid mb-5"
                  />
                  <div className="content mx-md-5">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-5"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-5"
                >
                  <img
                    src="/Images/DropShipping/DropShipTabs/dropShipTab1.png"
                    className="img-fluid mb-5"
                  />
                  <div className="content mx-md-5">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-6"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-6"
                >
                  <img
                    src="/Images/DropShipping/DropShipTabs/dropShipTab1.png"
                    className="img-fluid mb-5"
                  />
                  <div className="content mx-md-5">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                      eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                      arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                      rhoncus mauris. Et donec etiam consectetur felis sed
                      tristique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default DropshipTab;
