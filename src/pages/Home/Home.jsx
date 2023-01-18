import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const store = useSelector((state) => state);
  // const [value, setValue] = useState("");

  // const handleValue = (e) => {
  //   setValue(Number(e.target.value).toFixed(2));
  // };

  return (
    <Container>
      <h1>주문할 메뉴를 선택해 주세요</h1>
      {/* <input value={value} onChange={handleValue} /> */}
      <MenuContainer>
        <Link
          to="/order/waffle"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          <Paper elevation={6} sx={{ height: 400 }}>
            <Image
              src={process.env.PUBLIC_URL + "/image/waffle.jpg"}
              alt="waffle"
            />
            <h1>와플🧇</h1>
            <p>남은 개수: {store.waffleReducer}</p>
            주문하러가기
          </Paper>
        </Link>
        <Link
          to="/order/cake"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          <Paper elevation={6} sx={{ height: 400 }}>
            <Image
              src={process.env.PUBLIC_URL + "/image/cake.jpg"}
              alt="cake"
            />
            <h1>케이크🍰</h1>
            <p>남은 개수: {store.cakeReducer}</p>
            주문하러가기
          </Paper>
        </Link>
        <Link
          to="/order/americano"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          <Paper elevation={6} sx={{ height: 400 }}>
            <Image
              src={process.env.PUBLIC_URL + "/image/coffee.jpg"}
              alt="coffee"
            />
            <h1>아메리카노☕</h1>
            <p>남은 개수: {store.americanoReducer}</p>
            주문하러가기
          </Paper>
        </Link>
        <Link
          to="/order/setmenu"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          <Paper elevation={6} sx={{ height: 400 }}>
            <Image
              src={process.env.PUBLIC_URL + "/image/combo.jpg"}
              alt="combo"
            />
            <h1>세트메뉴🍽️</h1>
            <p>주문하러가기</p>
          </Paper>
        </Link>
      </MenuContainer>
      <div>
        <h1>
          <Link
            to="/admin"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            <Button variant="outlined">발주</Button>
          </Link>
        </h1>
      </div>
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 400px 400px;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  place-content: center;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  margin: 20px auto 0 auto;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;
`;
