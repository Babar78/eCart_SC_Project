import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

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
  const handleLogin = () => {
    window.location.href = "/login";
  };
  return (
    <LoginButton variant="outlined" onClick={handleLogin}>
      Login
    </LoginButton>
  );
}

export default CustomButton;
