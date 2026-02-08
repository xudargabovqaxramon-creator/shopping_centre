import type { Request, Response, NextFunction } from "express";
export interface AuthUserPayload {
    id: number;
    role: string;
    email: string;
}
export interface AuthRequest extends Request {
    user?: AuthUserPayload;
}
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authorization.middleware.d.ts.map