// import { Request, Response, NextFunction } from "express";
// import { Order } from "../model/order.model.js";
// import { OrderItem } from "../model/order-item.model.js";
// import { Product } from "../model/product.model.js";
// import { CustomErrorHandler } from "../utils/custom-error-handler.js";

// export const createOrder = async (req:AuthRequest,res:Response, next:NextFunction) => {
//   try {
//     const userId = req.user!.id;
//     const {
//       firstName,
//       company,
//       address,
//       city,
//       phone,
//       email,
//       items, 
//     } = req.body;

//     let totalPrice = 0;

//     for (const item of items) {
//       const product = await Product.findByPk(item.productId);
//       if (!product) {
//         throw CustomErrorHandler.NotFound("Product not found");
//       }
//       totalPrice += product.price * item.quantity;
//     }

//     const order = await Order.create({
//       userId,
//       totalPrice,
//       firstName,
//       company,
//       address,
//       city,
//       phone,
//       email,
//     });

//     for (const item of items) {
//       const product = await Product.findByPk(item.productId);
//       await OrderItem.create({
//         orderId: order.id,
//         productId: item.productId,
//         quantity: item.quantity,
//         price: product.price,
//       });
//     }

//     res.status(201).json({
//       message: "Order created successfully",
//       orderId: order.id,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
