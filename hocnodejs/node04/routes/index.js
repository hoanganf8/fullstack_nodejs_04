var express = require("express");
var router = express.Router();
const { User, Phone, Post, Course } = require("../models/index");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
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

module.exports = router;
