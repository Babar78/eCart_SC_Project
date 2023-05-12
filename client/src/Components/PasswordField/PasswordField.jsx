import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/system";

//To chnage the outline of Material UI Fields
const CustomFormControl = styled(FormControl)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#1F2937", // Replace with your desired background color
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
  "& .MuiIconButton-root": {
    color: "#FFFFFF", // Replace with your desired icon color
  },
});

function PasswordField({ id, name, label, value, onChange }) {
  //Show Password
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <CustomFormControl variant="outlined" className="w-full">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </CustomFormControl>
  );
}

export default PasswordField;
