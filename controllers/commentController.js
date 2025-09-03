const { Comments } = require("../models");

const addComment = async (req, res) => {
  let { desc, postId } = req.body;

  let comment = await Comments.create({
    desc,
    PostId: postId,
    username: req.user.username,
  });
  res.status(200).json({ comment });
};

const getCommentsOfPost = async (req, res) => {
  console.log(req.params.postId);
  let comments = await Comments.findAll({
    where: { PostId: req.params.postId },
  });
  res.status(200).json({ comments });
};

const deleteComment = async (req, res) => {
  await Comments.destroy({
    where: {
      id: req.params.commentId,
    },
  });
  res.status(200).json({ message: "Deleted" });
};

module.exports = {
  addComment,
  getCommentsOfPost,
  deleteComment,
};
