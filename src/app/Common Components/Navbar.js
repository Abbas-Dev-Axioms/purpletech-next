"use client";

import "../Styles/navbar.css";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <div className="top-navbar"></div>
      <nav id="navbarBelow" className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand" href="./">
            <img src="/Images/HomePage/Navbar/logo.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="/Images/menu-button.png" className="img-fluid" width="40px"/>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About US
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Web Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/amazonwholesale">
                    Amazon Wholesale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/businesssolution">
                    Business Solution
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/digitalmarketing">
                    Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logodesign">
                    Logo Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/shopifydropshiping">
                    Shopify Dropshiping
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tiktokautomation">
                    Tiktok Automation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/youtubeautomation">
                    Youtube Automation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                 <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/amazonwholesale">
                    Amazon Wholesale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/businesssolution">
                    Business Solution
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/digitalmarketing">
                    Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logodesign">
                    Logo Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/shopifydropshiping">
                    Shopify Dropshiping
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tiktokautomation">
                    Tiktok Automation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/youtubeautomation">
                    Youtube Automation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/getaquote">
                    Get A Quote
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contactus">
                    Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Web Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Web Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Insights
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Web Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Web Development
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <a href="#!">
              <img src="/Images/HomePage/Call-icon 3.png" />
            </a>
            <a href="#!">
              <img src="/Images/HomePage/mail-Icon 1.png" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
