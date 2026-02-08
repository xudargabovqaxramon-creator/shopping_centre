import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
import type { TokenPayload } from "../utils/jwt.js";

export interface AuthUserPayload {
  id: number;
  role: string;
  email: string;
}

export interface AuthRequest extends Request {
  user?: AuthUserPayload;
}

export const authMiddleware = (req: AuthRequest,res: Response,next: NextFunction) => {
  try {
    const access_token = req.cookies?.access_token;

    if (!access_token) {
      throw CustomErrorHandler.UnAuthorized("Access token not found");
    }

    const decoded = jwt.verify(
      access_token,
      process.env.SECRETKY as string
    ) as TokenPayload;

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};
