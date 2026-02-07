import { accessToken, refreshToken } from "./jwt.js";
export const sendTokens = (res, payload) => {
    const access_token = accessToken(payload);
    const refresh_token = refreshToken(payload);
    res.cookie("access_token", access_token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 15,
    });
    res.cookie("refresh_token", refresh_token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 15,
    });
    return access_token;
};
//# sourceMappingURL=send-token.js.map