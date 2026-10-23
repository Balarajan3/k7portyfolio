import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicButton from './DynamicButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { portfolioData } = usePortfolio();
  const navigate = useNavigate();

  const navbar = portfolioData.navbar || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const links = (navbar.links || []).filter(link => link.enabled !== false);
  const cta = navbar.ctaButton || {
    label: "Hire Me",
    target: "#contact",
    type: "scroll",
    icon: "Mail",
    iconPosition: "suffix",
    enabled: true
  };

  const handleLinkClick = (e, link) => {
    if (link.target?.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(link.target);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/' + link.target);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bold text-2xl text-slate-900 flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: primaryColor }}
              />
              {navbar.logo || portfolioData.site?.logoText || "Kesavan"}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.target}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium text-base relative group"
              >
                {link.label}
                <span 
                  className="absolute bottom-[-4px] left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: primaryColor }}
                />
              </a>
            ))}

            {cta.enabled !== false && (
              <DynamicButton
                label={cta.label || "Hire Me"}
                type={cta.type || "route"}
                route={cta.target}
                fileUrl={cta.fileUrl}
                icon={cta.icon}
                iconPosition={cta.iconPosition || "suffix"}
                variant="primary"
                className="px-7 py-3 text-base"
              />
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-xl border-t border-slate-100 z-50">
          <div className="px-6 pt-4 pb-8 space-y-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.target}
                onClick={(e) => handleLinkClick(e, link)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {cta.enabled !== false && (
              <div className="pt-2">
                <DynamicButton
                  label={cta.label || "Hire Me"}
                  type={cta.type || "route"}
                  route={cta.target}
                  fileUrl={cta.fileUrl}
                  icon={cta.icon}
                  iconPosition={cta.iconPosition || "suffix"}
                  variant="primary"
                  className="w-full py-3.5 text-base"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
