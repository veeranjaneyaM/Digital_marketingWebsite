import bcrypt from "bcryptjs";
import { Admin } from "../models/Admin.js";
import { createToken } from "../utils/create-token.js";

export async function loginAdmin(req, res) {
  const admin = await Admin.findOne({ email: req.body.email });

  if (!admin) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const matches = await bcrypt.compare(req.body.password, admin.passwordHash);

  if (!matches) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  return res.json({
    success: true,
    token: createToken(admin),
    admin: {
      id: admin._id,
      name: admin.name,
      email: admin.email
    }
  });
}

export async function seedAdmin(req, res) {
  const passwordHash = await bcrypt.hash(req.body.password, 10);

  const admin = await Admin.create({
    name: req.body.name,
    email: req.body.email,
    passwordHash
  });

  res.status(201).json({
    success: true,
    data: { id: admin._id, email: admin.email }
  });
}
