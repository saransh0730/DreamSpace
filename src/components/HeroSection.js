import React, { useEffect, useState } from "react";
import "../styles/HeroSection.css";
import { Typewriter } from "react-simple-typewriter";
import { PiPhoneCall } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function HeroSection() {
  const [showNavbar, setshowNavbar] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageTransition, setImageTransition] = useState(false); 

  const images = [
    "interior2.jpg",
    "interior3.jpg",
    "interior4.jpg",
    "interior1.jpg",
    "interior5.jpg",
  ];

  const handleNext = () => {
    setImageTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setImageTransition(false); 
    }, 500);
  };

  const handlePrev = () => {
    setImageTransition(true); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setImageTransition(false); 
    }, 500); 
  };

  const handleClick = () => {
    setshowNavbar(!showNavbar);
  };

  const phoneNumber = "+1234567890";

  return (
    <div className="parent-container">
      <div className="navbar-container">
        <header>
          <nav className="navbar">
            <h1>DreamSpace</h1>
            <ul className={showNavbar ? "active" : ""}>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Our Work</li>
              {!showNavbar && (
                <button className="consult-button">
                  <PiPhoneCall size={20} /> Book Consultation
                </button>
              )}
            </ul>
            <div className={showNavbar ? "hamburger-active" : "hamburger"}>
              <button onClick={() => (window.location.href = `tel:${phoneNumber}`)}>
                <PiPhoneCall size={20} />
              </button>
              {showNavbar ? (
                <IoClose size={25} onClick={handleClick} />
              ) : (
                <RxHamburgerMenu size={25} onClick={handleClick} />
              )}
            </div>
          </nav>
        </header>
      </div>
      <div className="components">
        <div className="left-component">
          <h1>
            Helping millions to build their dream <br />
            <Typewriter
              words={[
                "workplace.",
                "lifestyle.",
                "place of peace.",
                "masterpiece.",
                "destination.",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p>
            Transform your space into a masterpiece. We design and build
            extraordinary places that inspire, comfort, and delight.
          </p>
          <div className="button-component">
            <button className="view-work-btn">
              View Our Work <IoIosArrowRoundForward size={30} />
            </button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="right-component">
          <div className="slider-container">
            <img
              src={images[currentIndex]}
              className={`slider-image ${imageTransition ? "fade-out" : "fade-in"}`}
              alt="Slider"
            />
            <button className="slider-btn prev" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className="slider-btn next" onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
