import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicIcon from './DynamicIcon';

const Contact = () => {
  const { portfolioData } = usePortfolio();
  const contact = portfolioData.contact || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";
  const preset = contact.preset || "preset1";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, budget, subject, message } = formData;

    const emailBody = `
Name: ${name}
Email: ${email}
Location: ${location || 'N/A'}
Budget: ${budget || 'N/A'}

Message:
${message}
    `;

    const mailtoLink = `mailto:${contact.email || 'mrkesav7@gmail.com'}?subject=${encodeURIComponent(
      subject || 'New Project Inquiry'
    )}&body=${encodeURIComponent(emailBody)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 400);
  };

  const socials = contact.socials || [
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
    { name: "Dribbble", icon: "Dribbble", url: "https://dribbble.com" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com" },
    { name: "Globe", icon: "Globe", url: "https://kesavan.design" }
  ];

  /* =========================================================================
     PRESET 1: Modern Split (Original clean split layout)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="contact" className="py-20 lg:py-24 relative">
        <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Contact Info */}
            <div>
              <span 
                className="font-medium text-sm tracking-wide uppercase mb-2 block"
                style={{ color: primaryColor }}
              >
                {contact.badge || "Get in touch"}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {contact.title || "Let's discuss your Project"}
              </h2>
              <p className="text-slate-600 text-lg mb-12 max-w-lg leading-relaxed">
                {contact.subtitle || "Have a project in mind or looking for a UI/UX Designer? I'm open to full-time opportunities, freelance projects, and collaborations."}
              </p>

              <div className="space-y-6 mb-12">
                {/* Address Card */}
                <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-1">Address:</h4>
                    <p className="text-slate-900 font-medium">{contact.address || "New Mexico 31134"}</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-1">My Email:</h4>
                    <p className="text-slate-900 font-medium">{contact.email || "mrkesav7@gmail.com"}</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-1">Call Me Now:</h4>
                    <p className="text-slate-900 font-medium">{contact.phone || "+91 9025646556"}</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 hover:shadow-md transition-all border border-slate-100"
                    style={{ color: primaryColor }}
                  >
                    <DynamicIcon name={item.icon} className="w-4 h-4" />
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
                    className="w-full px-0 py-2 border-b border-slate-200 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
                    style={{ borderColor: formData.name ? primaryColor : undefined }}
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
                    className="w-full px-0 py-2 border-b border-slate-200 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b border-slate-200 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
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
                      className="w-full px-0 py-2 border-b border-slate-200 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
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
                      className="w-full px-0 py-2 border-b border-slate-200 focus:outline-none transition-colors bg-transparent placeholder-slate-300"
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
                    className="w-full px-0 py-2 border-b border-slate-200 focus:outline-none transition-colors bg-transparent placeholder-slate-300 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="cursor-pointer inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                    }}
                  >
                    <span>{submitted ? "Redirecting to Mail..." : "Submit"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Floating Glass Card
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FCFDFF] via-slate-50 to-[#F1F5F9]">
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{ backgroundColor: primaryColor }}
        />
        <div 
          className="absolute bottom-10 -right-20 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{ backgroundColor: secondaryColor }}
        />

        <SectionWrapper className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-white/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span 
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  {contact.badge || "Get in touch"}
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {contact.title || "Let's discuss your Project"}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {contact.subtitle || "Have a project in mind or looking for a UI/UX Designer? I'm open to full-time opportunities, freelance projects, and collaborations."}
                </p>

                <div className="space-y-4 pt-4">
                  <div className="p-4 rounded-xl bg-white/70 shadow-sm border border-slate-100 flex items-center gap-4">
                    <Mail className="w-5 h-5 text-indigo-600" />
                    <div>
                      <div className="text-xs text-slate-400">Email Me</div>
                      <div className="font-semibold text-slate-800">{contact.email}</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/70 shadow-sm border border-slate-100 flex items-center gap-4">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-xs text-slate-400">Phone</div>
                      <div className="font-semibold text-slate-800">{contact.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none text-sm bg-slate-50/50"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="location"
                      placeholder="Your Location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none text-sm bg-slate-50/50"
                    />
                    <input
                      type="text"
                      name="budget"
                      placeholder="Project Budget*"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none text-sm bg-slate-50/50"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none text-sm bg-slate-50/50"
                  />
                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Write your message here...*"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none text-sm bg-slate-50/50 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                    }}
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Minimal Centered Compact
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="contact" className="py-20 lg:py-28 relative bg-white">
        <SectionWrapper className="max-w-4xl mx-auto px-6 text-center">
          <span 
            className="text-sm font-semibold uppercase tracking-wider mb-2 block"
            style={{ color: primaryColor }}
          >
            {contact.badge || "Get In Touch"}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            {contact.title || "Let's Build Something Great"}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
            {contact.subtitle || "Have a design challenge or exciting product in mind? Reach out directly via email, call, or drop a quick note below."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href={`mailto:${contact.email}`}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <Mail className="w-6 h-6 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-xs text-slate-400 font-medium">EMAIL ME</div>
              <div className="text-sm font-bold text-slate-800 break-all">{contact.email}</div>
            </a>
            <a 
              href={`tel:${contact.phone}`}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-300 hover:shadow-md transition-all group"
            >
              <Phone className="w-6 h-6 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-xs text-slate-400 font-medium">CALL NOW</div>
              <div className="text-sm font-bold text-slate-800">{contact.phone}</div>
            </a>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-6 h-6 text-pink-600 mx-auto mb-3" />
              <div className="text-xs text-slate-400 font-medium">LOCATION</div>
              <div className="text-sm font-bold text-slate-800">{contact.address}</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-slate-50/70 p-8 rounded-3xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm"
                />
              </div>
              <textarea
                rows="3"
                name="message"
                placeholder="How can I help your project?*"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg text-white font-medium shadow-md transition-all flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                }}
              >
                <span>Send Quick Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Studio Gradient
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="contact" className="py-24 relative bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
          style={{ backgroundColor: primaryColor }}
        />

        <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-950/80 border border-indigo-800/60 px-3.5 py-1.5 rounded-full inline-block mb-4">
                {contact.badge || "GET IN TOUCH"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                {contact.title || "Let's discuss your Project"}
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                {contact.subtitle || "Have a project in mind or looking for a UI/UX Designer? I'm open to full-time opportunities, freelance projects, and collaborations."}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span className="text-slate-200 font-medium">{contact.email}</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-200 font-medium">{contact.phone}</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-slate-200 font-medium">{contact.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget*"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Subject*"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                />
                <textarea
                  rows="3"
                  name="message"
                  placeholder="Tell me about your product goals...*"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold tracking-wide shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                  }}
                >
                  <span>Launch Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Bento Grid Creative
     ========================================================================= */
  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FCFDFF]">
      <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span 
            className="font-medium text-sm tracking-wide uppercase mb-2 block"
            style={{ color: primaryColor }}
          >
            {contact.badge || "Get in touch"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {contact.title || "Let's discuss your Project"}
          </h2>
          <p className="text-slate-600 text-lg">
            {contact.subtitle || "Have a project in mind or looking for a UI/UX Designer? I'm open to full-time opportunities, freelance projects, and collaborations."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Tile 1: Status & availability */}
          <div className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Available for Q1/Q2 Projects
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Collaborate?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Open to UI/UX design, design system architectural roles, and contract consulting.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>Response time: Under 24 hrs</span>
            </div>
          </div>

          {/* Tile 2: Direct Contact Channels */}
          <div className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">Fast Channels</span>
              <div className="space-y-4">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold truncate">{contact.email}</div>
                </a>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold">{contact.phone}</div>
                </a>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-9 h-9 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold">{contact.address}</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              {socials.map((s, idx) => (
                <a key={idx} href={s.url || "#"} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-indigo-600">
                  <DynamicIcon name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Tile 3 & 4: Full Form Span */}
          <div className="md:col-span-3 lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Direct Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget*"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none"
                />
              </div>
              <textarea
                rows="3"
                name="message"
                placeholder="Describe your design project and timeline...*"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                }}
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
