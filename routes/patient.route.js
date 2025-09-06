import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
    createPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient,
} from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/", authenticate, createPatient);
router.get("/", authenticate, getPatients);
router.get("/:id", authenticate, getPatientById);
router.put("/:id", authenticate, updatePatient);
router.delete("/:id", authenticate, deletePatient);

export default router;
