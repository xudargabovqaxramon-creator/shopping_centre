import { Category } from "../model/category.model.js";
import { Product } from "../model/product.model.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll({
            include: Category,
        });
        res.status(200).json(products);
    }
    catch (error) {
        next(error);
    }
};
export const getoneProduct = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const product = await Product.findByPk(id);
        if (!product) {
            throw CustomErrorHandler.NotFound("Product not found");
        }
        res.status(200).json(product);
    }
    catch (error) {
        next(error);
    }
};
export const createProduct = async (req, res, next) => {
    try {
        const { title, description, price, image, quantity, category_id } = req.body;
        const category = await Category.findByPk(category_id);
        if (!category) {
            throw CustomErrorHandler.NotFound("Category not found");
        }
        await Product.create({
            title,
            description,
            price,
            quantity,
            image,
            category_id,
        });
        res.status(201).json({ message: "Product created" });
    }
    catch (error) {
        next(error);
    }
};
export const updateProduct = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const { title, price, description, image, quantity, category_id, } = req.body;
        const product = await Product.findByPk(id);
        if (!product) {
            throw CustomErrorHandler.NotFound("Product not found");
        }
        await product.update({
            title,
            price,
            description,
            image,
            quantity,
            category_id,
        });
        res.status(200).json({
            message: "Product updated successfully",
            product,
        });
    }
    catch (error) {
        next(error);
    }
};
export const deleteProduct = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const product = await Product.findByPk(id);
        if (!product) {
            throw CustomErrorHandler.NotFound("Product not found");
        }
        await product.destroy();
        res.status(200).json({ message: "Product deleted" });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=product.controller.js.map