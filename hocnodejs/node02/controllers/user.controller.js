const userController = {
  index: (req, res) => {
    //request
    const { status, keyword } = req.query;
    //validate
    //model
    //business logic
    //response: view, json, redirect, cookie
    //get cookie
    // const username = req.cookies.username;
    // console.log(username);
    // res.cookie("username", "", {
    //   maxAge: 0,
    // });
    // const user = JSON.parse(req.cookies.user_login);
    // console.log(user);
    const user = req.session.userLogin;
    console.log(user);
    res.render("users/index", { status, keyword, req });
  },
  add: (req, res) => {
    //Set cookie
    // res.set("Set-Cookie", "username=hoangan.web;path=/;max-age=3600;httpOnly");
    // res.cookie("username", "hoanganit19", {
    //   // path: "/",
    //   // maxAge: 86400000,
    //   httpOnly: true,
    // });
    const users = {
      name: "Hoàng An",
      email: "hoangan.web@gmail.com",
    };
    // res.cookie("user_login", JSON.stringify(users));
    req.session.userLogin = users;
    res.render("users/add", { req });
  },
  edit: (req, res) => {
    const id = req.params.id;
    res.render("users/edit", { id });
  },
  getOrders: (req, res) => {
    const orders = [
      {
        id: 1,
        name: "Order 1",
      },
      {
        id: 2,
        name: "Order 2",
      },
    ];
    res.status(201).json({
      status: "success",
      data: orders,
    });
    // res.render("orders/index");
  },
  getOrdersCompleted: (req, res) => {
    console.log(req.message);
    const apiKey = res.get("x-api-key");
    console.log(apiKey);
    res.render("orders/completed");
  },
  getOrdersCancel: (req, res) => {
    res.render("orders/cancel");
  },
};

export default userController;
