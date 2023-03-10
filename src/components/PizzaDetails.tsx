import { Box, Grid, styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PizzaDetails: React.FC = () => {
  const [details, setDetails] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigete = useNavigate();
  const detailsPizza = async () => {
    try {
      const { data } = await axios.get(
        `https://63dca73bc45e08a0435d8ab3.mockapi.io/items/` + id
      );
      setDetails(data);
    } catch (error) {
      alert(error);
      navigete("/");
    }
  };
  useEffect(() => {
    detailsPizza();
  }, []);
  console.log(id);
  if (!details) {
    return <div>Loading......</div>;
  }
  return (
    <Styled_Details_Wrapper>
      <Grid container>
        <Grid item xs={6} className="flex center">
          <img src={details.imageUrl} alt="" />
        </Grid>
        <Grid item xs={6} className="description">
          <h1>{details.title}</h1>
          <h2>{details.price} p</h2>
        </Grid>
      </Grid>
    </Styled_Details_Wrapper>
  );
};

export default PizzaDetails;

const Styled_Details_Wrapper = styled(Box)(() => ({
  width: "100%",
  height: "100%",

  "& img": {
    width: "90%",
    height: "480px",
  },
  "& .description": {
    // textAlign: "center",
    marginTop: "5%",
  },
}));
