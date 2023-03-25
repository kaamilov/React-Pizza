import React from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import { styled } from "@mui/material";
import { CiCircleRemove } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { addItems, minusItem, removeItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
type CartItemProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};
const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  imageUrl,
  count,
}) => {
  const dispatch = useDispatch();
  console.log(removeItem(id));
  const plusCount = () => {
    dispatch(addItems({ id }));
  };
  const minusCount = () => {
    dispatch(minusItem(id));
  };
  const deleteItem = () => {
    console.log(id);
    dispatch(removeItem({ id }));
  };

  return (
    <Styled_Block2>
      <div className="title">
        <img src={imageUrl} alt={title} />
        <div>
          <h4>{title}</h4>
          <span>тонкое тесто, 26 см.</span>
        </div>
      </div>

      <div className="counter-block">
        <MdRemoveCircleOutline
          className="counter"
          type="submit"
          onClick={minusCount}
        />
        <h5>{count}</h5>

        <IoIosAddCircleOutline className="counter" onClick={plusCount} />
      </div>
      <h5>{price * count}p</h5>
      <div onClick={deleteItem}>
        <CiCircleRemove className="remove" />
      </div>
    </Styled_Block2>
  );
};

export default CartItem;
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
