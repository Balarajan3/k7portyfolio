import React from 'react';
import { MapPin, Mail, Phone, Send, Facebook, Dribbble, Instagram, Linkedin, Globe } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        location: '',
        budget: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, location, budget, subject, message } = formData;

        // Construct email body
        const emailBody = `
Name: ${name}
Email: ${email}
Location: ${location}
Budget: ${budget}

Message:
${message}
        `;

        // Construct mailto link
        const mailtoLink = `mailto:mrkesav7@gmail.com?subject=${encodeURIComponent(subject || 'New Contact Request')}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-20 lg:py-24 relative">
            <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Contact Info */}
                    <div>
                        <span className="text-indigo-600 font-medium text-sm tracking-wide uppercase mb-2 block">
                            Get in touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Let's discuss your Project
                        </h2>
                        <p className="text-slate-600 text-lg mb-12 max-w-lg leading-relaxed">
                            Have a project in mind or looking for a UI/UX Designer? I'm open to full-time opportunities, freelance projects, and collaborations.
                        </p>

                        <div className="space-y-6 mb-12">
                            {/* Address Card */}
                            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-600">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 mb-1">Address:</h4>
                                    <p className="text-slate-900 font-medium">New Mexico 31134</p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-600">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 mb-1">My Email:</h4>
                                    <p className="text-slate-900 font-medium">mrkesav7@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-600">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 mb-1">Call Me Now:</h4>
                                    <p className="text-slate-900 font-medium">+91 9025646556</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {[Facebook, Globe, Dribbble, Instagram, Linkedin].map((Icon, index) => (
                                <a key={index} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:shadow-md transition-all border border-slate-100">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100">
                        <p className="text-slate-500 mb-8">
                            Fill out the form below and I'll get back to you as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-500 mb-2">Budget*</label>
                                    <input
                                        type="text"
                                        name="budget"
                                        required
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 border-b border-slate-200 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-500 mb-2">Subject*</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 border-b border-slate-200 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Message*</label>
                                <textarea
                                    rows="2"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent placeholder-slate-300 resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                    <span>Submit</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </SectionWrapper>
        </section>
    );
};

export default Contact;
