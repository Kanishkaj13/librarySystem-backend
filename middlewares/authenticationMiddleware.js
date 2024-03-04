// authMiddleware.js
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticateUser = async (req, res, next) => {
  try {
    const { username, password,roles } = req.body;
    const user = await User.findOne({ username, password,roles });

    if(user &&(await bcrypt.compare(password,user.password))){
    const accessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "15m" }
    );
    res.status(200).json({accesToken});
    
    }
 } 
 catch (error) {
  res.status(401).json({ message: 'Invalid credentials' });
}

};
