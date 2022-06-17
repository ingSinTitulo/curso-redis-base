import express from 'express';
import { router as helloRouter } from './routers/HelloRouter';

export class Application {
    private app = express();
    private static instance: Application;

    private constructor() {
        this.app.use(helloRouter);
    }

    public static getInstance(): Application {
        return this.instance || (this.instance = new Application());
    }

    public start(callback: VoidFunction): void {
        this.app.listen(process.env.PORT, callback);
    }
}