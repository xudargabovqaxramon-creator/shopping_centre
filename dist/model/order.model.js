import { Model, DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import { Auth } from "./auth.model.js";
export class Order extends Model {
}
Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "paid", "cancelled"),
        defaultValue: "pending",
    },
    firstName: DataTypes.STRING,
    company: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
}, {
    tableName: "orders",
    sequelize,
    timestamps: true,
});
Auth.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(Auth, { foreignKey: "userId" });
//# sourceMappingURL=order.model.js.map