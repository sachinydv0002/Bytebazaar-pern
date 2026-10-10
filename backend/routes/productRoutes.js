import express from "express";
import { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();


router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", requireAdmin, createProduct);
router.put("/:id", requireAdmin, updateProduct);
router.patch("/:id", requireAdmin, updateProduct);
router.delete("/:id", requireAdmin, deleteProduct);


export default router;
