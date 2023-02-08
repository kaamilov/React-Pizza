import { styled } from "@mui/material";
const NotFound = () => {
  return (
    <Container_NotFount>
      <span>😕</span>
      <h1>Ничего не найдено</h1>
      <p>К сожалени данная страница отсуствует в нашем интернет магазине</p>
    </Container_NotFount>
  );
};

export default NotFound;

const Container_NotFount = styled("div")(() => ({
  textAlign: "center",
  alignItems: "center",
  padding: "100px",
  "& span": {
    fontSize: "80px",
  },
}));
