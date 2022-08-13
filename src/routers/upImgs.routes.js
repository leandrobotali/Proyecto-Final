import { Router } from "express";
import uploadImg from "../controllers/upImg.controller.js";
import upload from "../middlewares/procImage.js";

const router = Router();

// upload img
router.post("/images", upload.single('myFile'), uploadImg);


export default router;