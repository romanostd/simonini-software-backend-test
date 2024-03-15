import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
}

export const authMiddleware = (
  req: Request & { user?: TokenPayload },
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
