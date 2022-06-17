import { Request, Response } from 'express';

export class HelloController {
    public hello (_req: Request, res: Response) {
        return res.send('Hello');
    }
}