import { Router } from "express";
import { asyncHandler } from "../middleware/async-handler.js";
import { requireAdmin } from "../middleware/auth.js";
import { createBlog, deleteBlog, updateBlog } from "../controllers/blog-controller.js";
import { getLeads } from "../controllers/contact-controller.js";
import { getConsultations } from "../controllers/consultation-controller.js";
import { createTestimonial } from "../controllers/testimonial-controller.js";
import { createService } from "../controllers/service-controller.js";
import { createCaseStudy } from "../controllers/case-study-controller.js";
import { createUploadSignature } from "../controllers/media-controller.js";

const router = Router();

router.use(requireAdmin);
router.get("/leads", asyncHandler(getLeads));
router.get("/consultations", asyncHandler(getConsultations));
router.post("/blogs", asyncHandler(createBlog));
router.patch("/blogs/:id", asyncHandler(updateBlog));
router.delete("/blogs/:id", asyncHandler(deleteBlog));
router.post("/testimonials", asyncHandler(createTestimonial));
router.post("/services", asyncHandler(createService));
router.post("/case-studies", asyncHandler(createCaseStudy));
router.post("/media/signature", asyncHandler(createUploadSignature));

export { router as adminRoutes };
