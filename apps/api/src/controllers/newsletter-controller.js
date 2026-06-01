import { NewsletterSubscriber } from "../models/NewsletterSubscriber.js";

export async function subscribeNewsletter(req, res) {
  const subscriber = await NewsletterSubscriber.findOneAndUpdate(
    { email: req.body.email },
    { $setOnInsert: { email: req.body.email, source: req.body.source || "website" } },
    { new: true, upsert: true }
  );

  res.status(201).json({ success: true, data: subscriber });
}
