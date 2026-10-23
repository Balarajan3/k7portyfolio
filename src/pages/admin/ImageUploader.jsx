import React, { useState } from 'react';
import { Upload, CheckCircle2, Loader2, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import { uploadFileToCloudinary } from '../../utils/cloudinary';
import { usePortfolio } from '../../context/PortfolioContext';

export const ImageUploader = ({
  label = "Upload Image or File",
  currentValue = "",
  onUploadComplete,
  accept = "image/*,.pdf,.fig",
  helperText = "Supports direct Cloudinary upload or image URL."
}) => {
  const { portfolioData } = usePortfolio();
  const cloudinaryConfig = portfolioData.cloudinary || {};

  const [loading, setLoading] = useState(false);
  const [urlInput, setUrlInput] = useState(currentValue);
  const [successMsg, setSuccessMsg] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setSuccessMsg("");
    try {
      const res = await uploadFileToCloudinary(file, cloudinaryConfig);
      if (res && res.url) {
        setUrlInput(res.url);
        onUploadComplete(res.url, file.name);
        setSuccessMsg(res.isLocal ? "Uploaded locally" : "Uploaded to Cloudinary!");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUrlBlur = () => {
    if (urlInput !== currentValue) {
      onUploadComplete(urlInput);
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">{label}</label>}
      
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        {/* URL Text Input */}
        <div className="relative flex-grow w-full">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onBlur={handleUrlBlur}
            placeholder="Paste URL or upload below..."
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-500"
          />
          <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

        {/* Upload Button */}
        <label className="flex-shrink-0 cursor-pointer inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-200">
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
          ) : (
            <Upload className="w-4 h-4 text-indigo-600" />
          )}
          <span>{loading ? "Uploading..." : "Upload File"}</span>
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            disabled={loading}
          />
        </label>
      </div>

      {/* Preview Thumbnail if image */}
      {urlInput && (urlInput.startsWith('http') || urlInput.startsWith('data:image')) && (
        <div className="flex items-center gap-3 pt-2">
          <div className="w-14 h-14 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex-shrink-0">
            <img src={urlInput} alt="Preview" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs text-slate-500 truncate max-w-xs">{urlInput}</span>
        </div>
      )}

      {successMsg && (
        <div className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {successMsg}
        </div>
      )}

      {helperText && <p className="text-[11px] text-slate-400">{helperText}</p>}
    </div>
  );
};

export default ImageUploader;
