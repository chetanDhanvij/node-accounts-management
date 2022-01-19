const express = require("express");
const bodyParser = require("body-parser");
const accountsRoutes = require("./routes/accounts");
const { apiErrorHandler } = require("/error/api-error-handler");
const cors = require("cors");

export const app = express();


app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

app.use('/accounts', accountsRoutes);

app.use(apiErrorHandler);
