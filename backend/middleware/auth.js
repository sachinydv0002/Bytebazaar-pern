import jwt from "jsonwebtoken";

const getJwtSecret = () => process.env.JWT_SECRET;

export const requireAdmin = (req, res, next) => {
  const authorization = req.get("authorization");
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length).trim()
    : null;

  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication required" });
  }

  const secret = getJwtSecret();
  if (!secret) {
    console.error("JWT_SECRET is not configured");
    return res.status(503).json({ success: false, message: "Authentication is unavailable" });
  }

  try {
    const payload = jwt.verify(token, secret, { algorithms: ["HS256"] });
    if (typeof payload !== "object" || payload.role !== "admin") {
      return res.status(403).json({ success: false, message: "Admin access required" });
    }

    req.admin = { username: payload.sub };
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
    console.error("JWT verification failed:", error);
    return res.status(401).json({ success: false, message: "Invalid authentication token" });
  }
};
