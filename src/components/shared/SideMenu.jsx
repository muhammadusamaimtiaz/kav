import React from "react";
import { CloseButton } from "react-bootstrap";

function SideMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <section className="all_filter_section">
        <div className={isOpen ? "active" : "hide"}>
          {/* <div className="div_flex"> */}
          {/* <h2></h2> */}
          <span onClick={() => setIsOpen(false)}>
            <CloseButton />
          </span>
          {/* </div> */}

          <div className="contents-main">
            <div className="contents-sub">
              <div className="contents-sub-1">
                <a>What We Do</a>
                <a>How We Do It</a>
                <a>Where It Works</a>
                <a>Partners</a>
                <a>About Us</a>
                <a>Our Team</a>
                <a>News Room</a>
                <a>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SideMenu;
