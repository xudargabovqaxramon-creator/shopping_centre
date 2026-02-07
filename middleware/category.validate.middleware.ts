import type { NextFunction, Request, Response } from "express";
import { createCategorySchema } from "../validator/categore.validate.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";


export const validateCreateCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, value } = createCategorySchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    return next(
      CustomErrorHandler.BadRequest(
        "Validation error",
        error.details.map((e) => e.message)
      )
    );
  }

  req.body = value;
  next();
};