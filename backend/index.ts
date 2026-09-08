import express from "express";
import dotenv from "dotenv";

import budgetRouter from "./routes/budget.ts"
import healthRouter from "./routes/health.ts"

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use("/health", healthRouter)
app.use("/budget", budgetRouter)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});