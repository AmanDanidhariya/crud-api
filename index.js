const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const productRoutes = require("./routes/product");

// Middle wares
app.use(express.json());
app.use(cors());

// route Middle wares
app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("server up and running on port 4000!"));
