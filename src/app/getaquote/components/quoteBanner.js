import React from "react";
import Form from "./form";
import "../../Styles/GetAQuote/quoteBanner.css"

function ContactBanner() {
  return (
    <div className="quoteBanner">
      <div className="container">
        <div className="row">
            <div className="col-lg-3 d-flex align-items-end justify-content-center">
                <div className="section-heading text-center">
                    <h2 className="color-purple heading underline">
                        <span>Get a Quote</span>
                    </h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
