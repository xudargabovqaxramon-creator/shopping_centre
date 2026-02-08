import { Model, DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import { Order } from "./order.model.js";
export class OrderItem extends Model {
}
OrderItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: "order_items",
    sequelize,
    timestamps: false,
});
Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });
//# sourceMappingURL=order-item.js.map