import { Testimonial } from "../models/Testimonial.js";

export async function listTestimonials(req, res) {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: testimonials });
}

export async function createTestimonial(req, res) {
  const testimonial = await Testimonial.create(req.body);
  res.status(201).json({ success: true, data: testimonial });
}
