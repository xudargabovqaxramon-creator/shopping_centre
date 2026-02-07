import { Model } from "sequelize";
export declare class Auth extends Model {
    id: number;
    user_name: string;
    full_name: string;
    email: string;
    password: string;
    avatar: string | null;
    role: "user" | "admin";
    otp: string | null;
    isVerified: boolean;
    otpTime: number | null;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=auth.model.d.ts.map