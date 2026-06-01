import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    quote: { type: String, required: true, trim: true },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Testimonial = mongoose.model("Testimonial", testimonialSchema);
