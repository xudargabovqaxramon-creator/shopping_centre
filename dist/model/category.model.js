import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config.js";
export class Category extends Model {
}
Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "categories",
    sequelize,
    timestamps: true,
});
//# sourceMappingURL=category.model.js.map