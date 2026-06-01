import { Router } from "express";
import { asyncHandler } from "../middleware/async-handler.js";
import { loginAdmin, seedAdmin } from "../controllers/auth-controller.js";

const router = Router();

router.post("/login", asyncHandler(loginAdmin));
router.post("/seed", asyncHandler(seedAdmin));

export { router as authRoutes };
