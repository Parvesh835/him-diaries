import express from "express";
import {
  submitContact,
  getMessages,
} from "../controllers/contact.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

// Public route to submit message
router.post("/", submitContact);

// Protected Admin route to view messages
router.get("/", authenticate, isAdmin, getMessages);

export default router;
