import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { Auth } from "../model/auth.model.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";
import { accessToken, refreshToken } from "../utils/jwt.js";
import { emailSender } from "../utils/email.js";
import type { LoginDto, RegisterDto, VerifyDto } from "../dto/auth.dto.js";
import { sendTokens } from "../utils/send-token.js";

//================= REGISTER
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dto = req.body as RegisterDto;

    const foundedUser = await Auth.findOne({
      where: { email: dto.email },
    });

    if (foundedUser) {
      throw CustomErrorHandler.Conflict("User already exists");
    }

    const hashedPassword = await bcrypt.hash(dto.password, 12);

    const otp = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    const otpTime = Date.now() + 2 * 60 * 1000;

    await Auth.create({
      user_name: dto.user_name,
      full_name: dto.full_name,
      email: dto.email,
      password: hashedPassword,
      otp,
      otpTime,
    });

    await emailSender(otp, dto.email);

    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    next(error);
  }
};

//================= VERIFY OTP 
export const verify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dto = req.body as VerifyDto;

    const user = await Auth.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw CustomErrorHandler.NotFound("User not found");
    }

    if (!user.otpTime || user.otpTime < Date.now()) {
      throw CustomErrorHandler.BadRequest("OTP expired");
    }

    if (user.otp !== dto.otp) {
      throw CustomErrorHandler.BadRequest("Wrong OTP");
    }

    await user.update({
      isVerified: true,
      otp: null,
      otpTime: null,
    });

    const payload = {
      id: user.id,
      user_name: user.user_name,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
    };

    const token = sendTokens(res, payload)

    res.status(200).json({
      message: "Verified successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};

// ================= RESEND OTP
export const resendCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body as { email: string };

    const user = await Auth.findOne({ where: { email } });

    if (!user) {
      throw CustomErrorHandler.NotFound("User not found");
    }

    const otp = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    const otpTime = Date.now() + 2 * 60 * 1000;

    await user.update({ otp, otpTime });

    await emailSender(otp, email);

    res.status(200).json({
      message: "OTP resent successfully",
    });
  } catch (error) {
    next(error);
  }
};

//  ================= LOGIN
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dto = req.body as LoginDto;

    const user = await Auth.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw CustomErrorHandler.NotFound("User not found");
    }

    if (!user.isVerified) {
      throw CustomErrorHandler.UnAuthorized("Account not verified");
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw CustomErrorHandler.UnAuthorized("Invalid password");
    }

    const payload = {
      id: user.id,
      user_name: user.user_name,
      email: user.email,
      role: user.role,
    };

    const token = sendTokens(res, payload)

    res.status(200).json({
      message: "Login success",
      token,
    });
  } catch (error) {
    next(error);
  }
};
