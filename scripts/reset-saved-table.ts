import { Saved } from "../model/saved.model.js";


(async () => {
  try {
    await Saved.sync({ force: true });
    console.log("Saved table drop + create bo'ldi");
    process.exit(0);
  } catch (error) {
    console.error("Reset error:", error);
    process.exit(1);
  }
})();
