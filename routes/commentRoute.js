const router = require("express").Router();

const {
  addComment,
  getCommentsOfPost,
  deleteComment,
} = require("../controllers/commentController");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/add", verifyToken, addComment);

router.get("/:postId", getCommentsOfPost);

router.delete("/:commentId", verifyToken, deleteComment);

module.exports = router;
