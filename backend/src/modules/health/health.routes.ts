import { Router } from "express";

import { healthController } from "./health.controller.ts"

const router = Router()

router.get("", healthController.health)

export default router