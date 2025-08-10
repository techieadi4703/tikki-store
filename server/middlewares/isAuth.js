import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let token = req.cookies.tokenCookie;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verifyToken.id;
    next();
  } catch (error) {
    console.log("isAuth error", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuth;
