import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { waffleAddStock } from "../../features/waffle/waffleSlice";
import { cakeAddStock } from "../../features/cake/cakeSlice";
import { americanoAddStock } from "../../features/americano/americanoSlice";

import styled from "styled-components";
import { Button } from "@mui/material";
import { Container } from "../Home/Home";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [waffleValue, setWaffleValue] = useState("");
  const [cakeValue, setCakeValue] = useState("");
  const [americanoValue, setAmericanoValue] = useState("");

  const handleValue = (e) => {
    const name = e.target.name;
    switch (name) {
      case "Waffle": {
        return setWaffleValue(parseInt(e.target.value));
      }
      case "Cake": {
        return setCakeValue(parseInt(e.target.value));
      }
      case "Americano": {
        return setAmericanoValue(parseInt(e.target.value));
      }
      default: {
        return;
      }
    }
  };

  return (
    <Container>
      <h1>재고 추가하기</h1>
      <GridContainer>
        <div>
          <h1>와플</h1>
          <Input
            type="number"
            name="Waffle"
            placeholder="수량을 입력해주세요."
            value={waffleValue}
            onChange={(e) => handleValue(e)}
          />
          <Button
            variant="contained"
            onClick={() => {
              dispatch(waffleAddStock(waffleValue));
              alert(`${waffleValue}개가 추가 되었습니다.`);
              setWaffleValue("");
            }}
          >
            채우기
          </Button>
        </div>
        <div>
          <h1>케이크</h1>
          <Input
            type="number"
            name="Cake"
            placeholder="수량을 입력해주세요."
            value={cakeValue}
            onChange={(e) => handleValue(e)}
          />
          <Button
            variant="contained"
            onClick={() => {
              dispatch(cakeAddStock(cakeValue));
              alert(`${cakeValue}개가 추가 되었습니다.`);
              setCakeValue("");
            }}
          >
            채우기
          </Button>
        </div>
        <div>
          <h1>아메리카노</h1>
          <Input
            type="number"
            name="Americano"
            placeholder="수량을 입력해주세요."
            value={americanoValue}
            onChange={(e) => handleValue(e)}
          />
          <Button
            variant="contained"
            onClick={() => {
              dispatch(americanoAddStock(americanoValue));
              alert(`${americanoValue}개가 추가 되었습니다.`);
              setAmericanoValue("");
            }}
          >
            채우기
          </Button>
        </div>
      </GridContainer>
      <p>
        <Button variant="outlined" onClick={() => navigate("/")}>
          홈으로 돌아가기
        </Button>
      </p>
    </Container>
  );
};

export default Admin;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 400px;
  grid-column-gap: 10px;
  place-items: center;
`;

const Input = styled.input`
  height: 32px;
  border-radius: 5px;
  margin-right: 5px;
`;
