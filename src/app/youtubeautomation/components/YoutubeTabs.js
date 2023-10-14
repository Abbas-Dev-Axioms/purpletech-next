"use client";
import "../../Styles/DigitalMarketing/leadGenration.css";
import "../../Styles/YoutubeAutomation/YoutubeTabs.css";
import { useState } from "react";


function YoutubeTabs() {
  const [selectedTab, setSelectedTab] = useState("ex1-tabs-1");

  const imageTabId = {
    "ex1-tabs-1": "/Images/DigitalMarketing/leadGenration/lead generation.png",
    "ex1-tabs-2": "/Images/DigitalMarketing/leadGenration/Hover 2.png",
    "ex1-tabs-3": "/Images/DigitalMarketing/leadGenration/lead generation3.png",
    "ex1-tabs-4": "/Images/YouTubeAutomation/YouTubeTabs/tab1.png",
  };

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };
  return (
    <div className="leadGeneration youtubeTabs position-relative bg-white">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-4  col-lg-6 col-md-5 d-flex justify-content-center">
            <img
            key={selectedTab}
              src={imageTabId[selectedTab]}
              width="80%"
              className="img-fluid tabsImage animate-fade"
            />
          </div>
          <div className="col-xl-4 offset-xl-1 col-lg-6 col-md-7 col-sm-10 mb-5">
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <div className="section-heading mb-4">
                  <h2 className="heading mb-4">
                    <span>Lead</span> Generation1
                  </h2>
                  <p className="mb-4 grey-text">
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
                <div className="section-heading mb-4">
                  <h2 className="heading mb-4">
                    <span>Lead</span> Generation2
                  </h2>
                  <p className="mb-4 grey-text">
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
                <div className="section-heading mb-4">
                  <h2 className="heading mb-4">
                    <span>Lead</span> Generation3
                  </h2>
                  <p className="mb-4 grey-text">
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
                <div className="section-heading mb-4">
                  <h2 className="heading mb-4">
                    <span>Lead</span> Generation4
                  </h2>
                  <p className="mb-4 grey-text">
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum metus elit et
                    rhoncus mauris. Et donec etiam consectetur felis sed
                    tristique.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="smallCard col-12">
                <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="ex1-tab-1"
                          data-bs-toggle="tab"
                          href="#ex1-tabs-1"
                          role="tab"
                          aria-controls="ex1-tabs-1"
                          aria-selected="true"
                          onClick={() => handleTabClick("ex1-tabs-1")}
                        >
                          <div className="lead-services text-center">
                            <p className="swiper-text">Tab 1</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="ex1-tab-2"
                          data-bs-toggle="tab"
                          href="#ex1-tabs-2"
                          role="tab"
                          aria-controls="ex1-tabs-2"
                          aria-selected="false"
                          onClick={() => handleTabClick("ex1-tabs-2")}
                        >
                          <div className="lead-services text-center">
                            <p className="swiper-text">Tab 2</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="ex1-tab-3"
                          data-bs-toggle="tab"
                          href="#ex1-tabs-3"
                          role="tab"
                          aria-controls="ex1-tabs-3"
                          aria-selected="false"
                          onClick={() => handleTabClick("ex1-tabs-3")}
                        >
                          <div className="lead-services text-center">
                            <p className="swiper-text">Tab 3</p>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="ex1-tab-4"
                          data-bs-toggle="tab"
                          href="#ex1-tabs-4"
                          role="tab"
                          aria-controls="ex1-tabs-4"
                          aria-selected="false"
                          onClick={() => handleTabClick("ex1-tabs-4")}
                        >
                          <div className="lead-services text-center">
                            <p className="swiper-text">Tab 4</p>
                          </div>
                        </a>
                      </li>
                </ul>
                <button className="explore-btn active">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeTabs;