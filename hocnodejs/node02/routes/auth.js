import express from "express";
import authController from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/dang-nhap", authController.login);
router.post("/dang-nhap", authController.handleLogin);
router.get("/dang-xuat", authController.handleLogout);

export default router;
