import { Box, Container, styled } from "@mui/material";
import { BsCart } from "react-icons/bs";
import { TbCurrencyRubel } from "react-icons/tb";
import logo from "../assets/logo.jpg";
import Button from "../components/Button";
const Header = () => {
  return (
    <header>
      <StyledHeader>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledImg src={logo} />
          <Box>
            <Styled_H1> REACT PIZZA</Styled_H1>
            <Styled_P>самая вкусная пицца во вселенной</Styled_P>
          </Box>
        </Box>
        <Button
          variant="contained"
          width="150px"
          height="50px"
          endIcon={<BsCart />}
        >
          520 <TbCurrencyRubel /> |
        </Button>
      </StyledHeader>
    </header>
  );
};

export default Header;

const StyledHeader = styled(Container)`
  height: 80px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const Styled_P = styled("h1")`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #7b7b7b;
  margin-top: -20px;
`;
