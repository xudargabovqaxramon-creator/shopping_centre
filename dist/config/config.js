import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();
const sequelize = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
});
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to DB");
        await sequelize.sync({ force: true });
    }
    catch (error) {
        console.error("DB error:", error.message);
    }
};
export default sequelize;
//# sourceMappingURL=config.js.map