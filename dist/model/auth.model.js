import sequelize from "../config/config.js";
import { DataTypes, Model } from "sequelize";
export class Auth extends Model {
}
Auth.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    otpTime: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: null,
    },
}, {
    sequelize,
    tableName: "users",
    timestamps: true,
});
//# sourceMappingURL=auth.model.js.map