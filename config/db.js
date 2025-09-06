import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const sequelize=new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host:process.env.DB_HOST || "localhost",
        dialect:"postgres",
    }
)

export const connectDB=async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Database connected successfully!");
    }
    catch(error){
        console.error("Database failed to connect:", error.message);
        process.exit(1);
    }
}

export default sequelize;