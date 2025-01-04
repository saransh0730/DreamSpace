import React from "react";
import "../styles/Footer.css";
import { FiFacebook } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";


function Footer() {
  return (
    <div className="footer-container">
    <hr/>
      <div className="footer-segments">
        <div className="company-tagline">
          <div>
            <h2>DreamSpace</h2>
          </div>
          <div>
            <p>Transforming spaces into extraordinary places since 2010.</p>
          </div>
        </div>
        <div className="quick-links">
          <div className="quick-links-heading">
            <h2>Quick Links</h2>
          </div>
          <div className="quick-links-items">
            <p>Home</p>
              <p>About</p>
              <p>Contact Us</p>
              <p>Our Work</p>

          </div>
        </div>
        <div className="services-container">
        <div className="services-container-heading">
        <h2>Services</h2>
        </div>
        <div className="services-container-items">

              <p>Interior Design</p>
              <p>Space Planning</p>
              <p>Residential Design</p>
              <p>Furniture Selection</p>

          </div>
        </div>
        <div className="connect-links">
        <div className="connect-links-heading">
            <h2>Connect</h2>
        </div>
        <div className="connect-links-socials">
        <div>
        <FiFacebook size={20}/>
        </div>
        <div>
        <TbBrandTwitter size={20}/>
        </div>
        <div>
        <SiInstagram size={20}/>
        </div>
        <div>
        <SlSocialLinkedin size={20}/>
        </div>
        </div>
        </div>
      </div>
      <hr/>
      <div className="rights-statement">
        <p>© 2024 DreamSpace. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
