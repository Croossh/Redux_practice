import { useSelector, useDispatch } from "react-redux";
import { orderAmericano } from "./americanoSlice";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Americano = () => {
  const americanoStock = useSelector((state) => state.americanoReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (americanoStock > -1) {
  //     alert("그만 시켜");

  //   }
  // }, [americanoStock]);

  return (
    <div>
      <h1>남은 아메리카노 수: {americanoStock}</h1>
      <button
        onClick={() => {
          dispatch(orderAmericano());
        }}
      >
        주문하기
      </button>
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
};

export default Americano;
