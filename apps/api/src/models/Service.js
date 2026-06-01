import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    accent: { type: String, trim: true },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Service = mongoose.model("Service", serviceSchema);
