"use client"

import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "../Styles/DesignAndDevelopment/banner.css";
import particleConfig from "../../particlesjs-config.json";

function FormatWithSpan( text ) {
  const words = text.split(' ');
  const formattedText = words.map((word, index) => (
    <React.Fragment key={index}>
      {index > 0 && ' '} {/* Add a space before the second and subsequent words */}
      {index % 2 === 0 ? <span>{word}</span> : word}
    </React.Fragment>
  ));

  return <>{formattedText}</>;
}

function Banner(props) {
  const formattedText = FormatWithSpan(props.heading);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="section1-logo-Container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig}
      />
      <div className="banner-logo">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-column">
            <div className="col-lg-10 text-center">
              <h1 className="main-heading d-inline mb-5">
                {formattedText}
              </h1>
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <img
                src="/Images/mouse.png"
                width="50px"
                height="50px"
                className="img-fluid mouseImage"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
