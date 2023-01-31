import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Carousel2() {
  const carouselState = useSelector((state) => state.routeChangeReducer);

  console.log("currentState123", carouselState);

  const navigate = useNavigate();

  return (
    <div style={{ position: "fixed", top: "0px" }}>
      <Carousel
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        selectedItem={carouselState.activeKey}
        showArrows={false}
      >
        <div>
          <video className="img-fluid1" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
              type="video/mp4"
            />
          </video>
          <div
            key="content-1"
            className="my-slide primary carousel-content"
            onClick={() => {
              navigate("/what-we-do");
            }}
          >
            <h1>Go to What We Do</h1>
          </div>
        </div>
        <div>
          <video className="img-fluid1" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
              type="video/mp4"
            />
          </video>

          <div
            key="content-1"
            className="my-slide primary carousel-content"
            onClick={() => {
              navigate("/how-we-do-it");
            }}
          >
            <h1>Go to How We Do It</h1>
          </div>
        </div>
        <div>
          <video className="img-fluid1" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
              type="video/mp4"
            />
          </video>

          <div
            key="content-1"
            className="my-slide primary carousel-content"
            onClick={() => {
              navigate("/where-it-works");
            }}
          >
            <h1>Go to Where It Works</h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel2;
