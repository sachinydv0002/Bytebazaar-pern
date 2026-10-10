import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body ?? {};
  const configuredUsername = process.env.ADMIN_USERNAME;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  const jwtSecret = process.env.JWT_SECRET;

  if (!configuredUsername || !passwordHash || !jwtSecret) {
    console.error("Admin authentication is not configured");
    return res.status(503).json({ success: false, message: "Authentication is unavailable" });
  }

  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ success: false, message: "Username and password are required" });
  }

  let passwordMatches = false;
  try {
    passwordMatches = await bcrypt.compare(password, passwordHash);
  } catch (error) {
    console.error("Invalid ADMIN_PASSWORD_HASH configuration");
    return res.status(503).json({ success: false, message: "Authentication is unavailable" });
  }
  if (username !== configuredUsername || !passwordMatches) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const expiresIn = process.env.JWT_EXPIRES_IN || "1h";
  const token = jwt.sign({ role: "admin" }, jwtSecret, {
    subject: configuredUsername,
    expiresIn,
    algorithm: "HS256",
  });

  return res.status(200).json({ success: true, token, expiresIn });
});

export default router;
