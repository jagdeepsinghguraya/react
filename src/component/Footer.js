import React from "react";
import logo1 from "./pic/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="fImg img">
            <img src={logo1} alt="" />
          </div>
          <p>©Jagdeep Singh.<br /> All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
