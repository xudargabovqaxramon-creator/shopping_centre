
import type { NextFunction, Request, Response } from "express"
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
import { Category } from "../model/category.model.js";
import { Product } from "../model/product.model.js";
import type { CreateCategoryDTO, UpdateCategoryDTO } from "../dto/category.dto.js";

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const getOneCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const category = await Category.findByPk(id, {
      include: Product,
    });

    if (!category) {
      throw CustomErrorHandler.NotFound("Category not found");
    }

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, image } = req.body as CreateCategoryDTO

    if (Object.keys(req.body).length > 2) {
  throw CustomErrorHandler.BadRequest("Extra fields not allowed");
}

    await Category.create({ name, image });

    res.status(201).json({ message: "Category created" });
  } catch (error) {
    next(error);
  }
};


export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const { name, image } = req.body as UpdateCategoryDTO;

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
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const category = await Category.findByPk(id);
    if (!category) {
      throw CustomErrorHandler.NotFound("Category not found");
    }

    await category.destroy();

    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    next(error);
  }
};
