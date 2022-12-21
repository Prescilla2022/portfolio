import React from "react";
import Link from "../images/Link.png";
import Mail from "../images/mail.png";
import Call from "../images/call.png";
import Background from "../images/background.jpg";
import { useState } from "react";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const date = new Date();

  //Function to handle when contact form is submitted
  function handleclick() {
    localStorage.setItem(
      `${date.getTime}`,
      `Name:${fullname}
      Email:${email} 
      Message:${message}`
    );
    alert("Thanks for contacting!!!");
  }

  //functions to handle the change in input fields
  function handlename(event) {
    setFullname(event.target.value);
    console.log(fullname);
  }

  function handleemail(event) {
    setEmail(event.target.value);
    console.log(email);
  }
  function handlemessage(event) {
    setMessage(event.target.value);
    console.log(message);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="projects">
        <div className="header--project">
          <h3>CONTACT</h3>
          <p className="underline"></p>
          <p>Feel free to contact me through email or linkedIn</p>
        </div>

        <div className="contact">
          <form className="form">
            <input
              type="text"
              onChange={handlename}
              name="fullname"
              placeholder="Name"
            ></input>
            <input
              type="email"
              name="email"
              onChange={handleemail}
              placeholder="Email"
            ></input>
            <textarea onChange={handlemessage} placeholder="Message"></textarea>
            <button
              type="submit"
              className="contact-button"
              onClick={handleclick}
            >
              CONTACT
            </button>
          </form>
          <div
            style={{
              padding: `40px`,
            }}
          >
            <div className="social">
              <p className="imageStyle">
                <img src={Mail}></img>
              </p>
              <div className="content">
                <p>E-mail</p>
                <p>prescilla.kodehode@gmail.com</p>
              </div>
            </div>
            <div className="social">
              <p className="imageStyle">
                <img src={Link}></img>
              </p>
              <div className="content">
                <p>LinkedIn</p>
                <a href="https://www.linkedin.com/in/prescillaanuop">
                  www.linkedin.com/in/prescillaanuop
                </a>
              </div>
            </div>
            <div className="social">
              <p className="imageStyle">
                <img src={Call}></img>
              </p>
              <div className="content">
                <p>Call</p>
                <p>+47 99999999</p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
