import React from "react";
import "../Styles/HomePage/footer.css";

function Footer() {
  return (
    <div className="footer position-relative">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-2 offset-lg-2 col-md-3 col-sm-6 col-6 mb-3">
            <div className="footer-section">
              <h5 className="subtitles mb-4">Who we are</h5>
              <ul>
                <li>
                  <a href="#!" className="grey-text">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    What we do
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6 mb-3">
            <div className="footer-section">
              <h5 className="subtitles mb-4">Experties</h5>
              <ul>
                <li>
                  <a href="/logodesign" className="grey-text">
                    Logo Design
                  </a>
                </li>
                <li>
                  <a href="/digitalmarketing" className="grey-text">
                    Marketing Design
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Video Animation
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Real time Visualization
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Search Engine Optimization
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Lead Generation
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    PPC Campaigns
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    GDN Advertising
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Amazon Marketing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6 mb-3">
            <div className="footer-section">
              <h5 className="subtitles mb-4">Business Solution</h5>
              <ul>
                <li>
                  <a href="/businesssolution" className="grey-text">
                    White Labeling
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Resource Outsourcing
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Agency Branding
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Agency Startup
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Ecommerce Private Label
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    CRM/Sales force
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6 mb-3">
            <div className="footer-section">
              <h5 className="subtitles mb-4">Corprate</h5>
              <ul>
                <li>
                  <a href="#!" className="grey-text">
                    Company Profile
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Company Profile
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Company Profile
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Company Profile
                  </a>
                </li>
                <li>
                  <a href="#!" className="grey-text">
                    Company Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-center">
          <div className="col-lg-2 col-md-3 col-sm-4 col-5 offset-lg-1">
            <img src="/Images/HomePage/Navbar/logo.png" className="img-fluid" />
          </div>
          <div className="col-lg-7 col-md-9 col-sm-8 col-sm-4 col-9">
            <div className="bottom-footer">
              <a>
                <img src="/Images/FooterIcons/fb.png" />
              </a>
              <a>
                <img src="/Images/FooterIcons/insta.png" />
              </a>
              <a>
                <img src="/Images/FooterIcons/Linkedin.png" />
              </a>
              <a>
                <img src="/Images/FooterIcons/twitter.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
