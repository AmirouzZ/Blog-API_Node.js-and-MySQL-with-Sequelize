const router = require("express").Router();

const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  getPostsOfUser,
  updatePost,
} = require("../controllers/postController");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/create", verifyToken, createPost);
router.get("/", getAllPosts);
router.get("/ofuser/:userId", getPostsOfUser);

router.get("/:postId", getPostById);
router.delete("/:postId", deletePost);
router.put("/:postId", updatePost);

module.exports = router;
