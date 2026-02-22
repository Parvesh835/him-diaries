import { District } from "../models/district.schema.js";

// Create a new district (Admin only)
export const createDistrict = async (req, res) => {
  try {
    const {
      name,
      img,
      desc,
      sections,
      attractions,
      area,
      population,
      tehsils,
      highestPeak,
    } = req.body;

    // Check if district already exists
    const existingDistrict = await District.findOne({ name });
    if (existingDistrict) {
      return res.status(400).json({ message: "District already exists" });
    }

    const newDistrict = new District({
      name,
      img,
      desc,
      area,
      population,
      tehsils,
      highestPeak,
      sections,
      attractions,
    });

    const savedDistrict = await newDistrict.save();
    res
      .status(201)
      .json({ message: "District created successfully", data: savedDistrict });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating district", error: error.message });
  }
};

// Get all districts (List view)
export const getDistricts = async (req, res) => {
  try {
    const districts = await District.find({});
    res.status(200).json(districts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching districts", error: error.message });
  }
};

// Get district by name (Detail view)
export const getDistrictByName = async (req, res) => {
  try {
    const { name } = req.params;
    const district = await District.findOne({ name });

    if (!district) {
      return res.status(404).json({ message: "District not found" });
    }

    res.status(200).json(district);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching district details",
      error: error.message,
    });
  }
};
// Update a district (Admin only)
export const updateDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDistrict = await District.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedDistrict) {
      return res.status(404).json({ message: "District not found" });
    }

    res.status(200).json({
      message: "District updated successfully",
      data: updatedDistrict,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating district",
      error: error.message,
    });
  }
};

// Delete a district (Admin only)
export const deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDistrict = await District.findByIdAndDelete(id);

    if (!deletedDistrict) {
      return res.status(404).json({ message: "District not found" });
    }

    res.status(200).json({ message: "District deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting district",
      error: error.message,
    });
  }
};
