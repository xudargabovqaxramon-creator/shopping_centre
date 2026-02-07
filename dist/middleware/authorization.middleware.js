import jwt from "jsonwebtoken";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
export const authMiddleware = (req, res, next) => {
    try {
        const access_token = req.cookies?.access_token;
        if (!access_token) {
            throw CustomErrorHandler.UnAuthorized("Access token not found");
        }
        const decoded = jwt.verify(access_token, process.env.SECRETKY);
        req.user = decoded;
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=authorization.middleware.js.map