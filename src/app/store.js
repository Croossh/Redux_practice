import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import americanoReducer from "../features/americano/americanoSlice";
import waffleReducer from "../features/waffle/waffleSlice";

const store = configureStore({
  reducer: {
    cakeReducer,
    americanoReducer,
    waffleReducer,
  },
});
export default store;
