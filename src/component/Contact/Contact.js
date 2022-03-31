import React, { useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>WANNA MEET ? LET'S CATCH UP ON WORK</h4>
            <h2>Contact</h2>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt='' />
                  </div>
                <div className="details heading">
                  <h2>Jagdeep Singh</h2>
                  <h4>Web Developer</h4>
                  <p>Connect with me for freelance work.</p>
                  <br />

                  <a href="tel:+91-9009993455">
                    <p className="btn_shadow">
                      <i className="mr-5 fa fa-mobile"></i> +91 900 999 34 55</p>
                  </a>

                  <a href="mailto:contact@thejagdeepsingh.in">
                    <p className="btn_shadow mb-20">
                      <i className="mr-5 fa fa-envelope"></i>
                      contact@theJagdeepSingh.in
                    </p>
                  </a>

                  <span>LET'S EXPLORE TOGETHER</span>
                  <div className="button f_flex">
                    <a
                      href="https://github.com/jagdeepsinghguraya"
                      className="btn_shadow"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jagdeepsinghguraya/"
                      className="btn_shadow"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="btn_shadow">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="mailto:contact@thejagdeepsingh.in"
                      className="btn_shadow"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form method="POST" action="https://formspree.io/f/xeqngzob">
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button type="submit" className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
