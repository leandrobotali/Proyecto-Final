import { Router } from "express";
import {getAllOrders, addNewOrder} from "../controllers/orders.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Router();

// Get all orders
router.get("/orders", isAuthenticated, getAllOrders);

// Add new order
router.post("/orders", isAuthenticated, addNewOrder);

export default router;