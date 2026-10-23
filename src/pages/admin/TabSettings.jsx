import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Cloud, Database, CheckCircle2, AlertCircle, Save, ExternalLink, Globe, Upload, RotateCcw, Image as ImageIcon } from 'lucide-react';
import { firebaseConfig } from '../../firebase/config';
import { uploadFileToCloudinary } from '../../utils/cloudinary';

export const TabSettings = () => {
  const { portfolioData, updatePortfolioData, resetToDefaults } = usePortfolio();
  const cloudinary = portfolioData.cloudinary || {};
  const site = portfolioData.site || {};

  const [savedNotice, setSavedNotice] = useState(false);
  const [uploadingFavicon, setUploadingFavicon] = useState(false);

  const handleSiteChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      site: {
        ...prev.site,
        [field]: val
      }
    }));
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleFaviconUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingFavicon(true);
    try {
      const res = await uploadFileToCloudinary(file, cloudinary);
      handleSiteChange('faviconUrl', res.url);
    } catch (err) {
      console.error("Favicon upload failed:", err);
      alert("Favicon upload failed. Please try another file.");
    } finally {
      setUploadingFavicon(false);
    }
  };

  const handleCloudinaryChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      cloudinary: {
        ...prev.cloudinary,
        [field]: val
      }
    }));
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all site content back to original defaults?")) {
      resetToDefaults();
    }
  };

  const currentFavicon = site.faviconUrl || "/favicon.svg";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-600" />
          <span>Site Identity & Integrations</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Customize your browser favicon, website title, Cloudinary media storage, and Firebase cloud sync.
        </p>
      </div>

      {/* Favicon & Site Identity Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">Browser Favicon & Title</h3>
              <p className="text-xs text-slate-500">How your portfolio appears in browser tabs, bookmarks, and search results.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleSiteChange('faviconUrl', '/favicon.svg')}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to K7 Default Favicon</span>
          </button>
        </div>

        {/* Live Browser Tab Simulation Preview */}
        <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Live Browser Tab Preview
          </span>
          <div className="bg-white rounded-t-xl shadow-sm border border-slate-200/80 px-4 py-2.5 max-w-sm flex items-center gap-2.5">
            <img
              src={currentFavicon}
              alt="Favicon Preview"
              className="w-5 h-5 rounded-md object-contain shadow-xs border border-slate-200 bg-slate-900/5 p-0.5"
            />
            <span className="text-xs font-semibold text-slate-800 truncate">
              {site.title || "Kesavan | UI/UX Designer Portfolio"}
            </span>
            <span className="ml-auto text-slate-400 text-xs">×</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Browser Tab Title
            </label>
            <input
              type="text"
              value={site.title || ""}
              onChange={(e) => handleSiteChange('title', e.target.value)}
              placeholder="e.g. Kesavan - UI/UX Designer Portfolio"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">Displayed on browser tab header.</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Favicon Image URL (.svg / .png / .ico)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={site.faviconUrl || ""}
                onChange={(e) => handleSiteChange('faviconUrl', e.target.value)}
                placeholder="/favicon.svg or https://..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono text-xs"
              />
              <label className="flex-shrink-0 cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded-lg text-xs transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>{uploadingFavicon ? "Uploading..." : "Upload Icon"}</span>
                <input
                  type="file"
                  accept="image/svg+xml,image/png,image/x-icon,image/vnd.microsoft.icon,image/webp"
                  onChange={handleFaviconUpload}
                  className="hidden"
                />
              </label>
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">Supports SVG vector (recommended for crisp retina display), PNG, or ICO.</span>
          </div>
        </div>
      </div>

      {/* Cloudinary Configuration */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">Cloudinary Credentials</h3>
              <p className="text-xs text-slate-500">Unsigned upload allows direct client-side uploads without server backend.</p>
            </div>
          </div>

          <a
            href="https://cloudinary.com/console"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-sky-600 hover:underline flex items-center gap-1 font-semibold"
          >
            Open Cloudinary Console <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Cloud Name*
            </label>
            <input
              type="text"
              value={cloudinary.cloudName || ""}
              onChange={(e) => handleCloudinaryChange('cloudName', e.target.value.trim())}
              placeholder="e.g. k7-portfolio"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono text-xs"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">Your Cloudinary account cloud name.</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Upload Preset (Unsigned)*
            </label>
            <input
              type="text"
              value={cloudinary.uploadPreset || ""}
              onChange={(e) => handleCloudinaryChange('uploadPreset', e.target.value.trim())}
              placeholder="e.g. portfolio_preset"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono text-xs"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">Settings &rarr; Upload &rarr; Add unsigned upload preset.</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              API Key (Optional)
            </label>
            <input
              type="text"
              value={cloudinary.apiKey || ""}
              onChange={(e) => handleCloudinaryChange('apiKey', e.target.value.trim())}
              placeholder="e.g. 123456789012345"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono text-xs"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">Found on Cloudinary dashboard summary.</span>
          </div>
        </div>

        {savedNotice && (
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
            <CheckCircle2 className="w-4 h-4" /> Cloudinary settings updated.
          </div>
        )}
      </div>

      {/* Firebase Status Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900">Firebase Firestore Cloud Sync</h3>
            <p className="text-xs text-slate-500">Connected to your specified Firebase project.</p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs space-y-1.5 text-slate-600">
          <div><strong className="text-slate-800">Project ID:</strong> {firebaseConfig.projectId}</div>
          <div><strong className="text-slate-800">Auth Domain:</strong> {firebaseConfig.authDomain}</div>
          <div><strong className="text-slate-800">Storage Bucket:</strong> {firebaseConfig.storageBucket}</div>
          <div><strong className="text-slate-800">Sync Target:</strong> doc("portfolio/content")</div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 space-y-3">
        <h3 className="font-bold text-sm text-rose-800">Reset Content to Defaults</h3>
        <p className="text-xs text-rose-600 leading-relaxed">
          If you ever want to revert all text, projects, services, and theme colors back to Kesavan's initial portfolio template, click below.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg text-xs transition-colors cursor-pointer"
        >
          Reset to Factory Defaults
        </button>
      </div>
    </div>
  );
};

export default TabSettings;
