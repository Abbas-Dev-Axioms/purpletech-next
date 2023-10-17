import "../../Styles/ContactBanner/map.css"

function Map() {
  return (
    <div className="map">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="mapContainer">
              <img src="/Images/Contactus/map.png" className="img-fluid" />
              <div className="map-icon pakistan">
                <div className="location-container">
                    <p>
                    Ready to upgrade your business 
                    </p>
                </div>
                <img src="/Images/Contactus/Pakistan.png"/>
              </div>
              <div className="map-icon china">
              <div className="location-container">
                    <p>
                    Ready to upgrade your business
                    </p>
                </div>
                <img src="/Images/Contactus/China.png"/>
              </div>
              <div className="map-icon uae">
              <div className="location-container">
                    <p>
                    Ready to upgrade your business
                    </p>
                </div>
                <img src="/Images/Contactus/UAE.png"/>
              </div>
              <div className="map-icon usa">
              <div className="location-container">
                    <p>
                    Ready to upgrade your business
                    </p>
                </div>
                <img src="/Images/Contactus/USA.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
