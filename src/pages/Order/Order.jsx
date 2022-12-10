import { useParams } from "react-router-dom";
import Americano from "../../features/americano/Americano";
import Waffle from "../../features/waffle/Waffle";
import Cake from "../../features/cake/Cake";
import SetButton from "../../features/setbutton/SetButton";

const Order = () => {
  const { menu } = useParams();

  const handleRouter = () => {
    switch (menu) {
      case "americano": {
        return <Americano />;
      }
      case "waffle": {
        return <Waffle />;
      }
      case "cake": {
        return <Cake />;
      }
      case "setmenu": {
        return <SetButton />;
      }
      default: {
        return <div>잘못된 접근입니다.</div>;
      }
    }
  };

  return <div>{handleRouter()}</div>;
};

export default Order;
