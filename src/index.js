const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config/config");
const router = require("./route/router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(config.port, () => {
  console.log(`Servidor rodando na porta: ${config.port}`);
});
