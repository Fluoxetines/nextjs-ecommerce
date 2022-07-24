import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Ecommerce Headphones</p>
      <p className="icons">
        <BsInstagram />
        <BsFacebook />
      </p>
    </div>
  );
};

export default Footer;
