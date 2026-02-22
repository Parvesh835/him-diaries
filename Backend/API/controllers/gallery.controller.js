import { Gallery } from "../models/gallery.schema.js";

// Add a new gallery item (Admin only)
export const addGalleryItem = async (req, res) => {
  try {
    const { caption, img, district } = req.body;

    if (!caption || !img || !district) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Gallery({
      caption,
      img,
      district,
    });

    await newItem.save();
    res
      .status(201)
      .json({ message: "Gallery item added successfully", item: newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding gallery item", error: error.message });
  }
};

// Get all gallery items (Public)
export const getGalleryItems = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching gallery items", error: error.message });
  }
};
// Update a gallery item (Admin only)
export const updateGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Gallery.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    res.status(200).json({
      message: "Gallery item updated successfully",
      item: updatedItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating gallery item",
      error: error.message,
    });
  }
};

// Delete a gallery item (Admin only)
export const deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Gallery.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    res.status(200).json({ message: "Gallery item deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting gallery item",
      error: error.message,
    });
  }
};
