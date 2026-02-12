import React from 'react';
import { FaFigma } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiSketch, SiCanva, SiOpenai, SiAnthropic } from "react-icons/si";
import { SectionWrapper } from './SectionWrapper';

const Tools = () => {
    const toolCategories = [
        {
            title: "Design Tools",
            tools: [
                { name: "Figma", icon: <FaFigma className="w-8 h-8 text-[#F24E1E]" /> }, // Figma brand color
                { name: "Adobe XD", icon: <SiAdobexd className="w-8 h-8 text-[#FF61F6]" /> },
                { name: "Photoshop", icon: <SiAdobephotoshop className="w-8 h-8 text-[#31A8FF]" /> },
                { name: "Illustrator", icon: <SiAdobeillustrator className="w-8 h-8 text-[#FF9A00]" /> },
                { name: "Sketch", icon: <SiSketch className="w-8 h-8 text-[#F7B500]" /> },
                { name: "Canva", icon: <SiCanva className="w-8 h-8 text-[#00C4CC]" /> },
            ]
        },
        {
            title: "AI Tools",
            tools: [
                { name: "ChatGPT", icon: <SiOpenai className="w-8 h-8 text-[#74AA9C]" /> },
                { name: "Midjourney", icon: <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-xs">MJ</div> }, // Custom fallback
                { name: "Claude AI", icon: <SiAnthropic className="w-8 h-8 text-[#D97757]" /> },
            ]
        },
        {
            title: "Collaboration",
            tools: [
                { name: "FigJam", icon: <FaFigma className="w-8 h-8 text-[#A259FF]" /> }, // FigJam uses Figma icon usually or purple variant
            ]
        }
    ];

    return (
        <section className="py-20 lg:py-24">
            <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <span className="text-indigo-600 font-medium text-sm tracking-wide uppercase mb-2 block">
                    My toolkit
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
                    Tools I Use
                </h2>

                <div className="space-y-16">
                    {toolCategories.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-lg font-semibold text-slate-700 mb-8">{category.title}</h3>
                            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                {category.tools.map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center gap-3">
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center border border-slate-100">
                                            {tool.icon}
                                        </div>
                                        <span className="text-sm font-medium text-slate-600">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
};

export default Tools;
