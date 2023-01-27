import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reducer/index";
import routeChangeReducer from "../reducer/RouteChange";

const store = configureStore({
  reducer: {
    routeChangeReducer: routeChangeReducer,
  },
  middleware: [thunk],
});

console.log("+++++++++++", store.getState());

export default store;
