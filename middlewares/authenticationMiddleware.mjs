// authMiddleware.js
import bcrypt from  "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.mjs";

export const authenticateToken = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }
    const validPassword = await bcrypt.compare(password,user.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }
    console.log(user.username);
    console.log(user.roles);
    const accessToken = jwt.sign({userName:user.username, roles: user.roles }, process.env.ACCESS_TOKEN_SECERET,
      { expiresIn: "15m" }
    );
    console.log(accessToken);
    res.status(200).json({accessToken});
    
    }
 catch (error) {
  res.status(401).json({ message: 'Invalid credentials' });
}
};
export default authenticateToken;