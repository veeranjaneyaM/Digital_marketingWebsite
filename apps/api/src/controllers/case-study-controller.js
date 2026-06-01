import { CaseStudy } from "../models/CaseStudy.js";

export async function listCaseStudies(req, res) {
  const caseStudies = await CaseStudy.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: caseStudies });
}

export async function createCaseStudy(req, res) {
  const caseStudy = await CaseStudy.create(req.body);
  res.status(201).json({ success: true, data: caseStudy });
}
