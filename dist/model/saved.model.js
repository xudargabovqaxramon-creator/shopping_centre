import { Model, DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import { Product } from "./product.model.js";
import { Auth } from "./auth.model.js";
export class Saved extends Model {
}
Saved.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "saved",
    sequelize,
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["userId", "productId"], // duplicate save bo‘lmasin
        },
    ],
});
Auth.hasMany(Saved, { foreignKey: "userId" });
Saved.belongsTo(Auth, { foreignKey: "userId" });
Product.hasMany(Saved, { foreignKey: "productId" });
Saved.belongsTo(Product, { foreignKey: "productId" });
//# sourceMappingURL=saved.model.js.map