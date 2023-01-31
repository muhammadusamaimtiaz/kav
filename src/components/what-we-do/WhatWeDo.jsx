import React from "react";

const WhatWeDo = () => {
  const currentState = useSelector((state) => {
    state.routerChangeReducer;
  });
  console.log("currentState", currentState);
  return <div>What We Do</div>;
};

export default WhatWeDo;
