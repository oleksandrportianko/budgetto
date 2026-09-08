import express from "express";
import dotenv from "dotenv";

import budgetingRouter from "./routes/budgeting.ts"

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(budgetingRouter)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});