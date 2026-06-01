import { Service } from "../models/Service.js";

export async function listServices(req, res) {
  const services = await Service.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: services });
}

export async function createService(req, res) {
  const service = await Service.create(req.body);
  res.status(201).json({ success: true, data: service });
}
