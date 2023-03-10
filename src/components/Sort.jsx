import { styled } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort, selectorFilter } from "../redux/slices/filterSlice";
const options = [
  { name: "популярности(DESC)", sort: "rating" },
  { name: "популярности(ABC)", sort: "-rating" },
  { name: "по цене(DESC)", sort: "price" },
  { name: "по цене(ABC)", sort: "-price" },
  { name: "по алфавиту(DESC)", sort: "title" },
  { name: "по алфавиту(ABC)", sort: "-title" },
];
const Sort = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectorFilter);
  const [open, setOpen] = useState(false);
  const onClickSeleckted = (id) => {
    dispatch(setSort(id));
    setOpen(false);
  };
  return (
    <Sort_Cotainer>
      <span>Сортировка по:</span>

      <Styled_Selected onClick={() => setOpen(!open)}>
        {sort.name}
      </Styled_Selected>
      {open && (
        <Sort_Select>
          {options.map((el, i) => (
            <li
              key={i}
              onClick={() => onClickSeleckted(el)}
              className={sort.sortProperty === el.sort ? "active" : ""}
            >
              {el.name}
            </li>
          ))}
        </Sort_Select>
      )}
    </Sort_Cotainer>
  );
};

export default Sort;

const Sort_Cotainer = styled("div")(() => ({
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  position: "relative",
  width: "280px",
  display: "flex",
  justifyContent: "space-between",
  "& span": {
    width: "200px",
  },
}));

const Sort_Select = styled("ul")(() => ({
  width: "180px",
  fontWeight: "400",
  fontSize: "16px",
  color: "#FE5F1E",
  position: "absolute",
  right: "0",
  top: "25px",
  textAlign: "end",
  background: "#fff",
  padding: "10px",

  "& li": {
    border: "none",
    color: "black",
    listStyle: "none",
    height: "38px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  "& .active": {
    color: "#FE5F1E",
    fontWeight: "700",
    fontSize: "18px",
    background: "rgba(254, 95, 30, 0.05);",
  },
}));
const Styled_Selected = styled("span")(() => ({
  color: "#FE5F1E",
  cursor: "pointer",
}));
