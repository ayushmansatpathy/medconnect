import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { SocialIcon } from 'react-social-icons'

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <div className="row">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            Guiding you to your future success.
          </p>
        </div>
        <div className="col-md-12 contact-info">
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
      </div>
    </div>
  );
};
