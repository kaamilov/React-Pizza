import React from "react";
import { styled, Button as MuiButton } from "@mui/material";
type ButtonProps = {
  children: string | number;
  onClick: any;
  variant: string | number;
  bgcolor: string;
  icon: any;
  endIcon: any;
};
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  icon,
  endIcon,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      // variant={variant}
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
  width: "132px";
  height: "40";
  white-space: nowrap;
  border-radius: 30px;
  
  &.MuiButton-contained {
    background: "#FE5F1E";
    font-size: 14px;
    border: none;
    color: #ffffff;
  }

  &.MuiButton-outlined {
    color:  "#FE5F1E";
    border-color: "#FE5F1E";
  }
  &:hover {
    background: "#FE5F1E";
    color:  "#ffffff"};
  }
  &.Mui-disabled {
    background: none;
    border: 1px solid grey;
    cursor: "not-drop";
    color: grey;
  }
`;
