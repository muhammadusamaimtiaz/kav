import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  setRouteChange,
  setTimeRouteChange,
} from "../../redux/reducer/RouteChange";

const FullScreenCarousel = () => {
  const carouselState = useSelector((state) => state.routeChangeReducer);

  const dispatch = useDispatch();

  // setInterval(() => {
  //   if (carouselState.activeKey >= 2) {
  //     dispatch(setTimeRouteChange({ activeKey: 0 }));
  //   } else {
  //     dispatch(setTimeRouteChange({ activeKey: carouselState.activeKey + 1 }));
  //   }
  // }, 10000);

  // console.log("temp", carouselState);

  return (
    <div className="carousel-main">
      {/* <video className="img-fluid" autoPlay loop muted>
        <source
          src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
          type="video/mp4"
        />
      </video> */}

      <Carousel activeIndex={carouselState.activeKey} fade slide>
        <Carousel.Item>
          <video className="img-fluid" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
              type="video/mp4"
            />
          </video>
        </Carousel.Item>

        <Carousel.Item>
          <video className="img-fluid" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
              type="video/mp4"
            />
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <video className="img-fluid" autoPlay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
              type="video/mp4"
            />
          </video>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FullScreenCarousel;
