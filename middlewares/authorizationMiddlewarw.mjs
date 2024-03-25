import jwt from "jsonwebtoken";

async function authorizeRoles(req, res, next) {
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
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ error: "Token verification failed" });
    }
  } else {
    res.status(401).json({ error: "Authorization header is missing or invalid" });
  }
};
export default authorizeRoles;