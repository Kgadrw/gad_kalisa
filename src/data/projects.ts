export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  link: string;
  image: string;
  images?: string[];
  categories: string[];
  createdAt: string;
  pro: boolean;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  client?: string;
  duration?: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "iga-tek-new-version",
    name: "IGA TEK New version",
    description: "Solo project: I built it for Igatek company.",
    longDescription: "A comprehensive digital platform designed to modernize Igatek's business operations and improve customer engagement. This project involved complete redesign and development of their existing system with enhanced features and better user experience.",
    link: "https://iga-tek-connect.vercel.app/",
    image: "/iga.JPG",
    categories: ["Web"],
    createdAt: "2023-09-25",
    pro: true,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Responsive design for all devices",
      "User authentication and authorization",
      "Real-time data updates",
      "Admin dashboard for content management",
      "Mobile-first approach",
      "SEO optimization"
    ],
    challenges: [
      "Migrating from legacy system without downtime",
      "Ensuring data integrity during migration",
      "Creating intuitive user interface for non-technical users",
      "Optimizing performance for large datasets"
    ],
    solutions: [
      "Implemented gradual migration strategy",
      "Created comprehensive data validation system",
      "Designed user-friendly interface with extensive testing",
      "Optimized database queries and implemented caching"
    ],
    results: [
      "40% increase in user engagement",
      "60% reduction in page load time",
      "95% user satisfaction rate",
      "Zero downtime during migration"
    ],
    client: "Igatek Company",
    duration: "3 months",
    role: "Full-stack Developer & UI/UX Designer"
  },
  {
    id: "data-driven-partners",
    name: "Data driven partners",
    description: "Solo project: Built and designed the platform to connect data-driven partners with businesses.",
    longDescription: "An innovative B2B platform that connects data-driven partners with businesses looking for data solutions. The platform facilitates partnerships, data sharing, and collaborative projects in the data analytics space.",
    link: "https://3dp.rw/",
    image: "/3dp.JPG",
    categories: ["Web"],
    createdAt: "2023-11-15",
    pro: true,
    technologies: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    features: [
      "Partner matching algorithm",
      "Secure data sharing protocols",
      "Project collaboration tools",
      "Payment integration",
      "Advanced search and filtering",
      "Real-time notifications"
    ],
    challenges: [
      "Building secure data sharing mechanisms",
      "Creating effective partner matching algorithm",
      "Ensuring data privacy and compliance",
      "Handling complex payment flows"
    ],
    solutions: [
      "Implemented end-to-end encryption for data sharing",
      "Developed ML-based matching algorithm",
      "Created comprehensive privacy controls",
      "Integrated multiple payment gateways"
    ],
    results: [
      "200+ registered partners",
      "50+ successful partnerships",
      "99.9% uptime",
      "30% increase in partnership success rate"
    ],
    client: "3DP Rwanda",
    duration: "4 months",
    role: "Full-stack Developer & Product Designer"
  },
  {
    id: "uza-solution",
    name: "Uza solution",
    description: "Solo project: I built it for Uza Solution company.",
    longDescription: "A comprehensive business solution platform designed to streamline operations for Uza Solution. The platform includes client management, project tracking, and financial reporting features tailored to their specific business needs.",
    link: "https://uzasolution.vercel.app/",
    image: "/uza.PNG",
    categories: ["Web"],
    createdAt: "2023-10-20",
    pro: true,
    technologies: ["Vue.js", "Nuxt.js", "JavaScript", "Vuetify", "Express.js", "MySQL"],
    features: [
      "Client relationship management",
      "Project tracking and timeline",
      "Financial reporting dashboard",
      "Document management system",
      "Team collaboration tools",
      "Custom reporting features"
    ],
    challenges: [
      "Integrating with existing business processes",
      "Creating flexible reporting system",
      "Ensuring data accuracy across modules",
      "Training non-technical staff"
    ],
    solutions: [
      "Conducted extensive business process analysis",
      "Built modular reporting system",
      "Implemented data validation at multiple levels",
      "Created comprehensive training materials"
    ],
    results: [
      "50% reduction in administrative time",
      "Improved data accuracy by 90%",
      "Enhanced client satisfaction",
      "Streamlined business operations"
    ],
    client: "Uza Solution",
    duration: "2.5 months",
    role: "Full-stack Developer & Business Analyst"
  },
  {
    id: "uza-bulk",
    name: "Uza bulk",
    description: "I handled everything solo — development and UI design for this e-commerce platform.",
    longDescription: "A comprehensive e-commerce platform specializing in bulk sales and wholesale operations. The platform features advanced inventory management, bulk pricing, and streamlined ordering processes for B2B customers.",
    link: "https://www.uzabulk.com/",
    image: "/bullk.PNG",
    categories: ["Web"],
    createdAt: "2024-02-20",
    pro: true,
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "MongoDB", "AWS"],
    features: [
      "Bulk ordering system",
      "Dynamic pricing based on quantity",
      "Inventory management",
      "Order tracking and history",
      "Customer portal",
      "Admin dashboard"
    ],
    challenges: [
      "Implementing complex bulk pricing logic",
      "Managing large inventory datasets",
      "Creating intuitive bulk ordering interface",
      "Ensuring payment security"
    ],
    solutions: [
      "Developed flexible pricing engine",
      "Implemented efficient inventory caching",
      "Created step-by-step ordering wizard",
      "Integrated secure payment processing"
    ],
    results: [
      "300% increase in bulk orders",
      "25% reduction in order processing time",
      "99.5% payment success rate",
      "Improved customer retention"
    ],
    client: "Uza Bulk",
    duration: "3.5 months",
    role: "Full-stack Developer & E-commerce Specialist"
  },
  {
    id: "igatek",
    name: "IgaTek",
    description: "Self project: I built and designed the entire UI. Platform helps locals access digital literacy.",
    longDescription: "A community-focused digital literacy platform designed to help local communities access technology education and resources. The platform provides courses, resources, and community support for digital skills development.",
    link: "https://iga.speclucs.rw/",
    image: "/igatek.JPG",
    categories: ["Web"],
    createdAt: "2024-03-15",
    pro: false,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    features: [
      "Course management system",
      "Progress tracking",
      "Community forums",
      "Resource library",
      "Mobile-responsive design",
      "Offline content access"
    ],
    challenges: [
      "Making content accessible to low-tech users",
      "Ensuring offline functionality",
      "Building community engagement features",
      "Creating scalable course structure"
    ],
    solutions: [
      "Simplified user interface design",
      "Implemented service workers for offline access",
      "Created gamification elements",
      "Built modular course architecture"
    ],
    results: [
      "500+ registered users",
      "80% course completion rate",
      "Active community engagement",
      "Positive impact on digital literacy"
    ],
    client: "Community Project",
    duration: "2 months",
    role: "Full-stack Developer & Community Builder"
  },
  {
    id: "unicash",
    name: "Unicash",
    description: "I built and designed this dashboard solo to help students manage their finances.",
    longDescription: "A financial management dashboard specifically designed for students to track expenses, manage budgets, and learn financial literacy. The platform provides tools for expense tracking, budget planning, and financial goal setting.",
    link: "https://unicash.vercel.app/",
    image: "/unicash.PNG",
    categories: ["Web"],
    createdAt: "2024-01-10",
    pro: false,
    technologies: ["React", "Next.js", "TypeScript", "Chart.js", "Local Storage", "PWA"],
    features: [
      "Expense tracking and categorization",
      "Budget planning and monitoring",
      "Financial goal setting",
      "Spending analytics and reports",
      "Bill reminders",
      "PWA for mobile access"
    ],
    challenges: [
      "Creating intuitive financial interfaces",
      "Ensuring data privacy and security",
      "Making financial concepts accessible",
      "Building offline functionality"
    ],
    solutions: [
      "Designed user-friendly financial dashboards",
      "Implemented client-side data encryption",
      "Created educational tooltips and guides",
      "Built comprehensive PWA features"
    ],
    results: [
      "1000+ student users",
      "Average 30% improvement in financial awareness",
      "High user retention rate",
      "Positive user feedback"
    ],
    client: "Student Community",
    duration: "1.5 months",
    role: "Full-stack Developer & Financial UX Designer"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.categories.includes(category));
};
