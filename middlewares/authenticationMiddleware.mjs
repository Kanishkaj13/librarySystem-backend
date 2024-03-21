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
    if (!validPassword) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }
    const accessToken = jwt.sign({ userId: user._id,userName:user.name, roles: user.roles }, process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "15m" }
    );
    res.status(200).json({accessToken});
    
    }
 catch (error) {
  res.status(401).json({ message: 'Invalid credentials' });
}
};

export default authenticateToken;