const isLogin = true;
const authMiddleware = (req, res, next) => {
  if (!isLogin) {
    return res.redirect("/dang-nhap");
  }
  req.message = "Học lập trình không khó";
  res.set("x-api-key", "123");
  next();
};

export default authMiddleware;
