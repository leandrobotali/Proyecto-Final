import { Router } from "express";
import {getInfo} from "../controllers/info.controller.js";

const router = Router();

// Get info
router.get("/info", getInfo);

export default router;