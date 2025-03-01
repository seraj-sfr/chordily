import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils";

// JWT Authentication Middleware
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "Invalid token" });
  }

  // Attach user id to request object for further use
  req.body.userId = decoded.userId;

  next();
};
