export interface TokenPayload {
    id: number;
    user_name: string;
    email: string;
    role: string;
}
export declare const accessToken: (payload: TokenPayload) => string;
export declare const refreshToken: (payload: TokenPayload) => string;
//# sourceMappingURL=jwt.d.ts.map