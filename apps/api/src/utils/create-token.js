import jwt from "jsonwebtoken";

export function createToken(admin) {
  return jwt.sign(
    {
      sub: admin._id.toString(),
      email: admin.email
    },
    process.env.JWT_SECRET || "change-me",
    { expiresIn: "7d" }
  );
}
