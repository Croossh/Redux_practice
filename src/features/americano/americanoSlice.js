import { createSlice } from "@reduxjs/toolkit";

const initialState = 20;

const americanoSlice = createSlice({
  name: "americano",
  initialState,
  reducers: {
    orderAmericano(state) {
      return state > 0
        ? (state -= 1)
        : (alert("준비한 아메리카노가 모두 소진되었습니다"), (state = 0));
    },
    americanoAddStock(state, action) {
      return (state += action.payload);
    },
  },
});

export const { orderAmericano, americanoAddStock } = americanoSlice.actions;

export default americanoSlice.reducer;
