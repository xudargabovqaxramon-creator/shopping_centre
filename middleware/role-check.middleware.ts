import type { Response, NextFunction } from "express";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
import type { AuthRequest } from "./authorization.middleware.js";

export const adminMiddleware = (req: AuthRequest,res: Response,next: NextFunction) => {
  try {
    // authMiddleware oldin ishlagan bo‘lishi shart
    if (!req.user) {
      throw CustomErrorHandler.UnAuthorized("Unauthorized");
    }

    const role = (req.user as any).role;

    if (!["admin", "superadmin"].includes(role)) {
      throw CustomErrorHandler.Forbidden(
        "You are not admin or superadmin"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};
