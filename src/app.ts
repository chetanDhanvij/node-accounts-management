import express from "express";
import bodyParser from "body-parser";

import accountsRoutes from "./routes/accounts.js"
import { apiErrorHandler } from "./error/api-error-handler.js";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

app.use('/accounts', accountsRoutes);

app.use(apiErrorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


app.get("/", (req, res) => {
    res.send("Hello");
})