import { Auth } from "./auth.model.js";
import { Category } from "./category.model.js";
import { OrderItem } from "./order-item.js";
import { Order } from "./order.model.js";
import { Product } from "./product.model.js";
import { Saved } from "./saved.model.js";

//  RELATIONs
Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });


Auth.hasMany(Saved, { foreignKey: "userId" });
Saved.belongsTo(Auth, { foreignKey: "userId" });

Product.hasMany(Saved, { foreignKey: "productId" });
Saved.belongsTo(Product, { foreignKey: "productId" });

Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Auth.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(Auth, { foreignKey: "userId" });