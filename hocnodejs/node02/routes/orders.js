import express from "express";
import userController from "../controllers/user.controller.js";
const router = express.Router();

// -> /users/orders
router.get("/", userController.getOrders);

// -> /users/orders/completed
router.get("/completed", userController.getOrdersCompleted);

// -> /users/orders/cancel
router.get("/cancel", userController.getOrdersCancel);

export default router;
