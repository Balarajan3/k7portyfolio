import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FaFigma } from "react-icons/fa";
import { 
  SiAdobexd, 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiSketch, 
  SiCanva, 
  SiOpenai, 
  SiAnthropic 
} from "react-icons/si";

export const AVAILABLE_ICONS = [
  'Download',
  'ArrowRight',
  'ArrowLeft',
  'ExternalLink',
  'Mail',
  'Phone',
  'MapPin',
  'Send',
  'Briefcase',
  'FolderCheck',
  'Building2',
  'Palette',
  'Users',
  'PenTool',
  'Check',
  'Sparkles',
  'FileText',
  'Code',
  'Layers',
  'Layout',
  'Eye',
  'Globe',
  'Linkedin',
  'Instagram',
  'Dribbble',
  'Facebook'
];

export const DynamicIcon = ({ name, className = "w-5 h-5", style = {} }) => {
  if (!name) return null;

  // Check specific brand icons
  if (name === 'FaFigma' || name === 'Figma' || name === 'FigJam') {
    return <FaFigma className={className} style={style} />;
  }
  if (name === 'SiAdobexd' || name === 'Adobe XD') {
    return <SiAdobexd className={className} style={style} />;
  }
  if (name === 'SiAdobephotoshop' || name === 'Photoshop') {
    return <SiAdobephotoshop className={className} style={style} />;
  }
  if (name === 'SiAdobeillustrator' || name === 'Illustrator') {
    return <SiAdobeillustrator className={className} style={style} />;
  }
  if (name === 'SiSketch' || name === 'Sketch') {
    return <SiSketch className={className} style={style} />;
  }
  if (name === 'SiCanva' || name === 'Canva') {
    return <SiCanva className={className} style={style} />;
  }
  if (name === 'SiOpenai' || name === 'ChatGPT') {
    return <SiOpenai className={className} style={style} />;
  }
  if (name === 'SiAnthropic' || name === 'Claude AI') {
    return <SiAnthropic className={className} style={style} />;
  }
  if (name === 'MJ' || name === 'Midjourney') {
    return (
      <span className="font-bold text-xs inline-flex items-center justify-center bg-slate-900 text-white rounded px-1.5 py-0.5">
        MJ
      </span>
    );
  }

  // Lucide Icons
  const LucideIcon = LucideIcons[name];
  if (LucideIcon) {
    return <LucideIcon className={className} style={style} />;
  }

  // Default fallback icon
  return <LucideIcons.Sparkles className={className} style={style} />;
};

export default DynamicIcon;
