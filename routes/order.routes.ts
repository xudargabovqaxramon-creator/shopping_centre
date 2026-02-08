import {Router} from "express"
import { authMiddleware } from "../middleware/authorization.middleware.js"
import { createOrder, deleteOrder } from "../controller/order.controller.js"
const orderRouter= Router()


orderRouter.post("/order",authMiddleware,createOrder )
orderRouter.delete("/order_cancel/:orderId",authMiddleware,deleteOrder)

export default orderRouter