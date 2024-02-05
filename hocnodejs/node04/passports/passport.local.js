const bcrypt = require("bcrypt");
const { User, Provider } = require("../models/index");
const LocalStrategy = require("passport-local").Strategy;
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    const provider = await Provider.findOne({ where: { name: "email" } });
    const user = await User.findOne({
      where: { email, provider_id: provider.id },
    });
    if (!user) {
      return done(null, false, {
        message: "Tài khoản không tồn tại",
      });
    }
    const result = bcrypt.compareSync(password, user.password);
    if (!result) {
      return done(null, false, {
        message: "Mật khẩu không chính xác",
      });
    }
    return done(null, user);
  },
);
