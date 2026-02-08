import { Order } from "../model/order.model.js";

(async () => {
  try {
    await Order.sync({ force: true });
    console.log("Order table drop + create bo'ldi");
    process.exit(0);
  } catch (error) {
    console.error("Reset error:", error);
    process.exit(1);
  }
})();
