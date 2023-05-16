import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{margin:"20px 0"}}>
      {"Copyright © "}
      <Link color="inherit" to={"/home"}>
        eCart
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
