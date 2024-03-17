// authMiddleware.js
import bcrypt from  "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.mjs";

export const authenticateToken = async (req, res, next) => {
  try {
    const { username, password,roles } = req.body;
    const user = await User.findOne({ username, password,roles });

    if(user &&(await bcrypt.compare(password,user.password))){
    const accessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "15m" }
    );
    res.status(200).json({accessToken});
    
    }
 } 
 catch (error) {
  res.status(401).json({ message: 'Invalid credentials' });
}

};
export default authenticateToken;