import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    goals: { type: String, required: true, trim: true },
    status: { type: String, default: "requested" }
  },
  { timestamps: true }
);

export const Consultation = mongoose.model("Consultation", consultationSchema);
