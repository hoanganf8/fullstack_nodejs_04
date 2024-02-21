var express = require("express");
var router = express.Router();
const userController = require("../controllers/api/v1/user.controller");
router.get("/v1/users", userController.index); // GET /api/v1/users
router.get("/v1/users/:id", userController.find); // GET /api/v1/users/{id}
router.post("/v1/users", userController.store); // POST /api/v1/users

module.exports = router;
