import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderAmericano } from "../americano/americanoSlice";
import { orderCake } from "../cake/cakeSlice";
import { orderWaffle } from "../waffle/waffleSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

// import "./SetButton.module.css";
/*
질문!
1. 버튼을 눌렀을 때, 모든 state 를 바꾸려면 어케하누?
2. 지금은 dispatch를 통해 모든 action을 보내주는 방법으로 구현하긴함
3. 근데? 이게 1억개있으면 일일히 이렇게 해야하는가? action.all 이런건 없을까유?
*/

const SetButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const [btnShow, setBtnShow] = useState(true);
  const minStock = Math.min(...Object.values(store));

  useEffect(() => {
    if (minStock === 0) {
      setBtnShow(false);
    }
  }, [minStock]);

  return (
    <Container>
      <h1>세트 주문 가능 수량: {minStock}</h1>
      <ButtonContainer>
        {btnShow === true ? (
          <Button
            variant="contained"
            onClick={() => {
              dispatch(orderAmericano());
              dispatch(orderCake());
              dispatch(orderWaffle());
            }}
          >
            세트메뉴 주문하기
          </Button>
        ) : (
          <p>재고 소진으로 단품 주문만 가능합니다.</p>
        )}
        <Button
          variant="outlined"
          onClick={() => {
            navigate(-1);
          }}
        >
          홈으로 돌아가기
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default SetButton;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button + button {
    margin-top: 20px;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
