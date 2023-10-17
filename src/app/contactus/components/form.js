"use client"
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Form() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="form-container">
      <form>
        <h2>
          Get In Touch To <br />
          Discuss Your Idea
        </h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Contact" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message" />
        {/* <div className="mb-3 d-flex justify-content-center"> */}
        <div className="mb-3 d-flex justify-content-center">
        <ReCAPTCHA
          sitekey="6LdfbqgoAAAAAI3MK9ov3_SY_G992ai4EfyL_6yD"
          onChange={onChange}
        />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
