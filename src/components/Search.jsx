import { styled } from "@mui/material";
import React, { useRef } from "react";

const Search = ({ value, setValue }) => {
  const inputRef = useRef();
  const onClickClear = () => {
    setValue("");
    inputRef.current.focus();
  };
  return (
    <Container>
      <svg
        className="search"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <Styled_Input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className="clear"
          height="20"
          viewBox="0 0 48 48"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </Container>
  );
};

export default Search;

const Styled_Input = styled("input")(() => ({
  width: "400px",
  height: "35px",
  paddingLeft: "40px",
  borderRadius: "8px",
  border: "1px solid rgba(0,0,0,0.5)",
  fontSize: "16px",
}));
const Container = styled("div")(() => ({
  position: "relative",
  "& .search": {
    width: "20px",
    position: "absolute",
    top: "8px",
    left: "15px",
    opacity: "0.5",
  },
  "& .clear": {
    position: "absolute",
    top: "8px",
    right: "5px",
    opacity: "0.5",
    ":hover": {
      cursor: "pointer",
      opacity: "1",
    },
  },
}));
