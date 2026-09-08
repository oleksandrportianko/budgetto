import { type Response, type Request } from "express";

export const healthController = {
    health: (req: Request, res: Response) => {
        res.status(200).send("Service is healthy!")
    }
} 