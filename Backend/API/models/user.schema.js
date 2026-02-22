import mongoose from "mongoose";

const USER_ROLE = Object.freeze({
  USER: "USER",
  ADMIN: "ADMIN",
});
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: USER_ROLE,
      default: USER_ROLE.USER,
    },
  },
  { timestamps: true },
);
userSchema.index({ email: 1 });

export const User = mongoose.model("User", userSchema);
