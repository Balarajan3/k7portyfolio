import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicIcon from './DynamicIcon';
import { usePortfolio } from '../context/PortfolioContext';

export const DynamicButton = ({
  label = "Click Here",
  type = "route", // 'route' | 'file' | 'scroll'
  route = "",
  fileUrl = "",
  fileName = "download",
  target = "",
  icon = "",
  iconPosition = "prefix", // 'prefix' | 'suffix'
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost'
  className = "",
  style = {},
  onClick
}) => {
  const navigate = useNavigate();
  const { portfolioData } = usePortfolio();
  const { theme } = portfolioData || {};
  const primaryColor = theme?.primaryColor || "#4F46E5";
  const secondaryColor = theme?.secondaryColor || "#9333EA";

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }

    if (type === 'file') {
      e.preventDefault();
      if (!fileUrl) {
        alert("No file has been attached yet.");
        return;
      }
      // Trigger download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName || "file";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const destination = route || target || "";

    if (type === 'scroll' || destination.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(destination);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If on another route, navigate to / + anchor
        navigate('/' + destination);
      }
      return;
    }

    if (destination.startsWith('http')) {
      window.open(destination, '_blank', 'noopener,noreferrer');
      return;
    }

    if (destination.startsWith('/')) {
      navigate(destination);
      return;
    }

    if (destination) {
      navigate('/' + destination);
    }
  };

  // Determine button styles based on variant and dynamic colors
  let btnClasses = "inline-flex items-center justify-center gap-2.5 font-semibold transition-all transform hover:-translate-y-0.5 cursor-pointer select-none text-base ";
  let dynamicStyle = { ...style };

  const radius = theme?.buttonRadius || "rounded-lg";
  btnClasses += ` ${radius} `;

  if (variant === "primary") {
    btnClasses += " text-white shadow-lg hover:shadow-xl ";
    dynamicStyle = {
      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
      ...dynamicStyle
    };
  } else if (variant === "secondary") {
    btnClasses += " text-white shadow-md hover:shadow-lg ";
    dynamicStyle = {
      backgroundColor: secondaryColor,
      ...dynamicStyle
    };
  } else if (variant === "outline") {
    btnClasses += " bg-white border hover:bg-slate-50 shadow-sm ";
    dynamicStyle = {
      borderColor: '#E2E8F0',
      color: '#334155',
      ...dynamicStyle
    };
  } else {
    // ghost
    btnClasses += " hover:bg-slate-100 text-slate-700 ";
  }

  const renderedIcon = icon ? (
    <DynamicIcon name={icon} className="w-5 h-5 flex-shrink-0" />
  ) : null;

  return (
    <button
      onClick={handleClick}
      className={`${btnClasses} ${className}`}
      style={dynamicStyle}
    >
      {icon && iconPosition === "prefix" && renderedIcon}
      <span>{label}</span>
      {icon && iconPosition === "suffix" && renderedIcon}
    </button>
  );
};

export default DynamicButton;
