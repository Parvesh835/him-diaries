import mongoose from "mongoose";

const districtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    img: {
      type: String, // Main card image
      required: true,
    },
    desc: {
      type: String, // Short description for the card
      required: true,
    },
    // Extended Statistics
    area: {
      type: String,
    },
    population: {
      type: String,
    },
    tehsils: {
      type: String,
    },
    highestPeak: {
      type: String,
    },
    // Flexible Content Sections (e.g., History, Geography, Demographics)
    sections: [
      {
        title: String,
        content: String,
      },
    ],
    // Attractions / Places to Visit
    attractions: [
      {
        name: String,
        img: String,
        desc: String,
      },
    ],
  },
  { timestamps: true },
);

export const District = mongoose.model("District", districtSchema);
