import { orderWaffle } from "./waffleSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";

const Waffle = () => {
  const waffleStock = useSelector((state) => state.waffleReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <ProductContainer>
        <div>
          <Image
            src={process.env.PUBLIC_URL + "/image/waffle.jpg"}
            alt="coffee"
          />
        </div>
        <DetailBox>
          <h1>μνπ§</h1>
          <p>
            <span>λ¨μ μν μ:</span>
            <span>{waffleStock}</span>
          </p>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(orderWaffle());
            }}
          >
            μ£Όλ¬ΈνκΈ°
          </Button>
        </DetailBox>
      </ProductContainer>
      <Button variant="outlined" onClick={() => navigate("/")}>
        νμΌλ‘ λμκ°κΈ°
      </Button>
    </Container>
  );
};

export default Waffle;

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
