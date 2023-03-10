import { Container, styled } from "@mui/material";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import { useState } from "react";
import PizzaDetails from "../components/PizzaDetails";
import MainLayout from "./MainLayout";
const AppRoutes = () => {
  const [value, setValue] = useState("");
  return (
    <Styled_Container>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={<Home value={value} setValue={setValue} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<PizzaDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Styled_Container>
  );
};

export default AppRoutes;

const Styled_Container = styled(Container)(() => ({
  background: "#fff",
}));
