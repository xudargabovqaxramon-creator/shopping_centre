import { Router } from "express";
import { getSavedProducts, removeSavedProduct, saveProduct } from "../controller/saved.controller.js";
import { authMiddleware } from "../middleware/authorization.middleware.js";
const SavedRouter = Router();
SavedRouter.post("/saved/:productId", authMiddleware, saveProduct);
SavedRouter.put("/get_saved", authMiddleware, getSavedProducts);
SavedRouter.delete("/remove/:productId", authMiddleware, removeSavedProduct);
export default SavedRouter;
//# sourceMappingURL=saved.routes.js.map