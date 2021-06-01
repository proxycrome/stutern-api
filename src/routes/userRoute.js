import { Router } from 'express';
import { postUserController } from '../controllers/userController.js';

const router = Router();

router.route('/register').get((req, res) => res.json({msg: "I am alive"})).post(postUserController);

export default router;

