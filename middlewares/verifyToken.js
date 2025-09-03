const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("req.cookies.accessToken:", req.cookies.accessToken);
  let token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ message: "No Token Provided" });
  }

  try {
    let decoded = jwt.verify(token, "secret_key");
    req.user = decoded;
    console.log("req.user :", req.user);

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = {
  verifyToken,
};
