import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

// Protected Admin route to get all users
router.get("/", authenticate, isAdmin, getAllUsers);

export default router;
