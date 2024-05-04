import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./BasketSlicer";
const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
export default store;
