import React from "react";
import { CloseButton } from "react-bootstrap";

function SideMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <section className="all_filter_section">
        <div className={isOpen ? "active" : "hide"}>
          <div className="div_flex">
            <h2></h2>
            <span onClick={() => setIsOpen(false)}>
              <CloseButton />
            </span>
          </div>

          <div className="contents-main">
            <div className="contents-sub">
              <h1>What We Do</h1>
              <h1>How We Do It</h1>
              <h1>Where It Works</h1>
              <h2>Partners</h2>
              <h2>About Us</h2>
              <h2>Our Team</h2>
              <h2>News Room</h2>
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SideMenu;
