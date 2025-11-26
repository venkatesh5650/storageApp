import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to protect private routes using JWT authentication
export const protect = async (req, res, next) => {
  let token = null;

  // Extract token from Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Block request if token is missing
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    // Verify token and attach user to request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch {
    return res.status(401).json({ message: "Token failed" });
  }
};
