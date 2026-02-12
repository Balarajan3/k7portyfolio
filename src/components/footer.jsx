import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-slate-900">Kesavan</h3>
                    <p className="text-xs text-slate-500 mt-1">UI/UX Designer</p>
                </div>

                <div className="text-sm text-slate-500">
                    © 2026 Kesavan. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
