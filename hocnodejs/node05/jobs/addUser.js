const { User } = require("../models/index");
module.exports = async (data) => {
  const user = await User.create(data);
  return user;
};

//Thêm user
// Input: user nào?
// Output: Thành công hay không?
