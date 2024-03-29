import express from 'express';
const router = express.Router();

import { register, updateUser, login } from '../controllers/auth.controller.js';
import auth from '../middlewares/auth.js';
import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
	windowMs: 15 * 60 * 1000, // 15m
	max: 10,
	message: 'Too many requests from this IP, please try again after 15 minutes',
});

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/update').patch(auth, updateUser);

export default router;
