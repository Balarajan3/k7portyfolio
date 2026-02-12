import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full py-20 lg:py-24 flex items-center justify-center bg-[#FCFDFF] overflow-hidden px-6 lg:px-12">
            {/* Very subtle background blob for depth */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-50/50 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-start text-left"
                >
                    <span className="text-indigo-600 font-medium text-lg mb-2">
                        Welcome to my portfolio
                    </span>

                    <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Kesavan</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl text-slate-600 font-medium max-w-lg leading-snug mb-8">
                        UI/UX Designer crafting simple, usable, and scalable digital experiences
                    </h2>

                    <p className="text-slate-500 text-base sm:text-[17px] leading-relaxed max-w-xl mb-10 font-normal">
                        I'm a UI/UX Designer with 3+ years of hands-on experience designing user-friendly web and mobile applications. I specialize in transforming complex business requirements into clean, intuitive, and functional interfaces that enhance user experience and support business goals.
                    </p>

                    <div className="flex flex-wrap items-center gap-5">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-base">
                            <Download className="w-5 h-5" />
                            <span>See My Resume CV</span>
                        </button>

                        <button className="flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all group text-base">
                            <span>View My Work</span>
                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[540px] aspect-square">
                        {/* Simple Image Container - No Background Card */}
                        <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl bg-slate-50">
                            <img
                                src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Kesavan Portrait"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Slight overlay for tone matching */}
                            <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
