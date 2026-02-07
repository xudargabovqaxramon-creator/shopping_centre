export interface RegisterDto {
    user_name: string;
    full_name: string;
    email: string;
    password: string;
}
export interface VerifyDto {
    email: string;
    otp: string;
}
export interface LoginDto {
    email: string;
    password: string;
}
export interface ResendOtpDto {
    email: string;
}
//# sourceMappingURL=auth.dto.d.ts.map