import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { Auth } from "../model/auth.model.js";
import { CustomErrorHandler } from "../utils/custom-error-handler.js";

//========== UPDATE PROFILE 
export const updateMe = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const userId = (req as any).user.id as number;
    const { full_name, avatar } = req.body as {
      full_name?: string;
      avatar?: string;
    };

    const user = await Auth.findByPk(userId);
    if (!user) {
      throw CustomErrorHandler.NotFound("User not found");
    }

    await user.update({
      full_name: full_name ?? user.full_name,
      avatar: avatar ?? user.avatar,
    });

    const { password, ...safeUser } = user.get({ plain: true });

    res.status(200).json({
      message: "Profile updated",
      user: safeUser,
    });
  } catch (error) {
    next(error);
  }
};

//========== GET ME 
export const getMe = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const userId = (req as any).user.id as number;

    const user = await Auth.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      throw CustomErrorHandler.NotFound("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//========== LOGOUT 
export const logout = async (req: Request,res: Response, next: NextFunction) => {
  try {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");

    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    next(error);
  }
};

//========== FORGOT PASSWORD 
export const forgotPassword = async ( req: Request,res: Response,  next: NextFunction) => {
  try {
    const { email, otp, new_password } = req.body as {
      email: string;
      otp: string;
      new_password: string;
    };

    const user = await Auth.findOne({ where: { email } });
    if (!user) {
      throw CustomErrorHandler.UnAuthorized("User not found");
    }

    if (!user.otpTime || user.otpTime < Date.now()) {
      throw CustomErrorHandler.BadRequest("OTP expired");
    }

    if (user.otp !== otp) {
      throw CustomErrorHandler.BadRequest("Wrong OTP");
    }

    if (!user.isVerified) {
      throw CustomErrorHandler.UnAuthorized("User was not verified");
    }

    const hashedPassword = await bcrypt.hash(new_password, 12);

    await user.update({
      password: hashedPassword,
      otp: null,
      otpTime: null,
    });

    res.status(200).json({
      message: "Password successfully updated",
    });
  } catch (error) {
    next(error);
  }
};

//========== CHANGE PASSWORD 
export const changePassword = async (  req: Request,res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id as number;
    const { current_password, new_password, confirm_password } = req.body as {
      current_password: string;
      new_password: string;
      confirm_password: string;
    };

    if (new_password !== confirm_password) {
      throw CustomErrorHandler.BadRequest(
        "new_password and confirm_password must be same"
      );
    }

    if (new_password === current_password) {
      throw CustomErrorHandler.BadRequest(
        "New password must be different from current password"
      );
    }

    const user = await Auth.findByPk(userId);
    if (!user) {
      throw CustomErrorHandler.NotFound("User not found");
    }

    const isMatch = await bcrypt.compare(
      current_password,
      user.password
    );

    if (!isMatch) {
      throw CustomErrorHandler.UnAuthorized(
        "Current password is wrong"
      );
    }

    const hashedPassword = await bcrypt.hash(new_password, 12);
    await user.update({ password: hashedPassword });

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    next(error);
  }
};
