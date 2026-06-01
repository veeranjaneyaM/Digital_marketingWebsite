import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin.js";

export async function requireAdmin(req, res, next) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = header.slice(7);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "change-me");
    const admin = await Admin.findById(payload.sub).lean();

    if (!admin) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.admin = admin;
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
}
