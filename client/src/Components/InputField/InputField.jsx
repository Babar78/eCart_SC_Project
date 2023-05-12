import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

//To chnage the outline of Material UI Fields
const CustomTextField = styled(TextField)(({ page })=>({
  "& .MuiOutlinedInput-root": {
    backgroundColor: page === "login" ? "#000000" : "#1F2937", // Replace with your desired background color
    "& fieldset": {
      borderColor: "#FFFFFF", // Use currentColor to inherit the outline color
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF", // Replace with your desired hover outline color (same as focused color)
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFFFFF", // Replace with your desired focused outline color
    },
    "& .MuiInputBase-input": {
      color: "#FFFFFF", // Replace with your desired text color
    },
  },
  "& .MuiInputLabel-root": {
    color: "gray", // Replace with your desired default label color
    "&.Mui-focused": {
      color: "#FFFFFF", // Replace with your desired white label color when focused
    },
  },
}));

function InputField({
  id,
  name,
  type,
  label,
  value,
  onChange,
  page,
  onKeyDown,
}) {
  //Login when Enter Button is pressed on the keyboard
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      loginUser();
    }
  };

  return (
    <CustomTextField
      id={id}
      name={name}
      type={type}
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      {...(page === "login" && onKeyDown ? { onKeyDown: handleKeyDown } : {})}
      page={page}
    />
  );
}

export default InputField;
