import "../../Styles/wholeSaleBanner/quote.css";

function Quote() {
  return (
    <div className="Quote position-relative bg-white">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-8 offset-lg-2 offset-xxl-2 mb-5">
            <div className="section-heading text-center">
              <p>
                After listening to the unique requirement of modeseness AMZ
                inventor built an amazon store for them with optimized listings
                to help their business generate more sales and revenue.
              </p>
              <div className="buttons-container d-flex justify-content-center gap-3 mt-4">
                <button className="explore-btn active">Get a Quote</button>
                <button className="explore-btn outline">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
