// authorizationMiddleware.js
const authorizeRoles = (allowedRoles) => {
    return (req, res, next) => {
      const userRoles = req.user.roles;
  
      if (allowedRoles.some(role => userRoles.includes(role))) {
        next();
      } else {
        return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
      }
    };
  };
  
  module.exports = { authorizeRoles };
  