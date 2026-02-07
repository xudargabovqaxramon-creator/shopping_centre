import type { Request, Response, NextFunction } from "express";
import type { TokenPayload } from "../utils/jwt.js";
export interface AuthRequest extends Request {
    user?: TokenPayload;
}
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authorization.middleware.d.ts.map