import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";

function Carousel2() {
  const carouselState = useSelector((state) => state.routeChangeReducer);

  return (
    <div style={{ position: "fixed", top: "0px" }}>
      <Carousel
        autoPlay={true}
        interval={10000}
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
        </div>
        <div>
          <video className="img-fluid1" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video className="img-fluid1" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel2;
