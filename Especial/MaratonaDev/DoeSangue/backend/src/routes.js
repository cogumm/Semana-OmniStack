import { Router } from 'express';

const router = new Router();

import UserController from './app/controllers/User';

router.get("/", UserController.index);
router.post("/", UserController.store);
router.delete("/:id", UserController.delete);

export default router;
