import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config.js";
import { Category } from "./category.model.js";
export class Product extends Model {
}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "products",
    sequelize,
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["title"]
        }
    ]
});
Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });
//# sourceMappingURL=product.model.js.map