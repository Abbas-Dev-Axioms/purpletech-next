"use client";
import "../../Styles/WholeSaleBanner/wholeSaleBanner.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

function WholeSaleBanner() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 38,
              density: {
                enable: true,
                value_area: 1341.5509907748635,
              },
            },
            color: {
              value: ["#9471CE", "#CACFE4"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 27.620167457129543,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "right",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="wholeSaleBanner position-relative">
        <div className="container">
          <div className="row py-lg-5 py-2">
            <div className="col-xxl-4 offset-xxl-1 col-lg-6">
              <div className="section-heading mb-3">
                <h2 className="main-heading-underline">
                  <span>
                    Our Amazon FBA Automation Modelis Al Centric, Requires No Ad
                    Budget, and Profitable by the 1st Month of Launch.
                  </span>
                </h2>
                <p className="grey-text">
                  Our unique approach propriety research and fulfillment
                  strategies towards the FBA Automation Model has scaled 300+
                  Amazon Clients, Curious?
                </p>
              </div>
              <div className="text-center">
                <button className="consult-btn">
                  SCHEDULE A FREE CONSULTATION
                </button>
                <img
                  src="/Images/AmazonWholeSale/Banner/amazonLogo.png"
                  className="img-fluid d-block m-auto"
                />
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1 d-flex align-items-center">
              <img
                src="/Images/AmazonWholeSale/Banner/bannerImage.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WholeSaleBanner;
