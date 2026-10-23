/**
 * Cloudinary Upload Helper
 * Supports direct unsigned upload to Cloudinary.
 * Falls back cleanly to base64 Data URL if Cloudinary is not configured yet.
 */
export const uploadFileToCloudinary = async (file, cloudinaryConfig = {}) => {
  const { cloudName, uploadPreset } = cloudinaryConfig;

  // If Cloudinary settings are provided, upload to Cloudinary
  if (cloudName && uploadPreset) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "Cloudinary upload failed");
      }

      const data = await response.json();
      return {
        url: data.secure_url || data.url,
        publicId: data.public_id,
        format: data.format,
        bytes: data.bytes,
        name: file.name
      };
    } catch (err) {
      console.error("Cloudinary error, falling back to local file:", err);
      // Fall through to local reader
    }
  }

  // Fallback: Read as Base64 Data URL
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        url: reader.result,
        name: file.name,
        size: file.size,
        type: file.type,
        isLocal: true
      });
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
