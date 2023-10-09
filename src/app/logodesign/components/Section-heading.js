import "../../Styles/DesignAndDevelopment/sectionHeading.css";

function SectionHeading() {
  return (
    <div className="position-relative py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-heading text-center mb-5">
              <h2 className="heading mb-5">
                <span>Logo</span> Design
              </h2>
              <p>
                Describe your logo design service, highlighting your expertise,
                commitment to quality, and the importance of a strong brand
                identity.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-12 mb-2">
            <div class="flip">
              <div
                class="front"
              >
                <h5 class="text-shadow">Restruant</h5>
              </div>
              <div class="back"
              style={{"background-image": "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"}}
              >
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mb-2">
            <div class="flip">
              <div
                class="front"
              >
                <h5 class="text-shadow">MOUNTAIN</h5>
              </div>
              <div class="back"
              style={{"background-image": "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"}}
              >
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mb-2">
            <div class="flip">
              <div
                class="front"
              >
                <h5 class="text-shadow">MOUNTAIN</h5>
              </div>
              <div class="back"
              style={{"background-image": "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"}}
              >
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mb-2">
            <div class="flip">
              <div
                class="front"
              >
                <h5 class="text-shadow">MOUNTAIN</h5>
              </div>
              <div class="back"
              style={{"background-image": "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"}}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
