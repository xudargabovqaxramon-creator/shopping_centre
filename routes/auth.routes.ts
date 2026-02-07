import {Router} from "express"
import { login, register, resendCode, verify } from "../controller/auth.controller.js"
import { refreshToken } from "../utils/jwt.js"
const AuthRouter= Router()


AuthRouter.post("/registr", register)
AuthRouter.post("/login",login)
AuthRouter.post("/verify",verify)
AuthRouter.get("/refresh",refreshToken)
AuthRouter.post("/resend_otp", resendCode)

export default AuthRouter