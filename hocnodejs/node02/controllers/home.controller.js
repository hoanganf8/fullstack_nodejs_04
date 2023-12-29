const homeController = {
  index: (req, res) => {
    const title = "Học <i>NodeJS</i> không khó";
    const content = "Học <i>Back-end</i> không khó";
    const status = true;
    const users = ["User 1", "User 2", "User 3"];
    const pageTitle = "Trang chủ - F8";
    res.render("home/index", {
      title,
      content,
      status,
      users,
      pageTitle,
    });
  },
  getProducts: function (req, res) {
    const pageTitle = "Sản phẩm - F8";
    res.render("home/products", {
      // layout: false,
      pageTitle,
    });
  },
};

export default homeController;
