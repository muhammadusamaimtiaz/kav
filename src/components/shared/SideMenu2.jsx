import React, { useState } from "react";
import "animate.css";

const SideMenu2 = ({ isOpen, setIsOpen }) => {
  const [time, setTime] = useState(false);
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    setIsOpen(false);
  }

  //   const temp = () => {
  //     setTimeout(() => {
  //       setTime(true);
  //     }, 2000);
  //   };
  //   temp();
  return (
    <div>
      <div id="myNav" className="overlay">
        <a
          //   href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        <div className="overlay-content">
          {
            <>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                What We Do
              </a>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                How We Do It
              </a>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                Where It Works
              </a>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                Partners
              </a>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                About Us
              </a>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                Our Team
              </a>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                News Room
              </a>
              <a
                className={`animate__animated ${
                  isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                }`}
              >
                Contact
              </a>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default SideMenu2;
