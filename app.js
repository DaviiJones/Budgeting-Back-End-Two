const express = require("express");
const cors = require('cors');
const app = express();
const transactions = require("./controllers/transactionsController");


app.use(cors());

app.use(express.json());
app.use("/transactions", transactions);

app.get("/", (req, res) => {
  res.send("Welcome to my Budgeting App...");
});

app.get("*", (req, res) => {
  res.status(404).json({error: "No page found..."})
})


module.exports = app;