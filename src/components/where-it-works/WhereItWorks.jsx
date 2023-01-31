import React from "react";

const WhereItWorks = () => {
  const currentState = useSelector((state) => {
    state.routerChangeReducer;
  });
  console.log("currentState", currentState);
  return <div>Where It Works</div>;
};

export default WhereItWorks;
