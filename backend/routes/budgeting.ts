import { Router, type Response, type Request, type NextFunction } from "express";

const router = Router()

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Hello Middleware")
    next()
})

router.get("/hello", (req: Request, res: Response) => {
    res.send("Hello")
})

export default router