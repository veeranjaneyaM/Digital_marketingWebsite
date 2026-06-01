import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    source: { type: String, default: "website" },
    status: { type: String, default: "new" }
  },
  { timestamps: true }
);

export const Lead = mongoose.model("Lead", leadSchema);
