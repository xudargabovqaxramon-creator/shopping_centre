import Joi from "joi";
export const createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    categoryId: Joi.number().integer().required(),
});
export const updateProductSchema = Joi.object({
    name: Joi.string(),
    price: Joi.number().positive(),
    description: Joi.string(),
    image: Joi.string().uri(),
    categoryId: Joi.number().integer(),
});
//# sourceMappingURL=product.validate.js.map