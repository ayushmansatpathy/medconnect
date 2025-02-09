import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { SocialIcon } from 'react-social-icons'

export const Contact = (props) => {

  return (
    <div id="contact">
      <div className="row">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            Guiding you to your future success.
          </p>
        </div>
        <div className="col-md-6 contact-info">
          <div className="contact-item">
            <p>
              <SocialIcon url="www.instagram.com" bgColor="black" />{"  "}
              &nbsp;&nbsp;{props.data ? props.data.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <SocialIcon url="www.gmail.com" bgColor="black" />{"  "}
              &nbsp;&nbsp;{props.data ? props.data.email : "loading"}
            </p>
          </div>

        </div>
        <div className="col-md-6 text-center">
          <button className="campuspulse" onClick={() => window.location.href = "https://umassamherst.campuslabs.com/engage/organization/medconnect"}><img src="img/campuspulse.png" className="campuspulse" alt="hello"></img></button>
        </div>
      </div>
    </div>
  );
};
