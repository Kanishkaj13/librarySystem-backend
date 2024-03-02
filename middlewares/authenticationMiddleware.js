// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticateUser = async (req, res, next) => {
  try {
    const { username, password,roles } = req.body;
    const user = await User.findOne({ username, password,roles });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "15m" });
  
    next();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const authorizeUser = (allowedRoles) => {
  return (req, res, next) => {
    const { role } = jwt.decode(res.locals.token);
    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeUser };
