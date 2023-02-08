import Header from "../layout/Header";
import { Container, styled } from "@mui/material";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import { useState } from "react";
const AppRoutes = () => {
  const [value, setValue] = useState("");
  return (
    <Styled_Container>
      <Header value={value} setValue={setValue} />
      <>
        <Routes>
          <Route path="/" element={<Home value={value} setValue={setValue}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Styled_Container>
  );
};

export default AppRoutes;

const Styled_Container = styled(Container)(() => ({
  background: "#fff",
}));
