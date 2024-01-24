const { User, Phone, Course } = require("../models/index");
const { Op } = require("sequelize");
module.exports = {
  index: async (req, res) => {
    const { keyword, status } = req.query;
    const where = {};
    if (status === "active" || status === "inactive") {
      where.status = status === "active";
    }

    if (keyword) {
      where[Op.or] = {
        name: {
          [Op.iLike]: `%${keyword}%`,
        },
        email: {
          [Op.iLike]: `%${keyword}%`,
        },
      };
    }
    const limit = 3;
    //Lấy trang hiện tại
    const { page = 1 } = req.query;
    //Tính offset
    const offset = (page - 1) * limit;

    const { count, rows: users } = await User.findAndCountAll({
      where,
      order: [["id", "desc"]],
      limit,
      offset,
      include: {
        model: Phone,
        as: "phone",
      },
    });
    // for (let user of users) {
    //   user.phone = await user.getPhone();
    // }
    //Tính tổng số trang = Math.ceil(Tổng số bản ghi / limit)
    const totalPages = Math.ceil(count / limit);

    res.render("users/index", { users, page, totalPages });
  },
  add: async (req, res) => {
    const courses = await Course.findAll({
      order: [["name", "asc"]],
    });
    res.render("users/add", { courses });
  },
  handleAdd: async (req, res) => {
    const body = req.body;

    const user = await User.create({
      name: body.name,
      email: body.email,
      status: body.status === "1",
    });
    if (user) {
      const courses = Array.isArray(body.courses)
        ? body.courses
        : [body.courses];
      //Thêm user và courses vào bảng users_courses
      if (courses.length) {
        const coursesIntance = await Promise.all(
          courses.map((courseId) => Course.findByPk(courseId)),
        );
        //Biến coursesIntance sẽ chứa instance của từng khóa học đã chọn
        await user.addCourses(coursesIntance);
      }
    }
    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
        where: { id },
        include: {
          model: Course,
          as: "courses",
        },
      });
      if (!user) {
        throw new Error("User không tồn tại");
      }
      const courses = await Course.findAll({
        order: [["name", "asc"]],
      });

      res.render("users/edit", { user, courses });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const status = await User.update(
      {
        name: body.name,
        email: body.email,
        status: body.status === "1",
      },
      {
        where: { id },
      },
    );
    if (status) {
      const courses = Array.isArray(body.courses)
        ? body.courses
        : [body.courses];

      if (courses.length) {
        const coursesIntance = await Promise.all(
          courses.map((courseId) => Course.findByPk(courseId)),
        );
        const user = await User.findByPk(id);
        //Biến coursesIntance sẽ chứa instance của từng khóa học đã chọn
        await user.setCourses(coursesIntance);
      }
    }
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await User.destroy({
      where: { id },
      force: true, //Kích hoạt xóa vĩnh viễn
    });
    return res.redirect("/users");
  },
};
