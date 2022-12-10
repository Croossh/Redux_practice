import { createSlice } from "@reduxjs/toolkit";

// 초깃값 설정
// const initialState;

const initialState = 10;

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake(state) {
      return state > 0
        ? (state -= 1)
        : (alert("준비한 케이크가 모두 소진되었습니다"), (state = 0));
    },
  },
});

// 얘는 컴포넌트로 들어감
export const { orderCake } = cakeSlice.actions;

// 얘는 store 로 들어감
export default cakeSlice.reducer;

// cakeslice 설정
/*
name:
initialState,
reduers: << 액션을 정의 해야됨
그액션에는 state를 변경하는 로직이 들어가야됨!
- 1 하는 로직!


export let { 액션이름 } = cakeslice.actions

*/
