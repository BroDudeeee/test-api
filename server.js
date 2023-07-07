import express from "express";
const app = express();
import dotenv from "dotenv";

const port = 5000 || process.env.PORT;
dotenv.config();

app.get("", (req, res) => {
  res.json({ msg: "Get all" });
});

app.listen(port, () => console.log(`Backend Running on Port ${port}...`));
