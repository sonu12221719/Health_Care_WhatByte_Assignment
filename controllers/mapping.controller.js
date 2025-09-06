import Mapping from "../models/Mapping.model.js";
import Patient from "../models/Patient.model.js";
import Doctor from "../models/Doctor.model.js";

export const assignDoctor = async (req, res) => {
  const { patientId, doctorId } = req.body;
  const mapping = await Mapping.create({ patientId, doctorId });
  res.status(201).json(mapping);
};

export const getAllMappings = async (req, res) => {
  const mappings = await Mapping.findAll();
  res.json(mappings);
};

export const getDoctorsByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = await Patient.findByPk(patientId, {
      include: [
        {
          model: Doctor,
          as: "Doctors",
          through: { attributes: [] }
        }
      ]
    });

    if (!patient) return res.status(404).json({ error: "Patient not found" });

    res.json(patient.Doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while retrieving doctors" });
  }
};


export const deleteMapping = async (req, res) => {
  const mapping = await Mapping.findByPk(req.params.id);
  if (!mapping) return res.status(404).json({ error: "Mapping not found" });

  await mapping.destroy();
  res.json({ message: "Mapping removed" });
};

