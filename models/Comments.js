module.exports = (sequlize, DataTypes) => {
  const Comments = sequlize.define("Comments", {
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
