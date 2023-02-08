import { styled } from "@mui/material";
import {
  MdDeleteOutline,
  MdOutlineShoppingCart,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <Styled_Cart_Container>
      <div className="container">
        <Styled_Block1>
          <div className="cart">
            <MdOutlineShoppingCart className="shop" /> <h6>Корзина</h6>
          </div>
          <div className="cart-clear">
            <MdDeleteOutline />
            <span>Очистить корзину</span>
          </div>
        </Styled_Block1>
        <Styled_Block2>
          <div className="title">
            <img
              src="https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png"
              alt=""
            />
            <div>
              <h4>Сырный цыпленок</h4>
              <span>тонкое тесто, 26 см.</span>
            </div>
          </div>

          <div className="counter-block">
            <MdRemoveCircleOutline className="counter" />
            <h5> 33</h5>

            <IoIosAddCircleOutline className="counter" />
          </div>
          <h5>330p</h5>
          <CiCircleRemove className="remove" />
        </Styled_Block2>
        <Styled_Block2>
          <div className="title">
            <img
              src="https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png"
              alt=""
            />
            <div>
              <h4>Сырный цыпленок</h4>
              <span>тонкое тесто, 26 см.</span>
            </div>
          </div>

          <div className="counter-block">
            <MdRemoveCircleOutline className="counter" />
            <h5> 33</h5>

            <IoIosAddCircleOutline className="counter" />
          </div>
          <h5>330p</h5>
          <CiCircleRemove className="remove" />
        </Styled_Block2>
        <Styled_Block2>
          <div className="title">
            <img
              src="https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png"
              alt=""
            />
            <div>
              <h4>Сырный цыпленок</h4>
              <span>тонкое тесто, 26 см.</span>
            </div>
          </div>

          <div className="counter-block">
            <MdRemoveCircleOutline className="counter" />
            <h5> 33</h5>

            <IoIosAddCircleOutline className="counter" />
          </div>
          <h5>330p</h5>
          <CiCircleRemove className="remove" />
        </Styled_Block2>
        <Styled_Block2>
          <p>
            Всего пицц: <h5>3шт</h5>
          </p>
          <p>
            Сумма заказов <h5>500p </h5>
          </p>
        </Styled_Block2>
        <div className="block1">
          <Link to="/">
            <Button variant="contained" width="211px" height="55px" disabled>
              Вернуться назад
            </Button>
          </Link>

          <Button variant="contained" width="211px" height="55px">
            Оплатить сейчас
          </Button>
        </div>
      </div>
    </Styled_Cart_Container>
  );
};

export default Cart;

const Styled_Cart_Container = styled("section")(() => ({
  width: "821px",
  height: "100%",
  margin: "0 auto",
  display: "grid",
  alignContent: "center",
  padding: "2rem",

  "& .container": {
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(4, 1fr)",
    gridRowGap: "30px",
  },
  "& .block1": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
  },
}));

const Styled_Block1 = styled("div")(() => ({
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& .cart": {
    display: "flex",
    alignItems: "center",
    "& .shop": {
      fontSize: "29px",
    },
    "& h6": {
      fontSize: "32px",
    },
  },
  "& .cart-clear": {
    display: "flex",
    color: " #B6B6B6",
    cursor: "pointer",
    "& :hover": {
      color: "black",
    },
  },
}));

const Styled_Block2 = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& img": {
    width: "80px",
    marginRight: "15px",
  },
  "& .title": {
    display: "flex",
    alignItems: "center",
    "& h4": {
      fontWeight: "700",
      fontSize: "22px",
    },
    "& span": {
      fontWeight: "400",
      fontSize: "18px",
      color: "#8D8D8D",
    },
  },
  "& .counter": {
    fontSize: "32px",
    color: "#FE5F1E",
    cursor: "pointer",
  },
  "& .counter-block": {
    display: "flex",
    alignItems: "center",
  },
  "& h5": {
    fontSize: "22px",
    margin: "12px",
  },
  "& .remove": {
    fontSize: "32px",
    color: "#D7D7D7",
    cursor: "pointer",

    "& :hover": {
      color: "black",
    },
  },
  "& p": {
    display: "flex",
    alignItems: "center",
  },
}));
