import { useSelector, useDispatch } from "react-redux";
import { orderCake } from "./cakeSlice";
import { useNavigate } from "react-router-dom";

const Cake = () => {
  const cakeStock = useSelector((state) => state.cakeReducer);
  // useSelector통해서 store에있는 state 가져오는것.
  // useDispatch 받아오기...
  const dispatch = useDispatch();
  // 버튼을 눌렀을때 dispatch에다가 action을 전달해줘야함.
  // 액션들도 임포트 해와야함. (슬라이스에서)
  const navigate = useNavigate();

  return (
    <div>
      <h1>남은 케이크 수: {cakeStock}</h1>
      <button
        onClick={() => {
          dispatch(orderCake());
        }}
      >
        주문하기
      </button>
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
};

export default Cake;
