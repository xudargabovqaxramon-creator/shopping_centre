import { Category } from "../model/category.model.js";
(async () => {
    try {
        await Category.sync({ force: true });
        console.log("Category table drop + create bo'ldi");
        process.exit(0);
    }
    catch (error) {
        console.error("Reset error:", error);
        process.exit(1);
    }
})();
//# sourceMappingURL=reset-categories-table.js.map