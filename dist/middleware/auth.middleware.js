import { registerSchema } from "../validator/auth.validate.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
export const validateRegister = (req, res, next) => {
    const { error, value } = registerSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        return next(CustomErrorHandler.BadRequest("Validation error", error.details.map((e) => e.message)));
    }
    req.body = value;
    next();
};
//# sourceMappingURL=auth.middleware.js.map