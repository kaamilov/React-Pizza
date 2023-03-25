import { useEffect, useState } from "react";
import { styled, Pagination } from "@mui/material";
import Cotegory from "../components/Cotegory";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import Sort from "../components/Sort";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchPizza, selectorPizza } from "../redux/slices/pizzaSlice";

const Home = ({ value }) => {
  console.log(value);
  const { сategoryId, sort, currentPage } = useSelector(
    (store) => store.filter
  );
  const { itemss, status, error } = useSelector(selectorPizza);
  console.log(status);
  const sortType = sort.sort;
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const getAllProducts = async () => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "abc" : "desc";
    const сategery = сategoryId > 0 ? `category=${сategoryId}` : "";
    const search = value ? `&search=${value}` : "";
    dispatch(fetchPizza({ sortBy, order, сategery, search, currentPage }));
  };
  useEffect(() => {
    getAllProducts();
  }, [сategoryId, value, currentPage, sortType]);
  const pizzas = itemss?.map((item) => <Card key={item.id} {...item} />);
  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const onChangeHandler = (e, p) => {
    dispatch(setCurrentPage(p));
  };
  return (
    <Styled_Home>
      {error ? (
        <h1 style={{ color: "red" }}>Error {error}</h1>
      ) : (
        <>
          <span>
            <Cotegory value={сategoryId} onChange={onChangeCategory} />
            <Sort />
          </span>
          <h1 className="h1">Все Пиццы</h1>
          <main>{status === "loading" ? skeletons : pizzas}</main>
        </>
      )}

      <Pagination count={3} color="warning" onChange={onChangeHandler} />
    </Styled_Home>
  );
};

export default Home;

const Styled_Home = styled("div")(() => ({
  paddingBottom: "3rem",
  margin: "0 auto",

  "& p": {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },

  "& .h1": {
    fontWeight: "500",
    fontSize: "32px",
    margin: "35px 0",
  },
  "& span": {
    display: "flex",
    alignItems: "center",
  },
  "& main": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
    gridColumnGap: "10px",
    gridRowGap: "10px",
    "@media screen and (max-width: 1200px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media screen and (max-width: 990px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media screen and (max-width: 660px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));
