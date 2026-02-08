import type { NextFunction, Request, Response } from "express";
import { createProductSchema, updateProductSchema } from "../validator/product.validate.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";

export const validateCreateProduct = (  req: Request,res: Response, next: NextFunction) => {
  const { error, value } = createProductSchema.validate(req.body, {
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


export const validateupdateProduct = (req: Request,res: Response,next: NextFunction) => {
  const { error, value } = updateProductSchema.validate(req.body, {
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