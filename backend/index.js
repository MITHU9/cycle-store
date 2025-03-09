import cors from "cors";
import express from "express";
import productRoute from "../backend/routes/productRoute.js";
import connectDB from "./config/db.js";
const app = express();

import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
