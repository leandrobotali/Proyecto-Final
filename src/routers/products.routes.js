import { Router } from "express";
import {getAllProducts, getProduct, createNewProduct, updateProduct, deleteProduct} from "../controllers/productos.controller.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";

const router = Router();

// Get All products
router.get("/products", getAllProducts);

// Get product
router.get("/products/:id", getProduct);

// New Product
router.post("/products", isAuthenticated, isAdmin, createNewProduct);

// Edit product
router.put("/products/:id", isAuthenticated, isAdmin, updateProduct);

// Delete productos
router.delete("/products/:id", isAuthenticated,isAdmin, deleteProduct);

export default router;