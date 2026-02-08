import { createCategorySchema, updateCategorySchema } from "../validator/categore.validate.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
export const validateCreateCategory = (req, res, next) => {
    const { error, value } = createCategorySchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        return next(CustomErrorHandler.BadRequest("Validation error", error.details.map((e) => e.message)));
    }
    req.body = value;
    next();
};
export const validateUpdateCategory = (req, res, next) => {
    const { error, value } = updateCategorySchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        return next(CustomErrorHandler.BadRequest("Validation error", error.details.map((e) => e.message)));
    }
    req.body = value;
    next();
};
//# sourceMappingURL=category.validate.middleware.js.map