import {Router} from "express"
import { createProduct, deleteProduct, getoneProduct, getProducts, updateProduct } from "../controller/product.controller.js"
import { authMiddleware } from "../middleware/authorization.middleware.js"
import { adminMiddleware } from "../middleware/role-check.middleware.js"
import { validateCreateProduct, validateupdateProduct } from "../middleware/product.validate.js"
const ProductRouter= Router()


ProductRouter.get("/get_all_products",authMiddleware, getProducts)
ProductRouter.get("/get_one_product/:id", authMiddleware, getoneProduct)
ProductRouter.post("/create_product",authMiddleware,adminMiddleware,validateCreateProduct, createProduct)
ProductRouter.put("/update_product/:id",authMiddleware,adminMiddleware,validateupdateProduct,updateProduct)
ProductRouter.delete("/delete_pdt/:id",authMiddleware,adminMiddleware,deleteProduct)

export default ProductRouter