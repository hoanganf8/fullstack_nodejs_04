import express from "express";
const router = express.Router();
import homeController from "../controllers/home.controller.js";

router.get("/", homeController.index);
router.get("/san-pham", homeController.getProducts);

export default router;
