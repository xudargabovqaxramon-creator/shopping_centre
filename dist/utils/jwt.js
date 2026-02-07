import jwt from "jsonwebtoken";
import { CustomErrorHandler } from "./custom-error-handler.js";
export const accessToken = (payload) => {
    try {
        const secret = process.env.SECRETKY;
        if (!secret) {
            throw new Error("ACCESS TOKEN secret is not defined");
        }
        return jwt.sign(payload, secret, {
            expiresIn: "25m",
        });
    }
    catch (error) {
        throw CustomErrorHandler.BadRequest(error.message);
    }
};
export const refreshToken = (payload) => {
    try {
        const secret = process.env.REFRESH_SECRET;
        if (!secret) {
            throw new Error("REFRESH TOKEN secret is not defined");
        }
        return jwt.sign(payload, secret, {
            expiresIn: "15d",
        });
    }
    catch (error) {
        throw CustomErrorHandler.BadRequest(error.message);
    }
};
//# sourceMappingURL=jwt.js.map