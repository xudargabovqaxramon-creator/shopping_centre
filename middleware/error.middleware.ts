
import type { NextFunction, Request, Response } from "express";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";

export const errorMiddleware = (err: any,req: Request,res: Response,next: NextFunction) => {
  if (err instanceof CustomErrorHandler) {
    return res.status(err.status).json({
      message: err.message,
      errors: err.errors,
    });
  }

  // default error
  res.status(500).json({
    message: err.message || "Internal server error",
  });
};
