import Doctor from "../models/Doctor.model.js";

export const createDoctor = async (req, res) => {
    try {
        const { name, age, specialty, experience } = req.body;

        if (!name || !age || !specialty) {
            return res.status(400).json({ message: "Name, age and specialty are required" });
        }

        const doctor = await Doctor.create({
            name,
            age,
            specialty,
            experience
        });

        res.status(201).json({
            message: "Doctor profile created successfully",
            doctor,
        });
    } catch (error) {
        console.error("Error creating doctor:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
};

export const getDoctorById = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ error: "Doctor not found" });
  res.json(doctor);
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, specialty, experience } = req.body;

    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    doctor.name = name ?? doctor.name;
    doctor.age = age ?? doctor.age;
    doctor.specialty = specialty ?? doctor.specialty;
    doctor.experience = experience ?? doctor.experience;

    await doctor.save();

    res.json({
      message: "Doctor details updated successfully",
      doctor,
    });
  } catch (error) {
    console.error("Error updating doctor:", error);
    res.status(500).json({ error: "Server error" });
  }
};


export const deleteDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ error: "Doctor not found" });

  await doctor.destroy();
  res.json({ message: "Doctor deleted" });
};
