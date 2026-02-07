import type { Response, NextFunction } from "express";
import type { AuthRequest } from "../middleware/authorization.middleware.js";
export declare const saveProduct: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getSavedProducts: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const removeSavedProduct: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=saved.controller.d.ts.map