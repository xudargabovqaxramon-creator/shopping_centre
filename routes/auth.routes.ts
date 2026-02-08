import {Router} from "express"
import { login, register, resendCode, verify } from "../controller/auth.controller.js"
import { refreshToken } from "../utils/jwt.js"
import { validateRegister } from "../middleware/auth.middleware.js"
const AuthRouter= Router()


AuthRouter.post("/registr",validateRegister, register)
AuthRouter.post("/login",login)
AuthRouter.post("/verify",verify)
AuthRouter.get("/refresh",refreshToken)
AuthRouter.post("/resend_otp", resendCode)

export default AuthRouter