import "../../Styles/ContactBanner/ContactMeeting.css";
function ContectMeeting() {
  return (
    <div className="contactMeeting">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center mb-5">
            <div>
              <div className="section-heading mb-5">
                <h2 className="heading mb-4">
                  <span>Lorem Ipsum</span>
                </h2>
                <p className="content grey-text">
                  Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                  fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi
                  ac. Pellentesque vel tellus id ipsum metus elit et rhoncus
                  mauris. Et donec etiam consectetur felis sed tristique.
                </p>
              </div>
              <div className="row mb-3 text-center">
                <div className="col-lg-5">
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum
                  </p>
                </div>
                <div className="col-lg-5 offset-lg-2">
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet consectetur. Aenean fames arcu
                    eget fermentum aliquam. Ac tempus feugiat odio adipiscing
                    arcu mi ac. Pellentesque vel tellus id ipsum
                  </p>
                </div>
              </div>
              <button className="explore-btn active d-block">Submit</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="meeting-container text-center">
              <img
                src="/Images/Contactus/meetingImg.png"
                className="img-fluid mb-5"
              />
              <p className="grey-text text-center">
                Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
                Pellentesque vel tellus id ipsum metus elit et rhoncus mauris.
                Et donec etiam consectetur felis sed tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContectMeeting;
