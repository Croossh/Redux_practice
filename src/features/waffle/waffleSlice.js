import { createSlice } from "@reduxjs/toolkit";

const initialState = 15;

const waffleSlice = createSlice({
  name: "waffle",
  initialState,
  reducers: {
    orderWaffle(state) {
      return state > 0
        ? (state -= 1)
        : (alert("준비한 와플이 모두 소진되었습니다"), (state = 0));
    },
    waffleAddStock(state, action) {
      return (state += action.payload);
    },
  },
});

export const { orderWaffle, waffleAddStock } = waffleSlice.actions;

export default waffleSlice.reducer;
