export class CustomErrorHandler extends Error {
    status;
    errors;
    isCustom;
    constructor(status, message, errors = null) {
        super(message);
        this.status = status;
        this.errors = errors;
        this.isCustom = true;
        Object.setPrototypeOf(this, CustomErrorHandler.prototype);
    }
    static UnAuthorized(message, errors = []) {
        return new CustomErrorHandler(401, message, errors);
    }
    static BadRequest(message, errors = []) {
        return new CustomErrorHandler(400, message, errors);
    }
    static NotFound(message, errors = []) {
        return new CustomErrorHandler(404, message, errors);
    }
    static Forbidden(message, errors = []) {
        return new CustomErrorHandler(403, message, errors);
    }
    static Conflict(message, errors = []) {
        return new CustomErrorHandler(409, message, errors);
    }
}
//# sourceMappingURL=custom-error-handler.js.map