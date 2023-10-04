import React from "react";
import "../Styles/HomePage/newsLetter.css";

function NewsLetter() {
  return (
    <div className="newsletterContainer position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row newsletter align-items-center justify-content-center">
              <div className="col-12 mb-4">
                <div className="section-heading">
                  <h2 className="heading text-center">Stay Connected</h2>
                  <h2 className="heading text-center">Join Our Newsletter</h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-8">
                    <form className="newsLetterForm d-flex">
                        <input type="Email" placeholder="Email" required/>
                        <button type="submit"><img src="/Images/HomePage/Form/Send-Icon 1.png" className="image-fluid" height="30px"/></button>
                    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
