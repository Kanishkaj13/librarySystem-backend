import jwt from "jsonwebtoken";

export const authorizeRoles=async(req, res, next)=> {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.toLowerCase().startsWith("bearer")) {
    token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (!decoded || !decoded.user) {
        res.status(401).json({ error: "Invalid token" });
        return;
      }
      const { type } = decoded.user;
      const allowedRoles = "admin" 
      const isAuthorized = allowedRoles.some(role => roles.includes(role));
      if (!isAuthorized) {
        res.status(403).json({ error: "Access forbidden. User does not have the required role." });
        return;
      }
      req.user = decoded.user;
      req.type= type;
      next();
    } catch (error) {
      res.status(401).json({ error: "Token verification failed" });
    }
  } else {
    res.status(401).json({ error: "Authorization header is missing or invalid" });
  }
};
export default authorizeRoles;