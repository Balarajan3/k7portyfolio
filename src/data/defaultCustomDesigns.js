/**
 * Default Custom Designs & Pre-built Templates for WordPress/Elementor-Style Drag-and-Drop Builder
 * Includes full Developer / Coding Portfolio designs, UI/UX Designer designs, and Bento Showcases.
 */

export const CODING_PORTFOLIO_HERO = {
  background: {
    type: "coding-grid", // 'solid', 'linear-gradient', 'radial-glow', 'coding-grid', 'dark-terminal', 'glassmorphic'
    solidColor: "#080c14",
    gradientStart: "#080c14",
    gradientEnd: "#111827",
    gradientDirection: "to-br",
    gridPattern: "grid-dots", // 'grid-dots', 'grid-lines', 'cyber-matrix', 'none'
    glowAccent: "#6366f1",
    paddingTop: "py-24",
    paddingBottom: "py-20",
    containerWidth: "max-w-7xl"
  },
  elements: [
    {
      id: "elem-badge-1",
      type: "badge",
      text: "⚡ AVAILABLE FOR FULL-STACK & UI/UX ROLES",
      style: "glowing-pill", // 'glowing-pill', 'dot', 'glass-chip', 'border', 'plain'
      icon: "Terminal",
      color: "emerald"
    },
    {
      id: "elem-title-1",
      type: "heading",
      text: "Building High-Impact Web Apps with Clean Code & Intuitive UI",
      tag: "h1",
      size: "text-4xl sm:text-5xl lg:text-6xl",
      align: "left",
      isGradient: true,
      gradientFrom: "#38bdf8",
      gradientTo: "#818cf8",
      color: "#FFFFFF",
      weight: "font-extrabold"
    },
    {
      id: "elem-para-1",
      type: "paragraph",
      text: "Full-Stack Engineer & UI/UX Specialist crafting resilient digital products from concept to cloud. Bridging creative design systems with production-grade React, TypeScript, Next.js, and serverless architectures.",
      size: "text-lg",
      align: "left",
      color: "#94a3b8"
    },
    {
      id: "elem-btns-1",
      type: "buttonGroup",
      align: "left",
      buttons: [
        {
          id: "b-1",
          label: "View Repos & Projects",
          type: "route",
          route: "#portfolio",
          icon: "Code2",
          iconPosition: "prefix",
          variant: "primary"
        },
        {
          id: "b-2",
          label: "Download Full Resume",
          type: "file",
          fileUrl: "",
          icon: "Download",
          iconPosition: "suffix",
          variant: "outline"
        }
      ]
    },
    {
      id: "elem-terminal-1",
      type: "terminal",
      filename: "developer.config.ts",
      language: "typescript",
      code: `import { DeveloperProfile } from '@k7/core';

export const engineer: DeveloperProfile = {
  name: 'Kesavan',
  role: 'Full-Stack UI/UX Engineer',
  focus: ['Scalable Web Architecture', 'Design Systems', 'Cloud Native'],
  stack: {
    frontend: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Firebase', 'PostgreSQL', 'GraphQL'],
    tooling: ['Vite', 'Docker', 'Git CI/CD', 'Figma API']
  },
  metrics: {
    cleanCodeRate: '100%',
    lighthouseScore: 99,
    testCoverage: '94%'
  },
  status: 'Available for high-impact engineering projects'
};`,
      theme: "cyberpunk", // 'dracula', 'cyberpunk', 'vscode', 'matrix'
      showLineNumbers: true,
      showCopy: true
    },
    {
      id: "elem-stats-1",
      type: "devStats",
      title: "Developer Output & Track Record",
      items: [
        { id: "s-1", label: "Git Commits", value: "2,840+", icon: "GitCommit", subtext: "Past 12 months" },
        { id: "s-2", label: "PRs Merged", value: "150+", icon: "GitPullRequest", subtext: "Zero regressions" },
        { id: "s-3", label: "Production Apps", value: "24+", icon: "Cpu", subtext: "Shipped & live" },
        { id: "s-4", label: "Lighthouse Score", value: "99/100", icon: "Zap", subtext: "Core Web Vitals" }
      ]
    },
    {
      id: "elem-stack-1",
      type: "techStack",
      title: "Core Engineering Technologies",
      skills: [
        { name: "React 19", icon: "Atom", level: "98%", color: "#38bdf8" },
        { name: "TypeScript", icon: "Code2", level: "95%", color: "#60a5fa" },
        { name: "Next.js", icon: "Layers", level: "92%", color: "#f8fafc" },
        { name: "Tailwind CSS", icon: "Palette", level: "99%", color: "#2dd4bf" },
        { name: "Node.js", icon: "Server", level: "88%", color: "#4ade80" },
        { name: "PostgreSQL", icon: "Database", level: "85%", color: "#818cf8" },
        { name: "Docker", icon: "Box", level: "82%", color: "#38bdf8" },
        { name: "Figma to Code", icon: "Sparkles", level: "100%", color: "#ec4899" }
      ]
    }
  ]
};

export const CODING_PORTFOLIO_SKILLS = {
  background: {
    type: "dark-terminal",
    solidColor: "#090d16",
    gradientStart: "#090d16",
    gradientEnd: "#141d2f",
    gradientDirection: "to-b",
    gridPattern: "cyber-matrix",
    glowAccent: "#38bdf8",
    paddingTop: "py-20",
    paddingBottom: "py-20",
    containerWidth: "max-w-6xl"
  },
  elements: [
    {
      id: "sk-badge",
      type: "badge",
      text: "⚡ TECHNICAL PROFICIENCY",
      style: "glowing-pill",
      icon: "Terminal",
      color: "cyan"
    },
    {
      id: "sk-title",
      type: "heading",
      text: "Full-Stack Technology Ecosystem",
      tag: "h2",
      size: "text-3xl sm:text-4xl",
      align: "center",
      isGradient: true,
      gradientFrom: "#38bdf8",
      gradientTo: "#a855f7",
      color: "#FFFFFF",
      weight: "font-bold"
    },
    {
      id: "sk-para",
      type: "paragraph",
      text: "A breakdown of languages, frameworks, cloud services, and performance tools I leverage to engineer fast, resilient digital software.",
      size: "text-base",
      align: "center",
      color: "#94a3b8"
    },
    {
      id: "sk-cards",
      type: "cards",
      columns: 3,
      items: [
        {
          id: "c-1",
          title: "Frontend Engineering",
          desc: "Building accessible, performant SPAs & SSR applications using React, Next.js, Redux, and TailwindCSS.",
          icon: "Layout",
          tag: "Frontend",
          metric: "98% Score"
        },
        {
          id: "c-2",
          title: "Backend & Cloud Services",
          desc: "Developing secure REST & GraphQL APIs, microservices, and serverless architectures with Node and Firebase.",
          icon: "Server",
          tag: "Cloud",
          metric: "Sub-50ms"
        },
        {
          id: "c-3",
          title: "Design Systems & Token Architecture",
          desc: "Translating Figma design tokens to reusable React components with Storybook and automated accessibility testing.",
          icon: "Palette",
          tag: "Design Tokens",
          metric: "Zero Drift"
        }
      ]
    },
    {
      id: "sk-tech",
      type: "techStack",
      title: "Interactive Frameworks Matrix",
      skills: [
        { name: "React 19", icon: "Atom", level: "98%", color: "#38bdf8" },
        { name: "TypeScript", icon: "Code2", level: "95%", color: "#60a5fa" },
        { name: "Next.js", icon: "Layers", level: "92%", color: "#f8fafc" },
        { name: "Tailwind CSS", icon: "Palette", level: "99%", color: "#2dd4bf" },
        { name: "GraphQL", icon: "Cpu", level: "85%", color: "#f472b6" },
        { name: "Vite", icon: "Zap", level: "96%", color: "#fbbf24" }
      ]
    }
  ]
};

export const UI_UX_PORTFOLIO_HERO = {
  background: {
    type: "linear-gradient",
    solidColor: "#0f172a",
    gradientStart: "#0b0f19",
    gradientEnd: "#1e1b4b",
    gradientDirection: "to-br",
    gridPattern: "grid-dots",
    glowAccent: "#818cf8",
    paddingTop: "py-24",
    paddingBottom: "py-24",
    containerWidth: "max-w-7xl"
  },
  elements: [
    {
      id: "ui-badge",
      type: "badge",
      text: "🎨 UI/UX PRODUCT DESIGNER",
      style: "glowing-pill",
      icon: "Sparkles",
      color: "purple"
    },
    {
      id: "ui-title",
      type: "heading",
      text: "Designing Meaningful Digital Products People Love Using",
      tag: "h1",
      size: "text-4xl sm:text-5xl lg:text-6xl",
      align: "left",
      isGradient: true,
      gradientFrom: "#c084fc",
      gradientTo: "#60a5fa",
      color: "#FFFFFF",
      weight: "font-extrabold"
    },
    {
      id: "ui-para",
      type: "paragraph",
      text: "Specializing in SaaS dashboards, mobile apps, and robust design systems. Combining deep user research with crisp visual hierarchy and developer-friendly token structures.",
      size: "text-lg",
      align: "left",
      color: "#94a3b8"
    },
    {
      id: "ui-btns",
      type: "buttonGroup",
      align: "left",
      buttons: [
        {
          id: "ub-1",
          label: "View Selected Works",
          type: "route",
          route: "#portfolio",
          icon: "ArrowRight",
          iconPosition: "suffix",
          variant: "primary"
        },
        {
          id: "ub-2",
          label: "Interactive Figma Canvas",
          type: "route",
          route: "#figma",
          icon: "Layers",
          iconPosition: "prefix",
          variant: "outline"
        }
      ]
    },
    {
      id: "ui-cards",
      type: "cards",
      columns: 3,
      items: [
        {
          id: "uc-1",
          title: "SaaS Dashboards",
          desc: "Complex data visualization simplified into intuitive user journeys.",
          icon: "BarChart3",
          tag: "Analytics",
          metric: "15+ Platforms"
        },
        {
          id: "uc-2",
          title: "Mobile App Design",
          desc: "Native iOS & Android apps designed with micro-interactions and smooth flows.",
          icon: "Smartphone",
          tag: "Mobile",
          metric: "4.9★ Rating"
        },
        {
          id: "uc-3",
          title: "Design Systems",
          desc: "Scalable component libraries in Figma synced directly with front-end code.",
          icon: "Component",
          tag: "Design System",
          metric: "500+ Tokens"
        }
      ]
    }
  ]
};

export const INITIAL_CUSTOM_DESIGNS = {
  hero: CODING_PORTFOLIO_HERO,
  about: CODING_PORTFOLIO_SKILLS,
  services: CODING_PORTFOLIO_SKILLS,
  stats: CODING_PORTFOLIO_HERO,
  selectedworks: UI_UX_PORTFOLIO_HERO,
  custom_section_1: CODING_PORTFOLIO_HERO
};
