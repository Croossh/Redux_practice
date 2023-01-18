import { useSelector, useDispatch } from "react-redux";
import { orderAmericano } from "./americanoSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";

const Americano = () => {
  const americanoStock = useSelector((state) => state.americanoReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <GridContainer>
        <div>
          <Image
            src={process.env.PUBLIC_URL + "/image/coffee.jpg"}
            alt="coffee"
          />
        </div>
        <FlexContainer>
          <h1>아메리카노☕</h1>
          <p>
            <span>남은 아메리카노 수:</span>
            <span>{americanoStock}</span>
          </p>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(orderAmericano());
            }}
          >
            주문하기
          </Button>
        </FlexContainer>
      </GridContainer>
      <Button variant="outlined" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

export default Americano;

const Container = styled.div`
  width: 800px;
  margin: auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 400px;

  place-content: center;
`;

const FlexContainer = styled.div`
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

const Image = styled.img`
  width: auto;
  height: 360px;
  object-fit: cover;
  margin: 20px;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;
`;

// useEffect(() => {
//   if (americanoStock > -1) {
//     alert("그만 시켜");

//   }
// }, [americanoStock]);

//   <h1>남은 아메리카노 수: {americanoStock}</h1>
// <button
//   onClick={() => {
//     dispatch(orderAmericano());
//   }}
// >
//   주문하기
// </button>
// <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
