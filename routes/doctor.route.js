import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/", authenticate, createDoctor);
router.get("/", authenticate, getDoctors);
router.get("/:id", authenticate, getDoctorById);
router.put("/:id", authenticate, updateDoctor);
router.delete("/:id", authenticate, deleteDoctor);

export default router;
