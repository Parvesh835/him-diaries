import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Gallery = mongoose.model("Gallery", gallerySchema);
