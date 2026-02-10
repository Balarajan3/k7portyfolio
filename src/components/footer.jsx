import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1B263B] text-white py-20 px-6 md:px-12 lg:px-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-4xl font-bold mb-6">Brooklyn</h2>
                    <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                        I'm available for freelance work. Connect with me via phone:
                        <span className="block text-white font-medium mt-2">+44 (0) 123 456 789</span>
                        or email:
                        <span className="block text-white font-medium mt-2">hello@brooklyn.com</span>
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">About Me</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">Services</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">My Work</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">Process</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">Facebook</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">Instagram</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">Twitter</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">LinkedIn</li>
                        <li className="hover:text-[#9929fb] transition-colors cursor-pointer">Dribbble</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Brooklyn Gilbert. All rights reserved.</p>
                <p>Designed by ThemeWagon</p>
            </div>
        </footer>
    );
};

export default Footer;
