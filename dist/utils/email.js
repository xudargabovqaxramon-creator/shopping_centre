import nodemailer from "nodemailer";
import { CustomErrorHandler } from "./custom-error-handler.js";
export const emailSender = async (code, email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "xudargabovqaxramon@gmail.com",
                pass: process.env.APP_KY,
            },
        });
        await transporter.sendMail({
            from: "xudargabovqaxramon@gmail.com",
            to: email,
            subject: "market 3.0 verification",
            text: "Ushbu xabarda tasdiqlash kodi berilgan",
            html: `<b style="color:blue; font-size:20px;">${code}</b>`,
        });
    }
    catch (error) {
        throw CustomErrorHandler.BadRequest(error.message);
    }
};
//# sourceMappingURL=email.js.map