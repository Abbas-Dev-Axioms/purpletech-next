"use client";
import "../../Styles/GetAQuote/quoteForm.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function QuoteForm() {
  const [formData, setFormData] = useState({
    projectName: "",
    customerType: "",
    projectCategories: [],
    projectTimeline: "",
    budget: "",
    fullName: "",
    email: "",
    mobileNumber: "",
    contactMethod: [],
    projectDescription: "",
    files: [],
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(formData);

    // You can access the form data in the 'formData' state
    // and perform actions such as sending it to a server or displaying it
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        }));
      }
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="quoteContainer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="quoteHeading mb-5">
              <div className="section-heading">
                <h2 className="heading">
                  <span>Get a Quote</span>
                </h2>
              </div>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="form-container mb-5">
                <div className="Page-Heading mb-5">Project Details</div>
                <div className="text-fields mb-4">
                  <label>
                    Project Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="projectName"
                    placeholder="Enter Name of the Projects"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-fields mb-4">
                  <label>
                    Are you a new or existing customer?<span>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    onChange={handleInputChange}
                    name="customerType"
                  >
                    <option hidden>
                      --Are you a new or existing customer?--
                    </option>
                    <option value="New Cutomer">I am a new Customer</option>
                    <option value="Existing Customer">
                      I am a existing customer
                    </option>
                  </select>
                </div>
                <div className="text-fields mb-4">
                  <label>Project Category</label>
                  <div className="d-flex flex-wrap check-boxes gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Website Design"
                        id="flexCheckDesign"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDesign"
                      >
                        Website Design
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Website Development"
                        id="flexCheckDevelopment"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDevelopment"
                      >
                        Website Development
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="iOS App Development"
                        id="flexCheckIOS"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckIOS"
                      >
                        iOS App Development
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Android App Development"
                        id="flexCheckAndroid"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckAndroid"
                      >
                        Android App Development
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Hybrid Mobile App"
                        id="flexCheckHybrid"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckHybrid"
                      >
                        Hybrid Mobile App
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Digital Marketing"
                        id="flexCheckDigitalMarketing"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDigitalMarketing"
                      >
                        Digital Marketing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Social Media Marketing"
                        id="flexCheckSocialMediaMarketing"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckSocialMediaMarketing"
                      >
                        Social Media Marketing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="seo"
                        id="flexCheckSEO"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckSEO"
                      >
                        Search Engine Optimization (SEO)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="pos System"
                        id="flexCheckPOS"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckPOS"
                      >
                        POS System
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Software Development"
                        id="flexCheckSoftware"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckSoftware"
                      >
                        Software Development
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Ecommerce Website"
                        id="flexCheckEcommerce"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckEcommerce"
                      >
                        Ecommerce Website
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Crm Development"
                        id="flexCheckCRM"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckCRM"
                      >
                        CRM Development
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Consultation"
                        id="flexCheckConsultation"
                        onChange={handleInputChange}
                        name="projectCategories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckConsultation"
                      >
                        Consultation
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-fields mb-4">
                  <label>
                    Project Timeline<span>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    onChange={handleInputChange}
                    name="projectTimeline"
                  >
                    <option hidden>Select Timeline</option>
                    <option value="Less Than 1 Week">Less Than 1 Week</option>
                    <option value="1 Month">1 Month</option>
                    <option value="1-3 Month">1-3 Month</option>
                    <option value="3-6 Month">3-6 Month</option>
                    <option value="More than 6 Months">
                      More than 6 Months
                    </option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
                <div className="text-fields mb-4">
                  <label>
                    Select your budget<span>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    name="budget"
                    onChange={handleInputChange}
                  >
                    <option hidden>Select Budget in USD</option>
                    <option value="500-1000$">500-1000$</option>
                    <option value="1000-2000$">1000-2000$</option>
                    <option value="2000$-5000$">2000$-5000$</option>
                    <option value="5000$-10000$">5000$-10000$</option>
                    <option value="10000$-20000$">10000$-20000$</option>
                    <option value="20000$-50000$">20000$-50000$</option>
                    <option value="50000$-100000$">50000$-100000$</option>
                    <option value="10000+$">10000+$</option>
                  </select>
                </div>
              </div>
              <div className="form-container mb-5">
                <div className="Page-Heading mb-5">Contact Information</div>
                <div className="text-fields mb-4">
                  <label>
                    Full Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleInputChange}
                    required
                    placeholder="Customer Name"
                  />
                </div>
                <div className="text-fields mb-4">
                  <label>
                    Email Adress<span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    required
                    placeholder="Customer Name"
                  />
                </div>
                <div className="text-fields mb-4">
                  <label>
                    Mobile Number<span>*</span>
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="+00 000 000 0000"
                    name="mobileNumber"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-fields mb-4">
                  <label>Preferred contact method</label>
                  <div className="d-flex flex-wrap check-boxes gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Phone Number"
                        id="flexCheckPhone"
                        name="contactMethod"
                        onChange={handleInputChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckPhone"
                      >
                        Phone
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Email"
                        id="flexCheckEmail"
                        name="contactMethod"
                        onChange={handleInputChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDevelopment"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-container mb-5">
                <div className="Page-Heading mb-5">Project Description</div>
                <div className="text-fields mb-4">
                  <label>Enter your project Description</label>
                  <textarea
                    className="d-block"
                    placeholder="Project Description"
                    name="projectDescription"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-fields mb-4">
                  <label>Additional project files (optional)</label>
                  <input
                    type="file"
                    className="py-3 mb-2"
                    id="myfile"
                    name="files"
                    onChange={handleInputChange}
                    multiple="multiple"
                  />
                  <p className="text-danger fw-bold">
                    You may attach up to 5 files under 100MB each
                  </p>
                </div>
              <ReCAPTCHA
                sitekey="6LdfbqgoAAAAAI3MK9ov3_SY_G992ai4EfyL_6yD"
                onChange={onChange}
                className="margin-auto"
              />
              </div>
              <button className="explore-btn active" type="submit">
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
