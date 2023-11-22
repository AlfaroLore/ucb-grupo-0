import { Router } from "express";
import {
  getPatients,
  createNewPatient,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/patients.controller";

const router = Router();

router.get("/patients", getPatients);

router.post("/patients", createNewPatient);

router.get("/patients/count", getTotalProducts);

router.get("/patients/:id", getProductById);

router.delete("/patients/:id", deleteProductById);

router.put("/patients/:id", updateProductById);

export default router;