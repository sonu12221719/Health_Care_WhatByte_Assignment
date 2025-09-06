import { DataTypes } from "sequelize";
import sequelize from '../config/db.js';
import Doctor from './Doctor.model.js';
import Patient from './Patient.model.js';

const Mapping = sequelize.define("Mapping", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    }
}, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["doctorId", "patientId"]
        }
    ]
});

Doctor.belongsToMany(Patient, {
    through: Mapping,
    as: "Patients",
    foreignKey: "doctorId",
    otherKey: "patientId",
});

Patient.belongsToMany(Doctor, {
    through: Mapping,
    as: "Doctors",
    foreignKey: "patientId",
    otherKey: "doctorId",
});

export default Mapping;
