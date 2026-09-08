import { Router, type Response, type Request, type NextFunction } from "express";

const router = Router()

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Hello Middleware")
    next()
})

export default router