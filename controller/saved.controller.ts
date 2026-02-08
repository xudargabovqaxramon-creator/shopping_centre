import type { Response, NextFunction } from "express";
import { Saved } from "../model/saved.model.js";
import { Product } from "../model/product.model.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
import type { AuthRequest } from "../middleware/authorization.middleware.js";

export const saveProduct = async (req: AuthRequest,res: Response,next: NextFunction) => {
  try {
    const userId = Number(req.user!.id);
    const productId = Number(req.params.productId);


    
    if (isNaN(productId) || isNaN(userId)) {
      throw CustomErrorHandler.BadRequest("Invalid id");
    }
    const product = await Product.findByPk(productId);
    if (!product) {
      throw CustomErrorHandler.NotFound("Product not found");
    }

    await Saved.findOrCreate({
      where: { userId, productId },
    });

    res.status(201).json({
      message: "Product saved",
    });
  } catch (error) {
    next(error);
  }
};


export const getSavedProducts = async (req: AuthRequest,res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;

    const saved = await Saved.findAll({
      where: { userId },
      include: {
        model: Product,
      },
    });

    res.status(200).json(saved);
  } catch (error) {
    next(error);
  }
};

export const removeSavedProduct = async (req: AuthRequest,res: Response,next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const productId = Number(req.params.productId);

    const deleted = await Saved.destroy({
      where: { userId, productId },
    });

    if (!deleted) {
      throw CustomErrorHandler.NotFound("Saved product not found");
    }

    res.status(200).json({
      message: "Product removed from saved",
    });
  } catch (error) {
    next(error);
  }
};
