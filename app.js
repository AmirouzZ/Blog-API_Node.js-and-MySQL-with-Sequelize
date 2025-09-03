const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const app = express();

const userRoutes = require("./routes/userRoute");
const postRoutes = require("./routes/postRoute");
const commentRoutes = require("./routes/commentRoute");
const likeRoutes = require("./routes/likeRoute");

// MiddleWares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/posts/", postRoutes);
app.use("/api/v1/comments/", commentRoutes);
app.use("/api/v1/likes/", likeRoutes);

app.use("/", (req, res) => {
  res.send("Hello");
});

module.exports = { app };
