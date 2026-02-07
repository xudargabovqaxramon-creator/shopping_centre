
import { Product } from "../model/product.model.js";

(async () => {
  try {
    await Product.sync({ force: true });
    console.log("Product table drop + create bo'ldi");
    process.exit(0);
  } catch (error) {
    console.error("Reset error:", error);
    process.exit(1);
  }
})();
