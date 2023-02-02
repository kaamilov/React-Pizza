import Header from "./layout/Header";
import { Container, Grid, styled } from "@mui/material";
import Cotegory from "./components/Cotegory";
import Card from "./components/Card";
import { pizza } from "./assets/pizza";
const App = () => {
  return (
    <Container>
      <Header />
      <Cotegory />
      <Styled_h1>Все Пиццы</Styled_h1>
      <Grid container spacing={4} gap={2.5} m="0 auto">
        {pizza.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

export default App;

const Styled_h1 = styled("h1")(() => ({
  fontWeight: "700",
  fontSize: "32px",
  marginBottom: "35px",
}));
