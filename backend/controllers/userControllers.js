const User = require("../Models/userModels");
// _______________________________________________________
const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please fill all the field:)");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists:)");
  }
  const user = User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    req.status(201);
    req.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("faild to create user :)");
  }
};
// _______________________________________________________
module.exports= {registerUser};
