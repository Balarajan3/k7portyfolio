import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Footer = () => {
  const { portfolioData } = usePortfolio();
  const site = portfolioData.site || {};

  return (
    <footer className="py-8 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-900">{site.logoText || "Kesavan"}</h3>
          <p className="text-xs text-slate-500 mt-1">{site.logoRole || "UI/UX Designer"}</p>
        </div>

        <div className="text-sm text-slate-500">
          {site.copyright || "© 2026 Kesavan. All rights reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
