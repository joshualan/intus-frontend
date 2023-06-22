const express = require("express");
const { participants } = require("./data");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/participants", (_, res) => {
  res.json(participants);
});

app.get("/participant/:id", (req, res) => {
  const {id} = req.params;
  res.json(participants[id] || {});
});

module.exports = { app };
