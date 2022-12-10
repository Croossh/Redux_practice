import { orderWaffle } from "./waffleSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Waffle = () => {
  const WaffleStock = useSelector((state) => state.waffleReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>남은 와플 수: {WaffleStock}</h1>
      <button
        onClick={() => {
          dispatch(orderWaffle());
        }}
      >
        주문하기
      </button>
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
};

export default Waffle;
