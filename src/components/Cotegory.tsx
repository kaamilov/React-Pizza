import { styled } from "@mui/material";
import React from "react";

type CotegoryProps = {
  value: number;
  onChange: any;
};
const Cotegory: React.FC<CotegoryProps> = ({ value, onChange }) => {
  const cotegory = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <Styled_Container>
      <Styled_UL>
        {cotegory.map((item, id) => (
          <li
            key={id}
            onClick={() => onChange(id)}
            className={value === id ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </Styled_UL>
    </Styled_Container>
  );
};

export default Cotegory;

const Styled_Container = styled("section")`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 885px) {
    display: block;
    justify-content: center;
    & span {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }
  }
`;

const Styled_UL = styled("ul")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;

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
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    @media screen and (max-width: 885px) {
      margin: 25px;
    }
  }
  & li:hover {
    background: black;
    color: #fff;
  }
  & .active {
    background: black;
    color: #fff;
  }
  @media screen and (max-width: 980px) {
    max-width: 800px;
    overflow-x: scroll;
  }
`;
