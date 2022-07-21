import express from "express";
const router = express.Router();

import { register, updateUser, login } from "../controllers/auth.controller.js";
import auth from "../middlewares/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").patch(auth, updateUser);

export default router;
