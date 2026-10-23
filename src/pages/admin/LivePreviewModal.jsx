import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  ExternalLink, 
  X, 
  RefreshCw,
  Sparkles
} from 'lucide-react';

export const LivePreviewModal = ({ isOpen, onClose }) => {
  const [device, setDevice] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [isLandscape, setIsLandscape] = useState(false);
  const [key, setKey] = useState(1);

  if (!isOpen) return null;

  const refreshPreview = () => {
    setKey(prev => prev + 1);
  };

  // Dimensions
  const getDeviceDimensions = () => {
    if (device === 'mobile') {
      return isLandscape ? { width: '740px', height: '375px' } : { width: '375px', height: '740px' };
    }
    if (device === 'tablet') {
      return isLandscape ? { width: '1024px', height: '768px' } : { width: '768px', height: '980px' };
    }
    return { width: '100%', height: '100%' };
  };

  const dims = getDeviceDimensions();

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col font-sans">
      {/* Top Controller Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3.5 flex items-center justify-between text-white flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="font-bold text-sm tracking-wide ml-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Responsive Live Viewport Sandbox</span>
          </span>
        </div>

        {/* Device Mode Switchers */}
        <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'desktop' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Desktop</span>
          </button>

          <button
            type="button"
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'tablet' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span>Tablet (768px)</span>
          </button>

          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'mobile' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile (375px)</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {device !== 'desktop' && (
            <button
              type="button"
              onClick={() => setIsLandscape(!isLandscape)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
              title="Rotate Device"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Rotate</span>
            </button>
          )}

          <button
            type="button"
            onClick={refreshPreview}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
            title="Reload Frame"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload</span>
          </button>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
            title="Open in new window"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 transition-colors ml-2"
            title="Close Preview"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Frame Viewport Container */}
      <div className="flex-grow overflow-auto p-4 sm:p-8 flex items-center justify-center bg-slate-900/60">
        <div 
          className={`transition-all duration-300 bg-white shadow-2xl overflow-hidden flex flex-col ${
            device === 'mobile' 
              ? 'rounded-[3rem] border-[12px] border-slate-800 relative' 
              : device === 'tablet' 
                ? 'rounded-[2.5rem] border-[14px] border-slate-800 relative' 
                : 'rounded-2xl border border-slate-700 w-full h-full'
          }`}
          style={dims}
        >
          {/* Simulated Mobile Speaker/Notch */}
          {device === 'mobile' && !isLandscape && (
            <div className="w-32 h-5 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20 flex items-center justify-center">
              <span className="w-10 h-1 bg-slate-700 rounded-full" />
            </div>
          )}

          <iframe
            key={key}
            title="Live Portfolio Simulator"
            src="/"
            className="w-full flex-grow border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default LivePreviewModal;
