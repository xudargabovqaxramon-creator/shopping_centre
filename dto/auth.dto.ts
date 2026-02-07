// REGISTER
export interface RegisterDto {
  user_name: string;
  full_name: string;
  email: string;
  password: string;
}

// VERIFY OTP
export interface VerifyDto {
  email: string;
  otp: string;
}

// LOGIN
export interface LoginDto {
  email: string;
  password: string;
}

// RESEND OTP
export interface ResendOtpDto {
  email: string;
}
