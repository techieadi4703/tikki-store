import jwt from "jsonwebtoken";

const isAdminAuth = async (req, res, next) => {
    console.log("HELLOISADMINAUTH")
  try {
    console.log(req.cookies,"COOKIES\n");
    let {token} = req.cookies;
    console.log(token,"TOKEN")
    if(!token) return res.status(401).json({ message: "Unauthorized,Not Admin" });
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if(!verifyToken) return res.status(401).json({ message: "Unauthorized,Not Admin,Invalid Token" });
    req.adminID = process.env.ADMIN_ID;
    next();
  } catch (error) {
    console.log("isAdminAuth error", error);
    return res.status(401).json({ message: "Unauthorized,Not Admin" });
  }
};

export default isAdminAuth;