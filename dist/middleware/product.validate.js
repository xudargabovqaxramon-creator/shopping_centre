import { createProductSchema, updateProductSchema } from "../validator/product.validate.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
export const validateCreateProduct = (req, res, next) => {
    const { error, value } = createProductSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        return next(CustomErrorHandler.BadRequest("Validation error", error.details.map((e) => e.message)));
    }
    req.body = value;
    next();
};
export const validateupdateProduct = (req, res, next) => {
    const { error, value } = updateProductSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        return next(CustomErrorHandler.BadRequest("Validation error", error.details.map((e) => e.message)));
    }
    req.body = value;
    next();
};
//# sourceMappingURL=product.validate.js.map