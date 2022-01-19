import express from "express";
import bodyParser from "body-parser";
import accountsRoutes from "./routes/accounts.js";
import { apiErrorHandler } from "./error/api-error-handler.js";
import cors from "cors";
const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use('/accounts', accountsRoutes);
app.use(apiErrorHandler);
app.get("/", (req, res) => {
    res.send("Hello");
});
export default app;
