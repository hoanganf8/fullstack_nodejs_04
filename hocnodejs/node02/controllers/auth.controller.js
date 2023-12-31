import { object, string } from "yup";

const getError = (errors, fieldName) => {
  if (errors.length) {
    errors = errors[0];
    return errors[fieldName];
  }
};
const getOld = (old, fieldName) => {
  if (old.length) {
    old = old[0];
    return old[fieldName];
  }
};
const authController = {
  login: (req, res) => {
    console.log("get form");
    // const msg = req.session.msg;
    // delete req.session.msg;
    // const msg = req.flash("msg");
    const errors = req.flash("errors");
    const old = req.flash("old");

    res.render("auth/login", {
      layout: "auth-layout",
      // msg,
      getError,
      errors,
      getOld,
      old,
    });
  },
  handleLogin: async (req, res) => {
    // const { email, password } = req.body;
    // const errors = {};
    // if (!email) {
    //   errors.email = "Vui lòng nhập email";
    // }
    // if (!password) {
    //   errors.password = "Vui lòng nhập mật khẩu";
    // }
    // req.flash("errors", errors);
    //Validate form
    //Check login --> Học sau
    //Thông báo kết quả
    /*
    - Thành công: Chuyển hướng về trang chủ, kèm thông báo
    - Không thành công: Chuyển hướng về trang đăng nhập
    */
    // req.session.msg = "Đăng nhập thất bại";
    // req.flash("msg", "Đăng nhập thành công");

    //Yup
    const schema = object({
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng"),
      password: string().required("Mật khẩu bắt buộc phải nhập"),
      name: string()
        .min(5, "Tên phải từ 5 ký tự")
        .required("Tên bắt buộc phải nhập")
        .test("name-upper", "Tên bắt buộc là chữ in HOA", (value) => {
          return value === value.toUpperCase();
        }),
      phone: string()
        .matches(/^(0|\+84)\d{9}$/, "Số điện thoại không đúng định dạng")
        .required("Số điện thoại bắt buộc phải nhập"),
    });
    try {
      const body = await schema.validate(req.body, {
        abortEarly: false,
      });
      console.log(body);
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map((item) => {
          return [item.path, item.message];
        }),
      );

      req.flash("errors", errors);
      req.flash("old", req.body);
    }

    return res.redirect("/dang-nhap");
  },
  handleLogout: (req, res) => {
    delete req.session.userLogin;
    return res.redirect("/users");
  },
};

export default authController;

/*
Middleware
Session
Validate
*/
