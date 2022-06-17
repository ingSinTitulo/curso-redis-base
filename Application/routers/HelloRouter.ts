import { Router } from "express";
import { HelloController } from '../controllers/helloController';

const router = Router();
const helloController = new HelloController();

router.get('/', helloController.hello.bind (helloController));

export { router };