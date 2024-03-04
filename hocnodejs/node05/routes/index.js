var express = require("express");
var router = express.Router();
const job = require("../core/job");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({});
});

router.get("/add-user", async (req, res) => {
  await job.add("addUser", {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
  });
  res.json({ status: "success" });
});

module.exports = router;
