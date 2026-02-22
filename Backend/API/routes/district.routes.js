import express from "express";
import {
  createDistrict,
  getDistricts,
  getDistrictByName,
  updateDistrict,
  deleteDistrict,
} from "../controllers/district.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

// Public routes for reading data
router.get("/", getDistricts);
router.get("/:name", getDistrictByName);

// Protected Admin routes for modifying data
router.post("/", authenticate, isAdmin, createDistrict);
router.put("/:id", authenticate, isAdmin, updateDistrict);
router.delete("/:id", authenticate, isAdmin, deleteDistrict);

export default router;
