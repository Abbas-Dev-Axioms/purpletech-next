import React from "react";
import "../Styles/HomePage/form.css";
function Form() {
  return (
    <div className="Form">
      <div className="container">
        <form>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-heading mb-5">
                <h2 className="heading mb-4 text-center">
                  Ready to upgrade your business experience?
                </h2>
                <p className="subtitle text-center">Identify, Improve, Optimize</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="main-form">
                <div className="form-group">
                  <input type="text" required placeholder="NAME" />
                </div>
                <div className="form-group">
                  <input type="number" required placeholder="PHONE NUMBER" />
                </div>
                <div className="form-group">
                  <input type="text" required placeholder="EMAIL ADDRESES" />
                </div>
                <div className="textField-container">
                    <textarea placeholder="Project details"/>
                </div>
                <div className="form-group">
                    <input className="submit-btn" type="submit"/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
                <div className="textField-container outside">
                    <textarea placeholder="Project details"/>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
