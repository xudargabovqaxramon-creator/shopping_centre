import type { AuthRequest } from "../middleware/authorization.middleware.js";
import type { NextFunction, Response } from "express";
export declare const createOrder: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteOrder: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=order.controller.d.ts.map