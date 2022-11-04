import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 M-Store All Rights Reserved || Bassem Zaid</p>
      <div className="icons">
        <a
          href="https://www.facebook.com/bassem.b.zaid/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/passim_zaid/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <p>Whatsapp : 01010824299</p>
    </div>
  );
};

export default Footer;
