var express = require("express");
var router = express.Router();
const { User, Phone, Post, Course } = require("../models/index");
const sendMail = require("../utils/mail");
const { createClient } = require("redis");
const connectRedis = require("../utils/redis");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { req });
});

router.get("/test-assoc", async (req, res) => {
  //Từ user --> lấy số điện thoại tương ứng
  //User instance
  // const user = await User.findByPk(12);
  // const phone = await user.getPhone();
  // const phone = await user.getDienthoai();

  //Từ phone --> Lấy user tương ứng
  // const phone = await Phone.findByPk(3);
  // const user = await phone.getUser();
  // const user = await phone.getNguoidung();

  //Từ user --> Lấy danh sách posts
  // const user = await User.findOne({
  //   where: { id: 12 },
  //   include: [
  //     {
  //       model: Post,
  //       as: "posts",
  //     },
  //     {
  //       model: Course,
  //       as: "courses",
  //     },
  //   ],
  // });
  // await user.createPost({
  //   title: "Bài viết 5",
  //   content: "Nội dung 5",
  // });
  //Từ post --> Lấy thông tin user
  // const post = await Post.findOne({
  //   where: { id: 1 },
  //   include: {
  //     model: User,
  //     as: "user",
  //   },
  // });
  // const user = await post.getUser();
  const course = await Course.findOne({
    where: { id: 1 },
    include: {
      model: User,
      as: "users",
    },
  });
  res.json({ course });
});

router.get("/test-mail", async (req, res) => {
  const info = await sendMail(
    "hoangan@fullstack.edu.vn",
    "Hello lớp K4",
    "Tôi là giảng viên lớp Fulstack K4",
  );
  res.json(info);
});

// router.get("/test-redis", async (req, res) => {
//   const client = await createClient({
//     // socket: {
//     //   host: "172.31.128.202",
//     //   port: 6379,
//     // },
//     // password: "123456",
//     // username: "default",
//   })
//     .on("error", (err) => console.log("Redis Client Error", err))
//     .connect();
//   await client.set("username", "hoangan.web1", "EX", 60 * 60 * 24);
//   const value = await client.get("username");

//   await client.disconnect();
//   res.json({ value });
// });

router.post("/clear-cache", async (req, res) => {
  const redis = await connectRedis();
  await redis.del("users-cache");
  return res.json({ status: "Success" });
});

module.exports = router;
