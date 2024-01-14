const userModel = require("../models/user");
module.exports = {
  index: async (req, res, next) => {
    try {
      const { status, keyword } = req.query;
      const users = await userModel.all(status, keyword);
      res.render("users/index", { users });
    } catch (e) {
      return next(e);
    }
  },
};
