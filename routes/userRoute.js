const router = require("express").Router();

const {
  register,
  login,
  getUserProfile,
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/register", register);

router.post("/login", login);

router.get("/profile", verifyToken, getUserProfile);

module.exports = router;
