import ModalForm from "@/app/Common Components/ModalForm";
import "../../Styles/YoutubeAutomation/YoutubeBanner.css";

function YoutubeBanner() {
  return (
    <div className="youtubeBanner position-relative bg-white">
      <ModalForm />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="BannerHeading text-center">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Aenean fames arcu eget
                fermentum aliquam. Ac tempus feugiat odio adipiscing arcu mi ac.
                Pellentesque vel tellus id ipsum metus elit et rhoncus mauris.
                Et donec etiam consectetur felis sed tristique.
              </p>
              <button
                type="button"
                className="white-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeBanner;
