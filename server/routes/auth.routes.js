import express from "express";
const router = express.Router();

import { register, updateUser, login } from "../controllers/auth.controller.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").patch(updateUser);

export default router;
