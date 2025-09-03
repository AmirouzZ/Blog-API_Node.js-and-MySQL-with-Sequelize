const { Likes } = require("../models");

const likePost = async (req, res) => {
  let like = await Likes.findOne({
    where: {
      UserId: req.user.id,
      PostId: req.body.postId,
    },
  });

  if (!like) {
    like = await Likes.create({
      UserId: req.user.id,
      PostId: req.body.postId,
    });
  }

  res.status(200).json({ like });
};

const getLikesOfPost = async (req, res) => {
  console.log(req.params.postId);
  let likes = await Likes.findAll({
    where: { PostId: req.params.postId },
  });
  res.status(200).json({ likes });
};

const dislikePost = async (req, res) => {
  await Likes.destroy({
    where: {
      id: req.params.likeId,
    },
  });
  res.status(200).json({ message: "Deleted" });
};

module.exports = {
  likePost,
  getLikesOfPost,
  dislikePost,
};
