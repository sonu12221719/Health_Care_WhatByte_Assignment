import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Doctor = sequelize.define("Doctor", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    experience: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: true,
});

export default Doctor;
