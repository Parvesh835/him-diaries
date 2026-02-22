import express from "express";
import {
  addGalleryItem,
  getGalleryItems,
  deleteGalleryItem,
  updateGalleryItem,
} from "../controllers/gallery.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

// Public route to get all items
router.get("/", getGalleryItems);

// Protected Admin route to add item
router.post("/", authenticate, isAdmin, addGalleryItem);
router.put("/:id", authenticate, isAdmin, updateGalleryItem);
router.delete("/:id", authenticate, isAdmin, deleteGalleryItem);

export default router;
