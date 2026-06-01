import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    coverImage: { type: String, trim: true },
    published: { type: Boolean, default: false },
    tags: [{ type: String }]
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
