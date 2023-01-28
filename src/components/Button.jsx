import React from "react";
import { styled, Button as MuiButton } from "@mui/material";
const Button = ({
  children,
  disabled,
  onClick,
  variant,
  bgcolor,
  width,
  height,
  icon,
  endIcon
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      bgcolor={bgcolor}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      startIcon={icon}
      endIcon={endIcon}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(MuiButton)`
  text-transform: inherit;
  width: ${(props) => (props.width ? props.width : "132px")};
  height: ${(props) => (props.height ? props.height : "40")};
  white-space: nowrap;
  border-radius: 30px;
  &.MuiButton-contained {
    background: ${({ bgcolor }) => bgcolor || "#FE5F1E"};
    font-size: 14px;
    border: none;
    color: #ffffff;
  }

  &.MuiButton-outlined {
    color: ${(props) => props.bgcolor || "#FE5F1E"};
    border-color: ${(props) => props.bgcolor || "#FE5F1E"};
  }
  &:hover {
    background: ${(props) => props.hover || "#FE5F1E"};
    color: ${(props) => props.color || "#ffffff"};
  }
  &.Mui-disabled {
    background: grey;
    border: 1px solid "grey";
    cursor: "not-drop";
    border: none;
  }
`;
