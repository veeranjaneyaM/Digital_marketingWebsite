import { Blog } from "../models/Blog.js";

export async function listBlogs(req, res) {
  const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
  res.json({ success: true, data: blogs });
}

export async function getBlogBySlug(req, res) {
  const blog = await Blog.findOne({ slug: req.params.slug }).lean();

  if (!blog) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }

  return res.json({ success: true, data: blog });
}

export async function createBlog(req, res) {
  const blog = await Blog.create(req.body);
  res.status(201).json({ success: true, data: blog });
}

export async function updateBlog(req, res) {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: blog });
}

export async function deleteBlog(req, res) {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).send();
}
