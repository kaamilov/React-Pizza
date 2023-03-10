import { Box, Container, styled } from "@mui/material";
import { BsCart } from "react-icons/bs";
import { TbCurrencyRubel } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import Button from "../components/Button";
import Search from "../components/Search";
const Header = ({ value, setValue }) => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, items) => sum + items.count, 0);
  return (
    <header>
      <StyledHeader>
        <Link to="/" className="link">
          <StyledImg src={logo} />

          <div className="logo">
            <Styled_H1> REACT PIZZA</Styled_H1>
            <Styled_P>самая вкусная пицца во вселенной</Styled_P>
          </div>
        </Link>
        <Search value={value} setValue={setValue} />
        <Link style={{ textDecoration: "none" }} to="cart">
          <Button className="btn" variant="contained">
            {totalPrice} <TbCurrencyRubel /> |<BsCart className="btnIcon" />
            {totalCount}
          </Button>
        </Link>
      </StyledHeader>
    </header>
  );
};

export default Header;

const StyledHeader = styled("div")`
  height: 80px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 420px) {
    & h1 {
      font-size: 16px;
    }
    & p {
      font-size: 14px;
    }
  }
  & .link {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
  }
  & .btn {
    width: 150px;
    height: 50px;
  }
  & .btnIcon {
    width: 50px;
    height: 25px;
  }
`;
const Styled_H1 = styled("h1")`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
`;
const StyledImg = styled("img")`
  height: 40px;
  width: 40px;
  margin-right: 14px;
  cursor: pointer;
`;
const Styled_P = styled("p")`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #7b7b7b;
`;
