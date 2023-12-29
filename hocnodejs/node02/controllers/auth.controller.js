const getError = (errors, fieldName) => {
  if (errors.length) {
    errors = errors[0];
    return errors[fieldName];
  }
};
const authController = {
  login: (req, res) => {
    console.log("get form");
    // const msg = req.session.msg;
    // delete req.session.msg;
    // const msg = req.flash("msg");
    const errors = req.flash("errors");

    res.render("auth/login", {
      layout: "auth-layout",
      // msg,
      getError,
      errors,
    });
  },
  handleLogin: (req, res) => {
    const { email, password } = req.body;
    const errors = {};
    if (!email) {
      errors.email = "Vui lòng nhập email";
    }
    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    }
    req.flash("errors", errors);
    //Validate form
    //Check login --> Học sau
    //Thông báo kết quả
    /*
    - Thành công: Chuyển hướng về trang chủ, kèm thông báo
    - Không thành công: Chuyển hướng về trang đăng nhập
    */
    // req.session.msg = "Đăng nhập thất bại";
    // req.flash("msg", "Đăng nhập thành công");
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
