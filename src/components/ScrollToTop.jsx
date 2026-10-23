import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { portfolioData } = usePortfolio();
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white shadow-xl border border-slate-200 hover:scale-110 transition-all flex items-center justify-center cursor-pointer group"
      aria-label="Scroll to top"
    >
      {/* Circular Progress Ring */}
      <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-slate-100"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          strokeDasharray={`${scrollProgress}, 100`}
          strokeWidth="3"
          strokeLinecap="round"
          stroke={primaryColor}
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <ArrowUp className="w-4 h-4 text-slate-700 group-hover:text-indigo-600 transition-colors absolute" />
    </button>
  );
};

export default ScrollToTop;
