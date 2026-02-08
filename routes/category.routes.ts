import {Router} from "express"
import { createCategory, deleteCategory, getCategories, getOneCategory, updateCategory } from "../controller/category.controller.js"
import { authMiddleware } from "../middleware/authorization.middleware.js"
import { adminMiddleware } from "../middleware/role-check.middleware.js"
import { validateCreateCategory, validateUpdateCategory } from "../middleware/category.validate.middleware.js"
const CategoryRouter= Router()


CategoryRouter.get("/get_all_categorys",authMiddleware, getCategories)
CategoryRouter.get("/get_one_category/:id",authMiddleware,getOneCategory)
CategoryRouter.post("/create_category",authMiddleware,adminMiddleware,validateCreateCategory,createCategory)
CategoryRouter.put("/update_category/:id",authMiddleware,adminMiddleware,validateUpdateCategory,updateCategory)
CategoryRouter.delete("/delete_cty/:id",authMiddleware,adminMiddleware,deleteCategory)

export default CategoryRouter