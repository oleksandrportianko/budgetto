import { type Response, type Request, Router } from "express";

const router = Router();

router.get("", (req: Request, res: Response) => {
    res.status(200).send("Service is healthy!")
})

export default router;