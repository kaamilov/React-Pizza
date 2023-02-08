import { styled, Card as MuiCard } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import React, { useState } from "react";
import Button from "./Button";

const Card = ({ title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSisez, setActiveSisez] = useState(0);
  const typeName = ["Танкое", "традиционное"];

  return (
    <div style={{ display: "flex", justifyContent: "center"  }}>
      <Styled_Card>
        <Card_Media src={imageUrl} />
        <Styled_h1>{title}</Styled_h1>
        <Styled_Block>
          <Styled_BlockCard>
            {types.map((type) => (
              <p
                className={activeType === type ? "active" : ""}
                key={type}
                onClick={() => setActiveType(type)}
              >
                {typeName[type]}
              </p>
            ))}
          </Styled_BlockCard>
          <Styled_BlockCard>
            {sizes.map((size, id) => (
              <p
                key={size}
                className={activeSisez === id ? "active" : ""}
                onClick={() => setActiveSisez(id)}
              >
                {size}см
              </p>
            ))}
          </Styled_BlockCard>
        </Styled_Block>
        <Styled_Block3>
          <h3>от {price} сом</h3>
          <Button
            variant="outlined"
            width="150px"
            height="40px"
            icon={<IoIosAdd />}
          >
            Добавить
          </Button>
        </Styled_Block3>
      </Styled_Card>
    </div>
  );
};

export default Card;

const Styled_Card = styled(MuiCard)(() => ({
  width: "280px",
  height: "500px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(4, 1fr)",
  gridRowGap: "10px",
  justifyContent: "center",
}));
const Card_Media = styled("img")(() => ({
  width: "280px",
  height: "260px",
}));
const Styled_h1 = styled("h1")(() => ({
  fontWeight: "900",
  fontSize: "25px",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));
const Styled_Block = styled("div")(() => ({
  width: "280px",
  height: "85px",
  background: "#F3F3F3",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(2, 1fr)",
  gridRowGap: "1px",
}));
const Styled_BlockCard = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  width: "280px",
  height: "32px",
  padding: "5px",
  "& p": {
    width: "100%",
    height: "32px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .active": {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Styled_Block3 = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));
