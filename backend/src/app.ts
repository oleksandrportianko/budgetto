import express from "express";

import healthRouter from "./modules/health/health.routes.ts"

const app = express();

app.use("/health", healthRouter)

export default app;