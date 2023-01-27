import { combineReducers } from "redux";
import { RouteChangeSlice } from "./RouteChange";

const reducers = () => {
  combineReducers({
    routeChange: RouteChangeSlice.reducer,
  });
};

export default reducers;
