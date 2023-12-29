import express from "express";
import ordersRouter from "./orders.js";
const router = express.Router();
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

// -> /users
router.get("/", userController.index);

// -> /users/add
router.get("/add", userController.add);

router.use(authMiddleware);

router.get("/edit/:id", userController.edit);

router.use("/orders", ordersRouter);

export default router;
