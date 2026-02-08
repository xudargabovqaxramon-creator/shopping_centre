import { Model, DataTypes } from "sequelize";
import sequelize from "../config/config.js";

export class Saved extends Model {
  declare id: number;
  declare userId: number;
  declare productId: number;
}

Saved.init(
  {
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
  },
  {
    tableName: "saved",
    sequelize,
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["userId", "productId"], 
      },
    ],
  }
);