import { CustomErrorHandler } from "../utils/custom-error-handler.js";
export const adminMiddleware = (req, res, next) => {
    try {
        // authMiddleware oldin ishlagan bo‘lishi shart
        if (!req.user) {
            throw CustomErrorHandler.UnAuthorized("Unauthorized");
        }
        const role = req.user.role;
        if (!["admin", "superadmin"].includes(role)) {
            throw CustomErrorHandler.Forbidden("You are not admin or superadmin");
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=role-check.middleware.js.map