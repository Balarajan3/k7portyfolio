import React from 'react';
import { Check } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const WhyWork = () => {
    const reasons = [
        "User-first design mindset",
        "Experience handling projects end-to-end",
        "Strong understanding of real product constraints",
        "Clean, consistent, and developer-friendly designs",
        "Clear communication and ownership"
    ];

    return (
        <section className="py-20 lg:py-24">
            <SectionWrapper className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <span className="text-indigo-600 font-medium text-sm tracking-wide uppercase mb-2 block">
                    The advantage
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                    Why Work With Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className={`bg-[#F8FAFC] p-6 rounded-2xl flex items-center gap-4 text-left transition-all hover:shadow-sm ${index === reasons.length - 1 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}>
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-5 h-5 text-indigo-600" strokeWidth={3} />
                            </div>
                            <span className="text-slate-700 font-medium text-lg">{reason}</span>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
};

export default WhyWork;
