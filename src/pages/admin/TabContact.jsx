import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import IconPicker from './IconPicker';

export const TabContact = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const contact = portfolioData.contact || {};
  const socials = contact.socials || [];

  const handleChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: val
      }
    }));
  };

  const handleSocialChange = (index, field, val) => {
    const updated = [...socials];
    updated[index] = { ...updated[index], [field]: val };
    handleChange('socials', updated);
  };

  const contactPresets = [
    { id: "preset1", title: "Preset 1: Modern Split", desc: "Left info cards + Right clean contact form" },
    { id: "preset2", title: "Preset 2: Floating Glass Card", desc: "Frosted-glass card with luminous background gradients" },
    { id: "preset3", title: "Preset 3: Minimal Centered", desc: "Centered hero style with direct email/phone tiles" },
    { id: "preset4", title: "Preset 4: Dark Studio Gradient", desc: "High-contrast dark UI/UX agency design" },
    { id: "preset5", title: "Preset 5: Bento Grid Creative", desc: "Modern Bento layout with availability status" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Mail className="w-5 h-5 text-indigo-600" />
          <span>Contact Section & Inquiries</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Configure direct contact details, 5 design presets, form settings, and social media channels.
        </p>
      </div>

      {/* Preset Selector */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>Select Design Preset (5 Layouts)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactPresets.map((p) => {
            const isSelected = (contact.preset || "preset1") === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleChange('preset', p.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected 
                    ? 'border-indigo-600 bg-indigo-50/60 shadow-sm' 
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-slate-900">{p.title}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-[11px] text-slate-500">{p.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
        <h3 className="text-base font-bold text-slate-800">Direct Contact Information</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">My Email</label>
            <input
              type="email"
              value={contact.email || ""}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="e.g. mrkesav7@gmail.com"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Call Me Now</label>
            <input
              type="text"
              value={contact.phone || ""}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="e.g. +91 9025646556"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Address</label>
            <input
              type="text"
              value={contact.address || ""}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="e.g. New Mexico 31134"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Section Badge</label>
            <input
              type="text"
              value={contact.badge || ""}
              onChange={(e) => handleChange('badge', e.target.value)}
              placeholder="e.g. Get in touch"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Section Title</label>
            <input
              type="text"
              value={contact.title || ""}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="e.g. Let's discuss your Project"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-bold"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Subtitle Message</label>
          <textarea
            rows="2"
            value={contact.subtitle || ""}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            placeholder="Have a project in mind or looking for a UI/UX Designer?..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-800">Social Media & Portfolios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((s, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <IconPicker
                value={s.icon}
                onChange={(icon) => handleSocialChange(idx, 'icon', icon)}
                label=""
              />
              <div className="flex-grow">
                <input
                  type="text"
                  value={s.url || ""}
                  onChange={(e) => handleSocialChange(idx, 'url', e.target.value)}
                  placeholder={`${s.name} Profile URL`}
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabContact;
