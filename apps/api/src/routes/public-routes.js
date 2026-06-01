import { Router } from "express";
import { asyncHandler } from "../middleware/async-handler.js";
import { createLead } from "../controllers/contact-controller.js";
import { createConsultation } from "../controllers/consultation-controller.js";
import { subscribeNewsletter } from "../controllers/newsletter-controller.js";
import { getBlogBySlug, listBlogs } from "../controllers/blog-controller.js";
import { listTestimonials } from "../controllers/testimonial-controller.js";
import { listServices } from "../controllers/service-controller.js";
import { listCaseStudies } from "../controllers/case-study-controller.js";

const router = Router();

router.post("/contact", asyncHandler(createLead));
router.post("/consultations", asyncHandler(createConsultation));
router.post("/newsletter", asyncHandler(subscribeNewsletter));
router.get("/blogs", asyncHandler(listBlogs));
router.get("/blogs/:slug", asyncHandler(getBlogBySlug));
router.get("/testimonials", asyncHandler(listTestimonials));
router.get("/services", asyncHandler(listServices));
router.get("/case-studies", asyncHandler(listCaseStudies));

export { router as publicRoutes };
