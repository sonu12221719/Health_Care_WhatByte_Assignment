import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  assignDoctor,
  getAllMappings,
  getDoctorsByPatient,
  deleteMapping,
} from "../controllers/mapping.controller.js";

const router = express.Router();

router.post("/", authenticate, assignDoctor);
router.get("/", authenticate, getAllMappings);
router.get("/:patientId", authenticate, getDoctorsByPatient);
router.delete("/:id", authenticate, deleteMapping);

export default router;
