export declare class CustomErrorHandler extends Error {
    status: number;
    errors?: any;
    isCustom: boolean;
    constructor(status: number, message: string, errors?: any);
    static UnAuthorized(message: string, errors?: any): CustomErrorHandler;
    static BadRequest(message: string, errors?: any): CustomErrorHandler;
    static NotFound(message: string, errors?: any): CustomErrorHandler;
    static Forbidden(message: string, errors?: any): CustomErrorHandler;
    static Conflict(message: string, errors?: any): CustomErrorHandler;
}
//# sourceMappingURL=custom-error-handler.d.ts.map