import { useSelector, useDispatch } from "react-redux";
import { orderCake } from "./cakeSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";

const Cake = () => {
  const cakeStock = useSelector((state) => state.cakeReducer);
  // useSelector통해서 store에있는 state 가져오는것.
  // useDispatch 받아오기...
  const dispatch = useDispatch();
  // 버튼을 눌렀을때 dispatch에다가 action을 전달해줘야함.
  // 액션들도 임포트 해와야함. (슬라이스에서)
  const navigate = useNavigate();

  return (
    <Container>
      <ProductContainer>
        <div>
          <Image
            src={process.env.PUBLIC_URL + "/image/cake.jpg"}
            alt="coffee"
          />
        </div>
        <DetailBox>
          <h1>케이크🍰</h1>
          <p>
            <span>남은 케이크 수:</span>
            <span>{cakeStock}</span>
          </p>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(orderCake());
            }}
          >
            주문하기
          </Button>
        </DetailBox>
      </ProductContainer>
      <Button variant="outlined" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

export default Cake;

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 400px;

  place-content: center;
`;

const Image = styled.img`
  width: auto;
  height: 360px;
  object-fit: cover;
  margin: 20px;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;
`;

const DetailBox = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    align-self: flex-start;
  }
  p {
    flex-basis: 100%;
    align-self: flex-end;

    display: flex;
    align-items: flex-end;
    span + span {
      margin-left: 5px;
    }
  }

  button {
    align-self: flex-end;
  }
`;
