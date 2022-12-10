import { useDispatch } from "react-redux";
import { orderAmericano } from "../americano/americanoSlice";
import { orderCake } from "../cake/cakeSlice";
import { orderWaffle } from "../waffle/waffleSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SetButton.module.css";
/*
질문!
1. 버튼을 눌렀을 때, 모든 state 를 바꾸려면 어케하누?
2. 지금은 dispatch를 통해 모든 action을 보내주는 방법으로 구현하긴함
3. 근데? 이게 1억개있으면 일일히 이렇게 해야하는가? action.all 이런건 없을까유?
*/

const SetButton = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const newStore = new Array(Object.values(store));
  // console.log(newStore);
  // const findMinNumber = () => {
  //   return Math.min(parseInt(...newStore));
  // };

  const findMinNumber = () => {
    return Math.min(
      parseInt(store.cakeReducer),
      parseInt(store.americanoReducer),
      parseInt(store.waffleReducer)
    );
  };

  // const checkStock = () => {
  //   for (let i = 0; i < stockArr.lenght; i++) {
  //     if (i === 0) {
  //       alert("재고가 부족하여 더이상 주문할 수 없습니다.");
  //     }
  //   }
  // };

  return (
    <div>
      <h1>세트 주문 가능 수량: {findMinNumber()}</h1>
      <button
        className={findMinNumber() !== 0 ? `able` : `button disable`}
        onClick={() => {
          dispatch(orderAmericano());
          dispatch(orderCake());
          dispatch(orderWaffle());
        }}
      >
        세트메뉴 주문하기
      </button>
      <p></p>
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
};

export default SetButton;
