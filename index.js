const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome on Marvel API !" });
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=lKmpBf8oAA8k00HF`
//   `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&skip=${req.query.skip}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server Started");
});