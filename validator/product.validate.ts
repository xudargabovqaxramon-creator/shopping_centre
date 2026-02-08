import Joi from "joi";

export const createProductSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().positive().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
  quantity: Joi.number().integer().required(),
  category_id: Joi.number().integer().required(),
});

export const updateProductSchema = Joi.object({
  title: Joi.string(),
  price: Joi.number().positive(),
  description: Joi.string(),
  image: Joi.string().uri(),
  quantity: Joi.number().integer().required(),
  category_id: Joi.number().integer(),
});
