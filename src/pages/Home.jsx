import { useEffect, useState } from "react";
import { styled, Pagination } from "@mui/material";
import Cotegory from "../components/Cotegory";
import Card from "../components/Card";
import ky from "ky";
import Skeleton from "../components/Skeleton";
import Sort from "../components/Sort";

const Home = ({ value, setValue }) => {
  const [pizza, setPizza] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  const [qategoryId, setQategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSort] = useState({
    name: "популярности",
    sort: "rating",
  });
  useEffect(() => {
    const getProduct = async () => {
      setSkeleton(true);
      const sortBy = sortType.sort.replace("-", "");
      const order = sortType.sort.includes("-") ? "abc" : "desc";
      const qategery = qategoryId > 0 ? `category=${qategoryId}` : "";
      const search = value ? `&search=${value}` : "";
      const data = await ky
        .get(
          `https://63dca73bc45e08a0435d8ab3.mockapi.io/items?page=${currentPage}&limit=4&${qategery}&sortBy=${sortBy}&order=${order}${search}`
        )
        .json();
      setPizza(data);
      setSkeleton(false);
    };
    getProduct();
    window.scrollTo(0, 0);
  }, [qategoryId, sortType, value, currentPage]);
  const pizzas = pizza.map((item) => <Card key={item.id} {...item} />);
  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  const onChangeHandler = (e, p) => {
    setCurrentPage(p);
  };
  return (
    <Styled_Home>
      <span>
        <Cotegory value={qategoryId} onChange={(id) => setQategory(id)} />
        <Sort value={sortType} onChange={(id) => setSort(id)} />
      </span>
      <h1 className="h1">Все Пиццы</h1>
      <main>{skeleton ? skeletons : pizzas}</main>
      <p>
        <Pagination count={3} color="warning" onChange={onChangeHandler} />
      </p>
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
