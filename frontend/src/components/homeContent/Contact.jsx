import React, { useState } from "react";
import axios from "axios";
import baseURL from "../BaseUrl";

function Contact() {
  const [contactUsername, setContactUsername] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  function handleUser(event) {
    setContactUsername(event.target.value);
  }
  function handleEmail(event) {
    setContactEmail(event.target.value);
  }
  function handleMessage(event) {
    setContactMessage(event.target.value);
  }

  function handleContact() {
    axios
      .post(baseURL + "/contactServer", {
        name: contactUsername,
        email: contactEmail,
        message: contactMessage,
      })
      .then(function (response) {
        if (response.data === true) {
          alert("Successfully send");
          window.location.replace(baseURL);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div id="contactLink" className="about">
        <h2>Contact Us</h2>
      </div>
      <form onSubmit={handleContact} className="contact-form">
        <div className="row justify-content-center">
          <div className="col col-12 col-md-4">
            <div className="row">
              <label>Your Name</label>
              <input
                onChange={handleUser}
                className="form-control"
                type="text"
                name=""
                value={contactUsername}
                required
              ></input>
            </div>
            <div className="row">
              <label>Your email</label>
              <input
                onChange={handleEmail}
                className="form-control"
                type="email"
                name=""
                value={contactEmail}
                required
              ></input>
            </div>
          </div>
          <div className="col col-12 col-md-4">
            <label>Message</label>
            <textarea
              onChange={handleMessage}
              className="form-control"
              name="message"
              rows="8"
              cols="50"
              value={contactMessage}
              required
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleContact}
          className="btn btn-primary contact-form-button"
          type="button"
          name="button"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
