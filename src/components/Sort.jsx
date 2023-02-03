import { styled } from "@mui/material";
import React from "react";
import { useState } from "react";
const options = ["популярности", "по цене", "по алфавиту"];
const Sort = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const onClickSeleckted = (id) => {
    setActive(id);
    setOpen(false);
  };
  return (
    <Sort_Cotainer>
      Сортировка по:
      <Styled_Selected onClick={() => setOpen(!open)}>
        {options[active]}
      </Styled_Selected>
      {open && (
        <Sort_Select>
          {options.map((el, i) => (
            <li
              key={i}
              onClick={() => onClickSeleckted(i)}
              className={active === i ? "active" : ""}
            >
              {el}
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
  width: "220px",
  display: "flex",
  justifyContent: "space-between",
}));

const Sort_Select = styled("ul")(() => ({
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  color: "#FE5F1E",
  position: "absolute",
  right: "0",
  textAlign: "end",
  "& li": {
    border: "none",
    color: "black",
    listStyle: "none",
    height: "38px",
    cursor: "pointer",
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
