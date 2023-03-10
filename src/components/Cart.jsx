import { styled } from "@mui/material";
import { MdDeleteOutline, MdOutlineShoppingCart } from "react-icons/md";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearItems, selectorCart } from "../redux/slices/cartSlice";
import CartEmpty from "./CartEmpty";
const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(selectorCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <Styled_Cart_Container>
      <div className="container">
        <Styled_Block1>
          <div className="cart">
            <MdOutlineShoppingCart className="shop" /> <h6>Корзина</h6>
          </div>
          <div className="cart-clear" onClick={onClickClear}>
            <MdDeleteOutline />
            <span>Очистить корзину</span>
          </div>
        </Styled_Block1>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <Styled_Block2>
          <p>
            Всего пицц: <h5>{totalCount} шт</h5>
          </p>
          <p>
            Сумма заказов <h5>{totalPrice} p</h5>
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
  width: "921px",
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
