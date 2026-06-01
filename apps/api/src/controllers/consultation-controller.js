import { Consultation } from "../models/Consultation.js";

export async function createConsultation(req, res) {
  const consultation = await Consultation.create(req.body);
  res.status(201).json({ success: true, data: consultation });
}

export async function getConsultations(req, res) {
  const consultations = await Consultation.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: consultations });
}
