import React from 'react';
import { Briefcase, FolderCheck, Building2 } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const Stats = () => {
    const stats = [
        {
            icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
            value: "3+",
            label: "Years",
            sublabel: "Professional Experience"
        },
        {
            icon: <FolderCheck className="w-6 h-6 text-indigo-600" />,
            value: "10+",
            label: "Projects",
            sublabel: "Successfully Completed"
        },
        {
            icon: <Building2 className="w-6 h-6 text-indigo-600" />,
            value: "3",
            label: "Companies",
            sublabel: "Industry Experience"
        }
    ];

    return (
        <section className="py-20 lg:py-24">
            <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                                {stat.icon}
                            </div>
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                                <span className="text-lg font-medium text-slate-600">{stat.label}</span>
                            </div>
                            <p className="text-sm text-slate-500">{stat.sublabel}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
};

export default Stats;
