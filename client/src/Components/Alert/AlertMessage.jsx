import React from "react";
import Alert from "@mui/material/Alert";

function AlertMessage({ responseReceived, alertText }) {
  return (
    <div>
      {responseReceived ? (
        <Alert
          severity={
            alertText === "Successfully Registered" ||
            alertText === "Login Successful" ||
            alertText === "Profile Updated Successfully!"
              ? "success"
              : "error"
          }
          variant="filled"
          className="w-full"
        >
          {alertText}
        </Alert>
      ) : null}
    </div>
  );
}

export default AlertMessage;
