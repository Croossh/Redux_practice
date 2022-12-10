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
  },
});

export const { orderWaffle } = waffleSlice.actions;

export default waffleSlice.reducer;
