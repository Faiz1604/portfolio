import React from "react";
import insta from "./../assets/images/insta.png";
import linkedin from "./../assets/images/linkedin.png";
import mail from "./../assets/images/mail.png";
import phone from "./../assets/images/phone.png";
import github from "./../assets/images/github.png";
import "./style/Contact.css";
function Contact() {
  return (
    <div className="get-in-touch">
      <div className="info">
        <hr />
        <h1>Get In Touch</h1>
        <div className="contact">
          <span className="app">
            <a href="https://www.linkedin.com/in/faiz-siddique-a180381b8/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Faiz1604">
              <img src={github} alt="github" />
            </a>

            <a href="mailto:faizsheikh4131@gmail.com">
              <img src={mail} alt="email" />
            </a>
            <a href="tel:+919621641856">
              <img src={phone} alt="phone" />
            </a>
            <a href="https://www.instagram.com/_faizsheikh__/">
              <img src={insta} alt="instagram" />
            </a>
          </span>
          <span className="contact-detail">
            <i>
              Nalanda House Knowlegde Park 3 <br />
              Greater Noida Uttar Pradesh
              <br />
              <a href="mailto:faizsheikh4131@gmail.com">
                faizsheikh4131@gmail.com
              </a>
            </i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
