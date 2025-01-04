import React from "react";
import "../styles/Contact.css";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1>Get in Touch</h1>
        <p>
          Ready to transform your space? Contact us today for a consultation
        </p>
      </div>
      <div className="input-contact-container">
        <div className="send-message">
          <div className="send-message-heading">
            <h2>Send us a message</h2>
            <p>Fill out the form below and we'll get back to you shortly.</p>
          </div>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input
            type="tel"
            id="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Your message"
            required
          ></textarea>

          <button>Send Message</button>
        </div>
        <div className="contact-information">
    <div className="contact-information-heading">
        <h2>Contact Information</h2>
        <p>Find us at our office or reach out directly.</p>
    </div>
    <div className="address">
        <div className="address-info">
            <div className="location-icon">
                <h2><SlLocationPin size={18} />Visit Us</h2>
            </div>
            <p>123 Design Street</p>
            <p>New York, NY 10001</p>
        </div>
    </div>
    <div className="phone-number">
        <div className="phone-number-details">
            <div className="phone-icon">
                <h2><IoCallOutline size={18}/>Call Us</h2>
            </div>
            <p>(555) 123-4567</p>
        </div>
    </div>
    <div className="email">
        <div className="email-icon">
            <h2><MdOutlineEmail size={18} />Email Us</h2>
        </div>
        <div className="email-details">
            <p>hello@dreamspace.com</p>
        </div>
    </div>
</div>

      </div>
    </div>
  );
}

export default Contact;
