
import type { AuthRequest } from "../middleware/authorization.middleware.js";
import { OrderItem } from "../model/order-item.js";
import { Order } from "../model/order.model.js";
import { Product } from "../model/product.model.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
import type { NextFunction, Request, Response } from "express";
export const createOrder = async (req: AuthRequest,res: Response,next: NextFunction)=> {
  try {
    if (!req.user) {
       throw CustomErrorHandler.UnAuthorized("Unauthorized");
    }
    const userId = req.user!.id;
    const {
      firstName,
      company,
      address,
      city,
      phone,
      email,
      items, 
    } = req.body;

    let totalPrice = 0;

    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (!product) {
        throw CustomErrorHandler.NotFound("Product not found");
      }
      totalPrice += product.price * item.quantity;
    }

    const order = await Order.create({
      userId,
      totalPrice,
      firstName,
      company,
      address,
      city,
      phone,
      email,
    });

    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (product) {
      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
      }
    }

    res.status(201).json({
      message: "Order created successfully",
      orderId: order.id,
    });
  } catch (error) {
    next(error);
  }
};


export const deleteOrder = async (req: AuthRequest,res: Response,next: NextFunction) => {
  try {
    if (!req.user) {
      throw CustomErrorHandler.UnAuthorized("Unauthorized");
    }

    const userId = req.user.id;
    const { orderId } = req.params;

    if (orderId) {
      throw CustomErrorHandler.NotFound("Orderid Not found")
    }
    const order = await Order.findByPk(orderId);

    if (!order) {
      throw CustomErrorHandler.NotFound("Order not found");
    }

    if (order.userId !== userId) {
      throw CustomErrorHandler.Forbidden("Access denied");
    }

    await OrderItem.destroy({
      where: { orderId: order.id },
    });

    await order.destroy();

    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
