import React from "react";
import Form from "./form";
import "../../Styles/ContactBanner/Form.css"

function ContactBanner() {
  return (
    <div className="contactBanner">
      <div className="container">
        <div className="row">
            <div className="col-lg-3 d-flex align-items-end justify-content-center">
                <div className="section-heading text-center">
                    <h2 className="color-purple heading underline">
                        <span>Contact Us</span>
                    </h2>
                </div>
            </div>
          <div className="col-xxl-4 col-lg-5 offset-lg-4">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
