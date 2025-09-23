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
    id: "lindocare-store",
    name: "LindoCare Store",
    description: "Healthcare e-commerce platform for medical supplies and equipment",
    longDescription: "A comprehensive healthcare e-commerce platform specializing in medical supplies, equipment, and pharmaceutical products. Built with modern web technologies to provide healthcare professionals and institutions with a reliable source for medical supplies. Features include product catalog management, secure payment processing, prescription handling, and compliance with healthcare regulations.",
    link: "https://lindocare.store",
    image: "/lindo.PNG",
    images: ["/lindo.PNG"],
    categories: ["Web", "E-commerce"],
    createdAt: "2024-01-15",
    pro: true,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Healthcare APIs"],
    features: [
      "Medical Product Catalog",
      "Prescription Management",
      "Secure Payment Processing",
      "Healthcare Compliance",
      "Inventory Management",
      "Order Tracking"
    ],
    challenges: [
      "Ensuring healthcare compliance",
      "Managing prescription requirements",
      "Implementing secure payment processing"
    ],
    solutions: [
      "Integrated healthcare compliance protocols",
      "Created prescription verification system",
      "Implemented HIPAA-compliant data handling"
    ],
    results: [
      "100% compliance with healthcare regulations",
      "95% customer satisfaction rate",
      "40% increase in medical supply accessibility"
    ],
    client: "Healthcare Provider",
    duration: "4 months",
    role: "Full-Stack Developer"
  },
  {
    id: "wegoconnect-net",
    name: "WegoConnect",
    description: "Transportation and logistics management platform",
    longDescription: "A comprehensive transportation and logistics management platform that connects drivers, passengers, and logistics companies. Features real-time tracking, route optimization, payment processing, and fleet management. Built to streamline transportation services and improve efficiency in the logistics sector.",
    link: "https://wegoconnect.net",
    image: "/wego.PNG",
    images: ["/wego.PNG"],
    categories: ["Web", "Mobile", "Logistics"],
    createdAt: "2024-02-20",
    pro: true,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    features: [
      "Real-time Tracking",
      "Route Optimization",
      "Driver Management",
      "Payment Processing",
      "Fleet Analytics",
      "Customer Support"
    ],
    challenges: [
      "Real-time GPS tracking implementation",
      "Route optimization algorithms",
      "Managing multiple user types"
    ],
    solutions: [
      "Integrated Google Maps API for tracking",
      "Developed custom route optimization algorithms",
      "Created role-based access control system"
    ],
    results: [
      "50% improvement in delivery efficiency",
      "30% reduction in fuel costs",
      "90% customer satisfaction rate"
    ],
    client: "Logistics Company",
    duration: "5 months",
    role: "Full-Stack Developer"
  },
  {
    id: "uzasolutions-com",
    name: "UzaSolutions",
    description: "Business solutions and consulting platform",
    longDescription: "A comprehensive business solutions platform offering consulting services, digital transformation, and technology implementation. Features include service portfolio management, client portal, project tracking, and resource management. Designed to help businesses optimize their operations and embrace digital transformation.",
    link: "https://uzasolutions.com",
    image: "/uza.PNG",
    images: ["/uza.PNG"],
    categories: ["Web", "Business"],
    createdAt: "2024-03-10",
    pro: true,
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    features: [
      "Service Portfolio Management",
      "Client Portal",
      "Project Tracking",
      "Resource Management",
      "Consultation Booking",
      "Document Management"
    ],
    challenges: [
      "Managing complex project workflows",
      "Integrating multiple business tools",
      "Ensuring client data security"
    ],
    solutions: [
      "Created custom workflow management system",
      "Integrated third-party business tools",
      "Implemented enterprise-grade security"
    ],
    results: [
      "60% improvement in project delivery time",
      "40% increase in client satisfaction",
      "25% reduction in operational costs"
    ],
    client: "Business Consulting Firm",
    duration: "4 months",
    role: "Full-Stack Developer"
  },
  {
    id: "uzabulk-com",
    name: "UzaBulk",
    description: "Bulk purchasing and wholesale platform",
    longDescription: "A specialized e-commerce platform for bulk purchasing and wholesale transactions. Features include bulk pricing tiers, inventory management, supplier management, and order processing for large quantities. Designed to facilitate B2B transactions and streamline wholesale operations.",
    link: "https://uzabulk.com",
    image: "/bullk.PNG",
    images: ["/bullk.PNG"],
    categories: ["Web", "B2B", "E-commerce"],
    createdAt: "2024-04-05",
    pro: true,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Inventory APIs"],
    features: [
      "Bulk Pricing Tiers",
      "Inventory Management",
      "Supplier Portal",
      "Order Processing",
      "B2B Authentication",
      "Wholesale Analytics"
    ],
    challenges: [
      "Managing complex pricing structures",
      "Handling large inventory volumes",
      "Implementing B2B authentication"
    ],
    solutions: [
      "Created dynamic pricing engine",
      "Implemented scalable inventory system",
      "Developed enterprise authentication"
    ],
    results: [
      "70% increase in wholesale transactions",
      "50% reduction in order processing time",
      "35% improvement in supplier satisfaction"
    ],
    client: "Wholesale Distributor",
    duration: "3 months",
    role: "Full-Stack Developer"
  },
  {
    id: "3-dp-rw",
    name: "3D Printing Rwanda",
    description: "3D printing services and design platform",
    longDescription: "A comprehensive platform for 3D printing services, design consultation, and project management. Features include 3D model upload, printing job management, material selection, and project tracking. Built to make 3D printing services accessible and efficient for businesses and individuals in Rwanda.",
    link: "https://3-dp.rw",
    image: "/3dp.JPG",
    images: ["/3dp.JPG"],
    categories: ["Web", "3D Printing", "Manufacturing"],
    createdAt: "2024-05-12",
    pro: false,
    technologies: ["React", "Three.js", "Node.js", "MongoDB", "3D APIs"],
    features: [
      "3D Model Upload",
      "Print Job Management",
      "Material Selection",
      "Design Consultation",
      "Project Tracking",
      "Quality Control"
    ],
    challenges: [
      "Handling 3D file uploads",
      "Managing print job queues",
      "Integrating 3D visualization"
    ],
    solutions: [
      "Implemented secure file upload system",
      "Created job queue management system",
      "Integrated Three.js for 3D visualization"
    ],
    results: [
      "80% increase in 3D printing accessibility",
      "60% improvement in project turnaround time",
      "90% customer satisfaction rate"
    ],
    client: "3D Printing Service",
    duration: "3 months",
    role: "Full-Stack Developer"
  },
  {
    id: "igatek-africa",
    name: "IGATEK Africa",
    description: "Technology solutions and digital transformation platform",
    longDescription: "A comprehensive technology solutions platform offering digital transformation services, software development, and IT consulting across Africa. Features include service portfolio, case studies, client testimonials, and project showcase. Built to showcase technological expertise and provide solutions for businesses looking to embrace digital transformation.",
    link: "https://igatek.africa",
    image: "/igatek.JPG",
    images: ["/igatek.JPG"],
    categories: ["Web", "Technology", "Consulting"],
    createdAt: "2024-06-18",
    pro: true,
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "AWS"],
    features: [
      "Service Portfolio",
      "Case Studies",
      "Client Testimonials",
      "Project Showcase",
      "Consultation Booking",
      "Technology Blog"
    ],
    challenges: [
      "Showcasing diverse technology expertise",
      "Managing multiple service offerings",
      "Creating engaging user experience"
    ],
    solutions: [
      "Developed comprehensive service catalog",
      "Created interactive project showcase",
      "Implemented modern UI/UX design"
    ],
    results: [
      "200% increase in client inquiries",
      "85% improvement in lead conversion",
      "95% client satisfaction rate"
    ],
    client: "Technology Consulting Firm",
    duration: "4 months",
    role: "Full-Stack Developer"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.categories.includes(category));
};
