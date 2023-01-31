import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: "",
  to: "",
  activeKey: 0,
  loading: false,
};

export const RouteChangeSlice = createSlice({
  name: "route-change",
  initialState,
  reducers: {
    setRouteChange: (state, action) => {
      state.from = state.to;
      state.to = action.payload.to;
      state.activeKey = action.payload.activeKey;
      state.loading = true;
    },
    setTimeRouteChange: (state, action) => {
      state.activeKey = action.payload.activeKey;
    },
  },
});

export default RouteChangeSlice.reducer;
export const { setRouteChange, setTimeRouteChange } = RouteChangeSlice.actions;
