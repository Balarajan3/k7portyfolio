import { useRef } from "react";
import { useInView } from "framer-motion";

export function SectionWrapper({ children, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
        >
            {children}
        </div>
    );
}
