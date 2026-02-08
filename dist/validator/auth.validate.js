import Joi from "joi";
export const registerSchema = Joi.object({
    user_name: Joi.string().required(),
    full_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});
//# sourceMappingURL=auth.validate.js.map