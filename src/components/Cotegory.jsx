import { styled } from "@mui/material";
import React from "react";
const Cotegory = () => {
  return (
    <Styled_Container>
      <Styled_UL>
        <li>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </Styled_UL>
      Сартировка по
    </Styled_Container>
  );
};

export default Cotegory;

const Styled_Container = styled("section")`
  margin-top: 40px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Styled_UL = styled("ul")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin: -20px;
  & .active {
    background: red;
  }

  & li {
    background: #f9f9f9;
    width: 100%;
    border-radius: 30px;
    height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
    padding: 16px;
    text-decoration: none;
    color: black;
  }
  & li:hover {
    background: black;
    color: #fff;
  }
  & .active {
    background: red;
  }
  & .link {
    color: red;
  }
`;
