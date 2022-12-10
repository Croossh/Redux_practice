import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const store = useSelector((state) => state);
  /*
  americanoReducer
  cakeReducer
  waffleReducer
  */
  return (
    <div>
      <h1>🏡 HomePage 입니다. 🏡</h1>
      <div>
        <h1>와플🧇</h1>
        <p>남은 개수: {store.waffleReducer}</p>
        <Link
          to="/order/waffle"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          주문하러가기
        </Link>
      </div>
      <div>
        <h1>케이크🍰</h1>
        <p>남은 개수: {store.cakeReducer}</p>
        <Link
          to="/order/cake"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          주문하러가기
        </Link>
      </div>
      <div>
        <h1>아메리카노☕</h1>
        <p>남은 개수: {store.americanoReducer}</p>
        <Link
          to="/order/americano"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          주문하러가기
        </Link>
      </div>
      <div>
        <h1>세트메뉴🍽️</h1>
        <Link
          to="/order/setmenu"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          주문하러가기
        </Link>
      </div>
      {/* <Waffle />
      <Cake />
      <Americano />
      <SetButton /> */}
    </div>
  );
};

export default Home;
