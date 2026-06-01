import { cloudinary } from "../config/cloudinary.js";

export async function createUploadSignature(req, res) {
  const timestamp = Math.round(Date.now() / 1000);
  const folder = req.body.folder || "elivatx";

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder
    },
    process.env.CLOUDINARY_API_SECRET || ""
  );

  res.json({
    success: true,
    data: {
      timestamp,
      folder,
      signature,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY
    }
  });
}
