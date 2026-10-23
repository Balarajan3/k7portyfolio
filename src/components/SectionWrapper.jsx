import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";

export function SectionWrapper({ children, className = "", sectionId = "", style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const { portfolioData } = usePortfolio();

  const sectionConfig = portfolioData?.sections?.find(s => s.id === sectionId) || {};
  const animType = sectionConfig.animation || portfolioData?.theme?.globalAnimation || "fade-up";
  const duration = sectionConfig.animDuration || 0.8;
  const delay = sectionConfig.animDelay || 0.1;

  if (animType === "none") {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  // Animation variants
  const getVariants = () => {
    switch (animType) {
      case "fade-down":
        return {
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 }
        };
      case "fade-left":
        return {
          initial: { opacity: 0, x: 60 },
          animate: { opacity: 1, x: 0 }
        };
      case "fade-right":
        return {
          initial: { opacity: 0, x: -60 },
          animate: { opacity: 1, x: 0 }
        };
      case "zoom-in":
        return {
          initial: { opacity: 0, scale: 0.85 },
          animate: { opacity: 1, scale: 1 }
        };
      case "zoom-out":
        return {
          initial: { opacity: 0, scale: 1.15 },
          animate: { opacity: 1, scale: 1 }
        };
      case "bounce":
        return {
          initial: { opacity: 0, y: 60 },
          animate: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5, duration } }
        };
      case "flip":
        return {
          initial: { opacity: 0, rotateX: 35, y: 40 },
          animate: { opacity: 1, rotateX: 0, y: 0 }
        };
      case "fade-in":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        };
      case "fade-up":
      default:
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{
        duration,
        delay,
        ease: [0.17, 0.55, 0.55, 1]
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;
