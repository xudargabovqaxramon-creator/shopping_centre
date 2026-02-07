import { Model, DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import { Auth } from "./auth.model.js";

export class Order extends Model {
  declare id: number;
  declare userId: number;
  declare totalPrice: number;
  declare status: "pending" | "paid" | "cancelled";

  declare firstName: string;
  declare company?: string;
  declare address: string;
  declare city: string;
  declare phone: string;
  declare email: string;
}

Order.init(
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
  },
  {
    tableName: "orders",
    sequelize,
    timestamps: true,
    
  }
);