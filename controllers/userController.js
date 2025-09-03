const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Users, Posts } = require("../models");

const register = async (req, res) => {
  let { username, password } = req.body;

  let hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  let user = await Users.create({
    username,
    password: hashedPassword,
  });
  res.status(200).json({ username: user.username, message: "User Registered" });
};

const login = async (req, res) => {
  let user = await Users.findOne({
    where: { username: req.body.username },
  });
  console.log("user::::", user);

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  let isPasswordMatched = bcrypt.compareSync(req.body.password, user.password);
  if (!isPasswordMatched) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  const accessToken = jwt.sign(
    { username: user.username, id: user.id },
    "secret_key"
  );
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
  });
  res.status(200).json({ user, message: "Logged In" });
};

const getUserProfile = async (req, res) => {
  let user = await Users.findByPk(req.user.id, {
    attributes: { exclude: ["password"] },
    include: [Posts],
  });

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  res.status(200).json({ profile: user });
};

module.exports = {
  register,
  login,
  getUserProfile,
};
