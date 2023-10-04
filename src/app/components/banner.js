"use client"
import React, { useCallback } from "react";
import "../Styles/HomePage/banner.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function Banner() {
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
    <div className="section1-Container">
      <div className="home-banner">
        <div className="container">
          <div className="row justify-content-center flex-column align-items-center">
            <div className="col-lg-10">
              <h1 className="main-heading mb-5">
                <span>Elevating</span> Your <span>Digital</span> Presence
              </h1>
            </div>
            <div className="col-lg-8 mb-5">
              <p className="text-center subTitles">
                Experience exceptional design and innovation with our top-tier
                digital services. From stunning graphics to seamless websites,
                dynamic applications, and thriving e-commerce solutions – we
                bring your vision to life.
              </p>
            </div>
            <div className="col-4 d-flex mt-5">
              <div className="socials">
                <p>GET IN TOUCH !</p>
                <div className="d-flex gap-2">
                  <a>
                    <img src="/Images/HomePage/Banner/Facebook-Icon 1.png" />
                  </a>
                  <a>
                    <img src="/Images/HomePage/Banner/Instagram-Icon 1.png" />
                  </a>
                  <a>
                    <img src="/Images/HomePage/Banner/Linked-in-icon 1.png" />
                  </a>
                  <a>
                    <img src="/Images/HomePage/Banner/Location-Icon 1.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center banner-mouse">
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
    </>
  );
}

export default Banner;
