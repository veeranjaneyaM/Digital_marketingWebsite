import { Lead } from "../models/Lead.js";

export async function createLead(req, res) {
  const lead = await Lead.create(req.body);
  res.status(201).json({ success: true, data: lead });
}

export async function getLeads(req, res) {
  const leads = await Lead.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: leads });
}
