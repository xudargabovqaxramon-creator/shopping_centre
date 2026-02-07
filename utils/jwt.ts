import jwt from "jsonwebtoken";
import { CustomErrorHandler } from "./custom-error-handler.js";


export interface TokenPayload {
  id: number;
  user_name: string;
  email: string;
  role: string;
}

export const accessToken = (payload: TokenPayload): string => {
  try {
    const secret = process.env.SECRETKY;
    if (!secret) {
      throw new Error("ACCESS TOKEN secret is not defined");
    }

    return jwt.sign(payload, secret, {
      expiresIn: "25m",
    });
  } catch (error: any) {
    throw CustomErrorHandler.BadRequest(error.message);
  }
};

export const refreshToken = (payload: TokenPayload): string => {
  try {
    const secret = process.env.REFRESH_SECRET;
    if (!secret) {
      throw new Error("REFRESH TOKEN secret is not defined");
    }

    return jwt.sign(payload, secret, {
      expiresIn: "15d",
    });
  } catch (error: any) {
    throw CustomErrorHandler.BadRequest(error.message);
  }
};
