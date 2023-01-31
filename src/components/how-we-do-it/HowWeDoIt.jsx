import React from "react";

const HowWeDoIt = () => {
  const currentState = useSelector((state) => {
    state.routerChangeReducer;
  });
  console.log("currentState", currentState);
  return <div>How We Do It</div>;
};

export default HowWeDoIt;
