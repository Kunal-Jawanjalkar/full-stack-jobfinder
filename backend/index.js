require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// DB connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("DB CONNECTION FAILED...");
    console.log(err);
  });

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());

// All Routes
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobroutes");
const searchbyid = require("./routes/searchbyid");
app.use("/api", authRoutes);
app.use("/api", jobRoutes);

// make server listen on port
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}...`
  );
});
