import { Container, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const MainLayout = () => {
  return (
    <Styled_Container>
      <Header />
      <Outlet />
    </Styled_Container>
  );
};

export default MainLayout;
const Styled_Container = styled(Container)(() => ({
  background: "#fff",
}));
