import { Router } from "express";
import { loginUser, registerUser } from "../controllers/users.controller.js";

const router = Router();

// login
router.post("/login", loginUser);

// register
router.post("/api/users", registerUser);

export default router;