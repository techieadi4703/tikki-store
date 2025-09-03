import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  try {
    let token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) { console.log("token error", error); return null; }
};

export const generateAdminToken = (email) => {
  try {
    let token = jwt.sign({ email }, process.env.ADMIN_ID, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) { console.log("token error", error); return null; }
};
