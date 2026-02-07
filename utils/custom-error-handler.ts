export class CustomErrorHandler extends Error {
  status: number;
  errors?: any;
  isCustom: boolean;

  constructor(status: number, message: string, errors: any = null) {
    super(message);
    this.status = status;
    this.errors = errors;
    this.isCustom = true;

    Object.setPrototypeOf(this, CustomErrorHandler.prototype);
  }

  static UnAuthorized(message: string, errors: any = []) {
    return new CustomErrorHandler(401, message, errors);
  }

  static BadRequest(message: string, errors: any = []) {
    return new CustomErrorHandler(400, message, errors);
  }

  static NotFound(message: string, errors: any = []) {
    return new CustomErrorHandler(404, message, errors);
  }

  static Forbidden(message: string, errors: any = []) {
    return new CustomErrorHandler(403, message, errors);
  }

  static Conflict(message: string, errors: any = []) {
    return new CustomErrorHandler(409, message, errors);
  }
}
