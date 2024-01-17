const userModel = require("../models/user");
const { string } = require("yup");
module.exports = {
  index: async (req, res, next) => {
    try {
      const { status, keyword } = req.query;
      const users = await userModel.all(status, keyword);
      const msg = req.flash("msg");
      res.render("users/index", { users, msg });
    } catch (e) {
      return next(e);
    }
  },
  add: (req, res) => {
    res.render("users/add", { req });
  },
  handleAdd: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Tên bắt buộc phải nhập"),
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng")
        .test(
          "check-unique",
          "Email đã tồn tại trên hệ thống",
          async (value) => {
            //Return true --> pass
            //Return false --> fail
            const result = await userModel.emailExist(value);
            return !result.length;
          },
        ),
      status: string().test(
        "check-status",
        "Trạng thái không hợp lệ",
        (value) => {
          if (value === "0" || value === "1") {
            return true;
          }
          return false;
        },
      ),
    });
    if (body) {
      //Validate thành công
      //Gọi model
      body.status = body.status === "1" ? true : false;
      await userModel.create(body);
      //Redirect về trang /users kèm thông báo
      req.flash("msg", "Thêm người dùng thành công");
      return res.redirect("/users");
    }
    return res.redirect("/users/add");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await userModel.find(id);
      if (!user.length) {
        throw new Error("User không tồn tại");
      }
      user[0].status = user[0].status ? "1" : "0";
      req.old = user[0];
      const msg = req.flash("msg");
      res.render("users/edit", { req, msg });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = await req.validate(req.body, {
      name: string().required("Tên bắt buộc phải nhập"),
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng")
        .test(
          "check-unique",
          "Email đã tồn tại trên hệ thống",
          async (value) => {
            //Return true --> pass
            //Return false --> fail
            const result = await userModel.emailExist(value, id);
            return !result.length;
          },
        ),
      status: string().test(
        "check-status",
        "Trạng thái không hợp lệ",
        (value) => {
          if (value === "0" || value === "1") {
            return true;
          }
          return false;
        },
      ),
    });
    if (body) {
      //Validate thành công
      //Gọi model
      body.status = body.status === "1" ? true : false;
      await userModel.update(body, id);
      req.flash("msg", "Cập nhật thành công");
    }
    return res.redirect("/users/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await userModel.delete(id);
    req.flash("msg", "Xóa người dùng thành công");
    res.redirect("/users");
  },
};
