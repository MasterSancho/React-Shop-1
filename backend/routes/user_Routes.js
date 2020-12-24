import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/user_Controller.js';

router.post('/login', authUser);

export default router;
