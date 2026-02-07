import { CustomErrorHandler } from "../utils/custom-error-handler.js";
import { Category } from "../model/category.model.js";
import { Product } from "../model/product.model.js";
export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    }
    catch (error) {
        next(error);
    }
};
export const getOneCategory = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const category = await Category.findByPk(id, {
            include: Product,
        });
        if (!category) {
            throw CustomErrorHandler.NotFound("Category not found");
        }
        res.status(200).json(category);
    }
    catch (error) {
        next(error);
    }
};
export const createCategory = async (req, res, next) => {
    try {
        const { name, image } = req.body;
        if (Object.keys(req.body).length > 2) {
            throw CustomErrorHandler.BadRequest("Extra fields not allowed");
        }
        await Category.create({ name, image });
        res.status(201).json({ message: "Category created" });
    }
    catch (error) {
        next(error);
    }
};
export const updateCategory = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const { name, image } = req.body;
        const category = await Category.findByPk(id);
        if (!category) {
            throw CustomErrorHandler.NotFound("Category not found");
        }
        if (Object.keys(req.body).length > 2) {
            throw CustomErrorHandler.BadRequest("Extra fields not allowed");
        }
        await category.update({
            name,
            image,
        });
        res.status(200).json({
            message: "Category updated successfully",
            category,
        });
    }
    catch (error) {
        next(error);
    }
};
export const deleteCategory = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const category = await Category.findByPk(id);
        if (!category) {
            throw CustomErrorHandler.NotFound("Category not found");
        }
        await category.destroy();
        res.status(200).json({ message: "Category deleted" });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=category.controller.js.map