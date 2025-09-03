const router = require("express").Router();

const {
  likePost,
  getLikesOfPost,
  dislikePost,
} = require("../controllers/likeController");

const { verifyToken } = require("../middlewares/verifyToken");

router.post("/add", verifyToken, likePost);

router.get("/:postId", getLikesOfPost);

router.delete("/:likeId", verifyToken, dislikePost);

module.exports = router;
