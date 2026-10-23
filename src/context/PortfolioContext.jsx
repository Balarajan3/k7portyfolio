import React, { createContext, useContext, useState, useEffect } from 'react';
import { savePortfolioDataToFirestore, loadPortfolioDataFromFirestore } from '../firebase/config';
import { INITIAL_CUSTOM_DESIGNS, CODING_PORTFOLIO_HERO } from '../data/defaultCustomDesigns';

export const initialPortfolioData = {
  // Theme & Styling
  theme: {
    primaryColor: "#4F46E5", // Indigo-600
    secondaryColor: "#9333EA", // Purple-600
    bgColor: "#FCFDFF",
    textColor: "#0F172A",
    fontFamily: "Outfit, sans-serif",
    buttonRadius: "rounded-lg" // rounded-none, rounded-md, rounded-lg, rounded-full
  },

  // Site Meta & Branding
  site: {
    title: "Kesavan | UI/UX Designer Portfolio",
    logoText: "Kesavan",
    logoRole: "UI/UX Designer",
    faviconUrl: "/favicon.svg",
    copyright: "© 2026 Kesavan. All rights reserved."
  },

  // Cloudinary Config
  cloudinary: {
    cloudName: "",
    uploadPreset: "",
    apiKey: ""
  },

  // Navbar Menu
  navbar: {
    logo: "Kesavan",
    links: [
      { id: "nav-about", label: "About", target: "#about", type: "scroll", enabled: true },
      { id: "nav-services", label: "Services", target: "#services", type: "scroll", enabled: true },
      { id: "nav-portfolio", label: "Portfolio", target: "#portfolio", type: "scroll", enabled: true },
      { id: "nav-contact", label: "Contact", target: "#contact", type: "scroll", enabled: true }
    ],
    ctaButton: {
      label: "Hire Me",
      type: "scroll", // scroll or route or file
      target: "#contact",
      fileUrl: "",
      icon: "Mail",
      iconPosition: "suffix",
      enabled: true
    }
  },

  // Sections Arrangement (Drag & Drop Reordering, Visibility, Presets & Animations)
  sections: [
    { id: "hero", name: "Hero Section", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "clients", name: "Trusted By & Client Logos", enabled: true, preset: "preset1", animation: "fade-in", animDuration: 0.8, animDelay: 0.1 },
    { id: "stats", name: "Stats & Experience", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.15 },
    { id: "about", name: "About Me", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "process", name: "Design Process (Workflow)", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "services", name: "Services / What I Do", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "experience", name: "Career Experience (Timeline)", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "tools", name: "Toolkit / Tools I Use", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "whywork", name: "Why Work With Me", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "figmaViewer", name: "Live Figma Workspace", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "selectedworks", name: "Selected Works / Projects", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "testimonials", name: "Client Reviews & Testimonials", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "pricing", name: "Packages & Retainers", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "faq", name: "Frequently Asked Questions", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "awards", name: "Awards & Certifications", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 },
    { id: "contact", name: "Contact Us", enabled: true, preset: "preset1", animation: "fade-up", animDuration: 0.8, animDelay: 0.1 }
  ],

  // Hero Section
  hero: {
    topTitle: "Welcome to my portfolio",
    titlePrefix: "Hello, I'm",
    highlightName: "Kesavan",
    subtitle: "UI/UX Designer crafting simple, usable, and scalable digital experiences",
    content: "I'm a UI/UX Designer with 3+ years of hands-on experience designing user-friendly web and mobile applications. I specialize in transforming complex business requirements into clean, intuitive, and functional interfaces that enhance user experience and support business goals.",
    image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttons: [
      {
        id: "hero-btn-1",
        label: "See My Resume CV",
        type: "file", // file or route
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        fileName: "Kesavan_Resume_CV.pdf",
        route: "",
        icon: "Download",
        iconPosition: "prefix",
        variant: "primary"
      },
      {
        id: "hero-btn-2",
        label: "View My Work",
        type: "route", // file or route
        route: "#portfolio",
        fileUrl: "",
        icon: "ArrowRight",
        iconPosition: "suffix",
        variant: "outline"
      }
    ]
  },

  // Stats / Experience
  stats: [
    {
      id: "stat-1",
      icon: "Briefcase",
      value: "3+",
      label: "Years",
      sublabel: "Professional Experience"
    },
    {
      id: "stat-2",
      icon: "FolderCheck",
      value: "10+",
      label: "Projects",
      sublabel: "Successfully Completed"
    },
    {
      id: "stat-3",
      icon: "Building2",
      value: "3",
      label: "Companies",
      sublabel: "Industry Experience"
    }
  ],

  // About Section
  about: {
    badge: "Get to know me",
    title: "About Me",
    content: "I'm passionate about creating meaningful digital experiences that solve real user problems. I have worked on SaaS platforms, dashboards, and mobile applications, handling projects from concept to final delivery. I focus strongly on usability, consistency, scalability, and accessibility, ensuring designs work seamlessly across devices and align with business objectives.",
    quote: "Design is not just what it looks like and feels like. Design is how it works."
  },

  // Services / What I Do
  services: {
    badge: "My expertise",
    title: "What I Do",
    list: [
      {
        id: "srv-1",
        icon: "Palette",
        title: "UI Design",
        items: [
          "Web & Mobile UI Design",
          "SaaS Dashboard Design",
          "Design Systems & Components",
          "Responsive Layouts"
        ]
      },
      {
        id: "srv-2",
        icon: "Users",
        title: "UX Design",
        items: [
          "User Research & Analysis",
          "Wireframing & Prototyping",
          "User Flow & Journey Mapping",
          "Usability Improvements"
        ]
      },
      {
        id: "srv-3",
        icon: "PenTool",
        title: "Graphic Design",
        items: [
          "Brand Identity Design",
          "Marketing Collaterals",
          "Social Media Graphics",
          "Illustrations & Icons"
        ]
      }
    ]
  },

  // Toolkit / Tools I Use
  tools: {
    badge: "My toolkit",
    title: "Tools I Use",
    categories: [
      {
        id: "cat-1",
        title: "Design Tools",
        tools: [
          { name: "Figma", icon: "FaFigma", color: "#F24E1E" },
          { name: "Adobe XD", icon: "SiAdobexd", color: "#FF61F6" },
          { name: "Photoshop", icon: "SiAdobephotoshop", color: "#31A8FF" },
          { name: "Illustrator", icon: "SiAdobeillustrator", color: "#FF9A00" },
          { name: "Sketch", icon: "SiSketch", color: "#F7B500" },
          { name: "Canva", icon: "SiCanva", color: "#00C4CC" }
        ]
      },
      {
        id: "cat-2",
        title: "AI Tools",
        tools: [
          { name: "ChatGPT", icon: "SiOpenai", color: "#74AA9C" },
          { name: "Midjourney", icon: "MJ", color: "#0F172A" },
          { name: "Claude AI", icon: "SiAnthropic", color: "#D97757" }
        ]
      },
      {
        id: "cat-3",
        title: "Collaboration",
        tools: [
          { name: "FigJam", icon: "FaFigma", color: "#A259FF" }
        ]
      }
    ]
  },

  // Why Work With Me
  whyWork: {
    badge: "The advantage",
    title: "Why Work With Me",
    reasons: [
      "User-first design mindset",
      "Experience handling projects end-to-end",
      "Strong understanding of real product constraints",
      "Clean, consistent, and developer-friendly designs",
      "Clear communication and ownership"
    ]
  },

  // Interactive Figma Showcase
  figmaShowcase: {
    badge: "Interactive Prototype",
    title: "Live Figma Workspace",
    subtitle: "Explore interactive Figma prototypes and design components right inside the portfolio without leaving the page.",
    figmaUrl: "https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1182258948197775960",
    uploadedFileUrl: "",
    fileName: ""
  },

  // Selected Works / Projects
  selectedWorks: {
    badge: "My work",
    title: "Selected Works",
    subtitle: "A curated selection of recent UI/UX projects showcasing problem-solving skills, layout structure, and user-centered design decisions.",
    projects: [
      {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        category: "SaaS Dashboard",
        description: "Data visualization platform with real-time analytics and reporting features",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tools: ["Figma", "React", "Chart.js"],
        liveUrl: "https://example.com/demo",
        figmaUrl: "https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1182258948197775960",
        details: "A comprehensive data visualization platform designed for enterprise analytics. Features real-time data sync, customizable widget layouts, and advanced reporting capabilities.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2670&auto=format&fit=crop"
        ]
      },
      {
        id: "fintech-mobile-app",
        title: "FinTech Mobile App",
        category: "Mobile App Design",
        description: "Banking and payment app with intuitive user flows and secure transactions",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2670&auto=format&fit=crop",
        tools: ["Figma", "iOS Design System", "Prototyping"],
        liveUrl: "https://example.com/fintech",
        figmaUrl: "https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1098675402687588327",
        details: "A secure banking application focused on user trust and simplicity. Includes features for peer-to-peer payments, budget tracking, and investment portfolio management.",
        images: [
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2670&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1616077168712-fc6c788cd4ee?q=80&w=2670&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop"
        ]
      },
      {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        category: "Web Design",
        description: "Modern shopping experience with seamless checkout and product discovery",
        image: "https://images.unsplash.com/photo-1493723843684-a63bc8304ddf?q=80&w=2608&auto=format&fit=crop",
        tools: ["Adobe XD", "Webflow", "Stripe API"],
        liveUrl: "https://example.com/shop",
        figmaUrl: "",
        details: "Modern e-commerce redesign focusing on conversion optimization and seamless checkout flows. Implemented a design system for scalability.",
        images: [
          "https://images.unsplash.com/photo-1493723843684-a63bc8304ddf?q=80&w=2608&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1472851294608-415522f96319?q=80&w=2670&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2574&auto=format&fit=crop"
        ]
      },
      {
        id: "healthcare-app",
        title: "Healthcare App",
        category: "Mobile App Design",
        description: "Telemedicine platform for appointments, prescriptions, and patient care",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        tools: ["Figma", "User Research", "Wireframing"],
        liveUrl: "https://example.com/health",
        figmaUrl: "",
        details: "Telemedicine app connecting patients with doctors. Key flows include appointment booking, video consultations, and digital prescriptions.",
        images: [
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2832&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop"
        ]
      }
    ]
  },

  // Contact Section with 5+ presets!
  contact: {
    badge: "Get in touch",
    title: "Let's discuss your Project",
    subtitle: "Have a project in mind or looking for a UI/UX Designer? I'm open to full-time opportunities, freelance projects, and collaborations.",
    address: "New Mexico 31134",
    email: "mrkesav7@gmail.com",
    phone: "+91 9025646556",
    preset: "preset1", // preset1 (Modern Split), preset2 (Floating Glass Card), preset3 (Minimal Compact), preset4 (Dark Neon Gradient), preset5 (Bento Grid)
    socials: [
      { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
      { name: "Dribbble", icon: "Dribbble", url: "https://dribbble.com" },
      { name: "Instagram", icon: "Instagram", url: "https://instagram.com" },
      { name: "Facebook", icon: "Facebook", url: "https://facebook.com" },
      { name: "Globe", icon: "Globe", url: "https://kesavan.design" }
    ]
  },

  // Dynamic Custom Pages (like WordPress / Wix)
  pages: [
    {
      id: "page-case-study",
      slug: "case-study-showcase",
      title: "UI/UX Case Studies & Methodologies",
      description: "In-depth breakdown of my design process, user research, wireframes, and design system building.",
      content: "Here is a deep dive into my end-to-end design thinking approach: Discovery, Definition, Ideation, Prototyping, and Usability Testing. Each project is tailored to solve specific business problems while ensuring delight for end users.",
      figmaUrl: "https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1182258948197775960",
      ctaButton: {
        label: "Contact For Projects",
        target: "/#contact",
        type: "route",
        icon: "Mail",
        iconPosition: "suffix"
      }
    }
  ],

  // Client Logos & Trusted By
  clients: {
    badge: "Trusted By High-Growth Teams",
    title: "Brands & Startups I've Designed For",
    logos: [
      { name: "Stripe", role: "Payment UX", icon: "Globe" },
      { name: "Shopify", role: "E-Commerce", icon: "FolderCheck" },
      { name: "Figma", role: "Design Community", icon: "FaFigma" },
      { name: "Linear", role: "SaaS Workflow", icon: "Layers" },
      { name: "Vercel", role: "Developer Tools", icon: "Zap" },
      { name: "Supabase", role: "Cloud Platform", icon: "Database" },
      { name: "Framer", role: "Interactive Motion", icon: "Layout" },
      { name: "Webflow", role: "No-Code Systems", icon: "Code" }
    ]
  },

  // Design Process / How I Work
  process: {
    badge: "How I Work",
    title: "My 4-Step Design Methodology",
    subtitle: "A structured, user-centered framework ensuring high usability, consistency, and measurable business growth.",
    steps: [
      {
        step: "01",
        title: "Discover & User Research",
        desc: "Stakeholder interviews, user pain points discovery, competitive benchmarking, and scope definition.",
        deliverables: ["User Personas", "Journey Maps", "Problem Definition", "Requirement Specs"]
      },
      {
        step: "02",
        title: "Information Architecture & Wireframes",
        desc: "Iterative low-fidelity wireframing, navigation hierarchy, content modeling, and user journey mapping.",
        deliverables: ["Sitemap", "Lo-Fi Wireframes", "UX Flows", "Clickable Low-Fi Prototype"]
      },
      {
        step: "03",
        title: "Visual UI Design & Prototyping",
        desc: "Translating wireframes into high-fidelity screens with typography, color tokens, and micro-interactions in Figma.",
        deliverables: ["Hi-Fi UI Screens", "Responsive Variants", "Figma Interactive Prototype", "Motion Specs"]
      },
      {
        step: "04",
        title: "Design System & Developer Handoff",
        desc: "Component libraries, accessible states, design token documentation, and engineering handoff QA.",
        deliverables: ["Design System", "Auto-layout Components", "Dev Tokens", "Handoff Walkthrough"]
      }
    ]
  },

  // Work Experience / Career History (Resume Timeline)
  experience: {
    badge: "Career Journey",
    title: "Work Experience & History",
    subtitle: "Over 3+ years handling product design from initial discovery through production deployment.",
    items: [
      {
        id: "exp-1",
        role: "Lead UI/UX Designer",
        company: "Apex Digital Studio",
        location: "Remote",
        period: "2023 - Present",
        description: "Leading product design for enterprise SaaS dashboards and fintech applications. Architected atomic design system used across 6 web applications.",
        skills: ["Design Systems", "SaaS Dashboard", "Design Leadership", "Figma"]
      },
      {
        id: "exp-2",
        role: "Senior Product Designer",
        company: "CloudScale Technologies",
        location: "San Francisco, CA (Remote)",
        period: "2021 - 2023",
        description: "Designed mobile applications for healthcare & e-commerce. Improved onboarding conversion by 38% through iterative usability testing.",
        skills: ["Mobile UI", "User Research", "Usability Testing", "iOS/Android"]
      },
      {
        id: "exp-3",
        role: "UI/UX & Visual Designer",
        company: "Creative Pulse Agency",
        location: "New Mexico",
        period: "2020 - 2021",
        description: "Crafted brand identity, wireframes, and responsive marketing web apps for over 15 high-growth startups.",
        skills: ["Responsive Web", "Branding", "Wireframing", "Prototyping"]
      }
    ]
  },

  // Testimonials / Reviews (Wall of Love)
  testimonials: {
    badge: "Social Proof",
    title: "What Clients & Teams Say",
    subtitle: "Direct feedback from founders, product managers, and engineering partners.",
    items: [
      {
        id: "test-1",
        name: "Sarah Jenkins",
        role: "VP of Product",
        company: "FinPulse Banking",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
        rating: 5,
        quote: "Kesavan transformed our complex fintech flows into a delightfully intuitive experience. His attention to design systems and dev handoff made engineering completely painless."
      },
      {
        id: "test-2",
        name: "Marcus Chen",
        role: "Co-Founder & CEO",
        company: "HealthBridge Telemedicine",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
        rating: 5,
        quote: "Working with Kesavan was an absolute game changer for our seed-stage startup. He delivered the entire Figma prototype in record time and our users love the UI."
      },
      {
        id: "test-3",
        name: "Elena Rostova",
        role: "Design Director",
        company: "NovaStudio NYC",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
        rating: 5,
        quote: "One of the sharpest UI/UX minds I've collaborated with. Clean layouts, pixel perfection, and a deep understanding of real product constraints."
      }
    ]
  },

  // Pricing & Design Retainers
  pricing: {
    badge: "Investment & Retainers",
    title: "Transparent Collaboration Packages",
    subtitle: "Flexible collaboration models tailored for startups, agencies, and enterprise products.",
    plans: [
      {
        id: "plan-1",
        name: "Design Sprint & Audit",
        price: "$1,499",
        period: "one-time",
        description: "Comprehensive UX audit, heuristic evaluation, and redesign of your highest priority flow.",
        popular: false,
        features: [
          "Full UX & Usability Audit",
          "Figma Redesign (Up to 5 screens)",
          "Design System Quickstart Tokens",
          "Loom Video Walkthrough",
          "48-Hour Turnaround"
        ],
        cta: "Book Sprint"
      },
      {
        id: "plan-2",
        name: "Full MVP Product Design",
        price: "$3,899",
        period: "per project",
        description: "End-to-end design from wireframes to clickable Figma prototype ready for engineering.",
        popular: true,
        features: [
          "User Flow & Wireframing",
          "High-Fidelity UI Design",
          "Complete Design System Tokens",
          "Clickable Interactive Prototype",
          "Developer Handoff QA Session",
          "Unlimited Revisions during Sprint"
        ],
        cta: "Start MVP Project"
      },
      {
        id: "plan-3",
        name: "Monthly Design Retainer",
        price: "$4,500",
        period: "per month",
        description: "Dedicated senior UI/UX design partner for your team with continuous sprint delivery.",
        popular: false,
        features: [
          "Dedicated Daily Design Output",
          "SaaS Dashboards & Mobile Apps",
          "Component Library Maintenance",
          "Async Slack/Figma Collaboration",
          "Pause or cancel anytime"
        ],
        cta: "Subscribe Monthly"
      }
    ]
  },

  // Frequently Asked Questions
  faq: {
    badge: "Got Questions?",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about timeline, deliverables, tools, and working together.",
    items: [
      {
        q: "What tools do you use for UI/UX design and handoff?",
        a: "I design primarily in Figma using auto-layout, components, and design tokens. For developer handoff, I provide organized specs, exported SVGs/assets, and clickable prototypes."
      },
      {
        q: "How long does a typical product design project take?",
        a: "A targeted design sprint or audit takes 3–5 days. A complete end-to-end MVP design (web or mobile) usually takes 2–3 weeks depending on the scope."
      },
      {
        q: "Are you open to full-time, contract, or freelance roles?",
        a: "Yes! I am open to full-time remote roles, long-term contracts, and selected freelance product collaborations."
      },
      {
        q: "Can you help with front-end code (HTML, CSS, React, Tailwind)?",
        a: "Yes! I write clean, responsive Tailwind CSS, modern React, and component architectures, making collaboration with developers completely seamless."
      },
      {
        q: "How do revisions and feedback work during a project?",
        a: "We review designs directly in Figma with comments and asynchronous video walkthroughs, ensuring quick iterations without endless meetings."
      }
    ]
  },

  // Awards & Certifications
  awards: {
    badge: "Recognition & Honors",
    title: "Awards & Certifications",
    subtitle: "Industry recognition, validated credentials, and design community accolades.",
    items: [
      {
        year: "2025",
        title: "Figma Community Featured Creator",
        organization: "Figma",
        description: "Recognized for publishing widely-used SaaS dashboard design system kit with 15k+ copies."
      },
      {
        year: "2024",
        title: "Best Mobile UI Design Nominee",
        organization: "Awwwards & Dribbble",
        description: "Fintech banking application nominated for best micro-interactions and accessibility."
      },
      {
        year: "2023",
        title: "Certified Professional UX Designer",
        organization: "Interaction Design Foundation (IxDF)",
        description: "Advanced certification in Human-Computer Interaction, Design Thinking, and Usability."
      }
    ]
  },

  // WordPress / Wix-Style Custom Drag-and-Drop Designs for Sections
  customDesigns: INITIAL_CUSTOM_DESIGNS
};

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem("k7_portfolio_data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...initialPortfolioData, ...parsed };
      } catch (e) {
        console.error("Error reading cached portfolio data:", e);
      }
    }
    return initialPortfolioData;
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(null);

  // Apply CSS Variables for Dynamic Theme
  useEffect(() => {
    const root = document.documentElement;
    const { primaryColor, secondaryColor, bgColor, textColor } = portfolioData.theme || {};
    if (primaryColor) root.style.setProperty('--color-primary', primaryColor);
    if (secondaryColor) root.style.setProperty('--color-secondary', secondaryColor);
    if (bgColor) root.style.setProperty('--color-bg', bgColor);
    if (textColor) root.style.setProperty('--color-text', textColor);
  }, [portfolioData.theme]);

  // Apply Dynamic Favicon & Title
  useEffect(() => {
    if (portfolioData.site?.title) {
      document.title = portfolioData.site.title;
    }
    const faviconUrl = portfolioData.site?.faviconUrl || "/favicon.svg";
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, [portfolioData.site?.title, portfolioData.site?.faviconUrl]);

  // Load from Firestore on mount
  useEffect(() => {
    const fetchCloudData = async () => {
      const res = await loadPortfolioDataFromFirestore();
      if (res.success && res.data) {
        setPortfolioData((prev) => {
          const merged = { ...prev, ...res.data };
          localStorage.setItem("k7_portfolio_data", JSON.stringify(merged));
          return merged;
        });
      }
    };
    fetchCloudData();
  }, []);

  // Update complete or partial portfolio data
  const updatePortfolioData = async (newData) => {
    setPortfolioData((prev) => {
      const updated = typeof newData === 'function' ? newData(prev) : { ...prev, ...newData };
      localStorage.setItem("k7_portfolio_data", JSON.stringify(updated));
      return updated;
    });

    // Save to Firestore in background
    setIsSyncing(true);
    const saveTarget = typeof newData === 'function' ? newData(portfolioData) : { ...portfolioData, ...newData };
    const res = await savePortfolioDataToFirestore(saveTarget);
    setIsSyncing(false);
    setLastSyncTime(new Date());
    return res;
  };

  // Helper to update specific section
  const updateSection = (sectionKey, sectionData) => {
    return updatePortfolioData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        ...sectionData
      }
    }));
  };

  // Helper to reorder sections (drag & drop)
  const reorderSections = (newSectionsList) => {
    return updatePortfolioData((prev) => ({
      ...prev,
      sections: newSectionsList
    }));
  };

  // Helper to update section preset
  const updateSectionPreset = (sectionId, preset) => {
    return updatePortfolioData((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => s.id === sectionId ? { ...s, preset } : s)
    }));
  };

  // Helper to update section animation
  const updateSectionAnimation = (sectionId, animConfig) => {
    return updatePortfolioData((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => s.id === sectionId ? { ...s, ...animConfig } : s)
    }));
  };

  // Helper to update custom drag & drop design for a specific section
  const updateCustomDesign = (sectionId, designData) => {
    return updatePortfolioData((prev) => ({
      ...prev,
      customDesigns: {
        ...prev.customDesigns,
        [sectionId]: typeof designData === 'function' ? designData(prev.customDesigns?.[sectionId] || {}) : designData
      }
    }));
  };

  // Helper to add a new custom drag & drop section
  const addCustomSection = (sectionName = "Custom Block Section") => {
    const customId = `custom_${Date.now()}`;
    const newSection = {
      id: customId,
      name: sectionName,
      enabled: true,
      preset: "custom",
      animation: "fade-up",
      animDuration: 0.8,
      animDelay: 0.1
    };

    return updatePortfolioData((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
      customDesigns: {
        ...prev.customDesigns,
        [customId]: JSON.parse(JSON.stringify(CODING_PORTFOLIO_HERO))
      }
    }));
  };

  // Helper to delete a custom section
  const deleteCustomSection = (sectionId) => {
    return updatePortfolioData((prev) => {
      const remainingSections = prev.sections.filter((s) => s.id !== sectionId);
      const remainingDesigns = { ...prev.customDesigns };
      delete remainingDesigns[sectionId];
      return {
        ...prev,
        sections: remainingSections,
        customDesigns: remainingDesigns
      };
    });
  };

  // Reset to default data
  const resetToDefaults = async () => {
    setPortfolioData(initialPortfolioData);
    localStorage.setItem("k7_portfolio_data", JSON.stringify(initialPortfolioData));
    await savePortfolioDataToFirestore(initialPortfolioData);
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        updatePortfolioData,
        updateSection,
        reorderSections,
        updateSectionPreset,
        updateSectionAnimation,
        updateCustomDesign,
        addCustomSection,
        deleteCustomSection,
        resetToDefaults,
        isSyncing,
        lastSyncTime
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
