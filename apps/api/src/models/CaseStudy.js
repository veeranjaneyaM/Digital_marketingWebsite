import mongoose from "mongoose";

const caseStudySchema = new mongoose.Schema(
  {
    client: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    challenge: { type: String, required: true, trim: true },
    outcome: { type: String, required: true, trim: true },
    metrics: [{ type: String }]
  },
  { timestamps: true }
);

export const CaseStudy = mongoose.model("CaseStudy", caseStudySchema);
