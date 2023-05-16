import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#F79015",
  borderColor: "#F79015",
  "&:hover": {
    backgroundColor: "#F79015",
    color: "white",
    borderColor: "#F79015",
  },
}));

function CustomButton() {
  return (
    <Link to="/login">
      <LoginButton variant="outlined">Login</LoginButton>
    </Link>
  );
}

export default CustomButton;
