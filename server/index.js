const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();

const db = require("./db");

const userRouter = require("./Routes/UserRouter");

const app = express();

app.use(cors());
app.use(bodyparser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use("/user", userRouter);
