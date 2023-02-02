import Header from "./layout/Header";
import { Container, Grid } from "@mui/material";
import Cotegory from "./components/Cotegory";
import Card from "./components/Card";
import { pizza } from "./assets/pizza";
const App = () => {
  return (
    <Container>
      <Header />
      <Cotegory />
      Все Пиццы
        <Grid container spacing={4} gap={2.5}>
          {pizza.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Grid>
    </Container>
  );
};

export default App;
