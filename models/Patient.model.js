import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Patient = sequelize.define("Patient", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        allowNull: false,
    },
    contact_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    medicalHistory: {
        type: DataTypes.TEXT,
    }
}, {
    freezeTableName: true,
    timestamps: true,
});

export default Patient;
