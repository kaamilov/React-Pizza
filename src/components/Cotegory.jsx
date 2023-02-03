import { styled } from "@mui/material";
import { useState } from "react";
import Sort from "./Sort";
const qotegory = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const Cotegory = () => {
  const [active, setActive] = useState(0);
  return (
    <Styled_Container>
      <Styled_UL>
        {qotegory.map((item, id) => (
          <li
            key={id}
            onClick={() => setActive(id)}
            className={active === id ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </Styled_UL>
      <Sort />
    </Styled_Container>
  );
};

export default Cotegory;

const Styled_Container = styled("section")`
  margin: 81px 0 32px 0;
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
  }
  & li:hover {
    background: black;
    color: #fff;
  }
  & .active {
    background: black;
    color: #fff;
  }
`;
