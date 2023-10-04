import React from "react";
import "../Styles/HomePage/businessprocess.css";

function Businessprocess() {
  return (
    <div className="business-process position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div className="section-heading">
              <h2 className="heading text-center mb-3">
                BUSINESS PROCESS OUTSOURCING
              </h2>
              <p className="subtitle text-center">
                Identify, Improve, Optimize
              </p>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="processCard text-center">
              <p className="mb-5">
                At The Purple Tech our team of experts utilizes a mix of highly
                skilled resources, lean process and bespoke strategy to offer a
                one-stop Business Process Outsourcing (BPO) solution.
              </p>
              <a className="explore-btn active">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Businessprocess;
