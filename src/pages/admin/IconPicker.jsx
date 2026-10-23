import React, { useState } from 'react';
import { AVAILABLE_ICONS, DynamicIcon } from '../../components/DynamicIcon';

export const IconPicker = ({
  value = "Sparkles",
  onChange,
  label = "Select Icon"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {label && <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center text-indigo-600">
            <DynamicIcon name={value} className="w-4 h-4" />
          </div>
          <span className="font-medium text-slate-800">{value || "None"}</span>
        </div>
        <span className="text-xs text-slate-400">Change ▾</span>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-64 max-h-56 overflow-y-auto p-2 bg-white rounded-xl shadow-xl border border-slate-200 grid grid-cols-4 gap-1.5">
          {AVAILABLE_ICONS.map((iconName) => (
            <button
              key={iconName}
              type="button"
              onClick={() => {
                onChange(iconName);
                setIsOpen(false);
              }}
              title={iconName}
              className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                value === iconName ? 'bg-indigo-100 text-indigo-700 font-bold' : 'text-slate-600'
              }`}
            >
              <DynamicIcon name={iconName} className="w-5 h-5" />
              <span className="text-[9px] truncate w-full text-center">{iconName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default IconPicker;
