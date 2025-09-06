import Patient from "../models/Patient.model.js";

export const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create({ ...req.body, userId: req.user.id });
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPatients = async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
};

export const getPatientById = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json(patient);
};

export const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ error: "Patient not found" });

    const {name, date_of_birth, gender, contact_number, medicalHistory} = req.body;

    patient.name = name ?? patient.name;
    patient.date_of_birth = date_of_birth ?? patient.date_of_birth;
    patient.gender = gender ?? patient.gender;
    patient.contact_number = contact_number ?? patient.contact_number;
    patient.medicalHistory = medicalHistory ?? patient.medicalHistory;

    console.log("Updated patient data:", patient.toJSON());
    await patient.save();

    res.json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while updating patient" });
  }
};


export const deletePatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ error: "Patient not found" });

  await patient.destroy();
  res.json({ message: "Patient deleted" });
};

