import { Auth } from "../model/auth.model.js";
(async () => {
    try {
        await Auth.sync({ force: true });
        console.log("Auth table drop + create bo'ldi");
        process.exit(0);
    }
    catch (error) {
        console.error("Reset error:", error);
        process.exit(1);
    }
})();
//# sourceMappingURL=reset-auth-table.js.map