import "../Styles/modal.css";

function ModalForm() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h4 className="modal-title" id="exampleModalLabel">
                  Signup
                </h4>
                <p className="modal-subtitle">for a free Er-fusion account</p>
              </div>
              <button type="button" className="close" data-bs-dismiss="modal">
                +
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>YOUR FULL NAME <span>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What’s Your Name?"
                    required
                  />
                  <label>OFFICIAL EMAIL <span>*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="What’s Your email address?"
                    required
                  />
                  <label>YOUR PHONE NUMBER <span>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+(00) 000 000 0000"
                    required
                  />
                  <label>YOUR COMPANY NAME <span>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="where are you coming from?"
                    required
                  />
                </div>
                <button className="modal-submit" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalForm;
