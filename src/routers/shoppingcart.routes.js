import { Router } from "express";
import {getShoppingcartProd, addProdToShoppingcart, deleteProdShoppingcart} from "../controllers/shoppingcart.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Router();

// Get shopping cart Products
router.get("/shoppingcartproducts", isAuthenticated, getShoppingcartProd);

// Add product to shopping cart
router.post("/shoppingcartproducts", isAuthenticated, addProdToShoppingcart);

// delete product from shopping cart
router.delete("/shoppingcartproducts/:id", isAuthenticated, deleteProdShoppingcart);

export default router;