const { Posts, Likes, Comments } = require("../models");

const createPost = async (req, res) => {
  let { title, desc } = req.body;

  let post = await Posts.create({
    UserId: req.user.id,
    title,
    desc,
    username: req.user.username,
  });
  res.status(200).json({ post });
};

const getAllPosts = async (req, res) => {
  let posts = await Posts.findAll({ include: [Likes] });
  res.status(200).json({ posts });
};

const getPostsOfUser = async (req, res) => {
  let posts = await Posts.findAll({
    where: { UserId: req.params.userId },
    include: [Likes],
  });
  res.status(200).json({ posts });
};

const getPostById = async (req, res) => {
  let post = await Posts.findByPk(req.params.postId);
  if (!post) {
    return res.status(404).json({ message: "Post Not Found" });
  }
  res.status(200).json({ post });
};

const deletePost = async (req, res) => {
  await Posts.destroy({
    where: {
      id: req.params.postId,
    },
  });
  res.status(200).json({ message: "Deleted" });
};

const updatePost = async (req, res) => {
  await Posts.update(req.body, {
    where: {
      id: req.params.postId,
    },
  });
  res.status(200).json({ message: "Updated" });
};

module.exports = {
  createPost,
  getPostById,
  getAllPosts,
  deletePost,
  getPostsOfUser,
  updatePost,
};
