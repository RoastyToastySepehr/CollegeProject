const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const port = 5000;
// Database
mongoose.connect("mongodb://localhost:27017/locationapp");
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(morgan("tiny"));

app.use("/api", routes);

app.listen(port, console.log(`Server Running @ Localhost:${port}!`));

