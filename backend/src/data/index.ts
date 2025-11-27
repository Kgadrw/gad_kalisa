import {
  Service,
  Project,
  BlogPost,
  Resource,
  DomainExtension,
  DomainFeature,
  ProcessStep,
  AboutInfo,
} from '../types';

export const services: Service[] = [
  {
    title: "AI and the web",
    description:
      "Discover resources created to help you understand and build performant, web-first experiences with AI.",
    link: "Learn more",
    image: "/ai.png",
  },
  {
    title: "Optimize INP",
    description:
      "Interaction to Next Paint (INP) is now a Core Web Vital metrics. Start measuring and optimizing your site's INP.",
    link: "Learn more",
    image: "/inp.jpg",
  },
  {
    title: "Payments & Identity",
    description:
      "Read up on the latest features and best practices when it comes to identity and payment processing.",
    link: "Learn more",
    image: "/payment.png",
  },
];

export const projects: Project[] = [
  {
    tag: "Project",
    title: "TheBen",
    description:
      "A modern web solution built with clean design and optimal performance.",
    link: "View case study →",
    image: "/theben.PNG",
    url: "https://thebenofficial.com",
  },
  {
    tag: "Project",
    title: "Nelngabo",
    description:
      "A professional website with intuitive user experience and responsive design.",
    link: "View case study →",
    image: "/nelngabo.PNG",
    url: "https://nelngabo.com",
  },
  {
    tag: "Project",
    title: "UzaSolutions",
    description:
      "A comprehensive platform designed for efficiency and user engagement.",
    link: "View case study →",
    image: "/uzasolutions.PNG",
    url: "https://uzasolutions.com",
  },
  {
    tag: "Project",
    title: "WegoConnect",
    description:
      "A connected solution that brings people and services together seamlessly.",
    link: "View case study →",
    image: "/wegoconnect.PNG",
    url: "https://wegoconnect.net",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why your website speed matters more than you think",
    excerpt: "A slow website doesn't just frustrate users—it directly impacts your bottom line. Here's what the data shows.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Performance",
    bgColor: "bg-blue-50",
    content: "Full blog post content here...",
  },
  {
    id: 2,
    title: "The domain name guide: picking something that actually works",
    excerpt: "Beyond just availability—how to choose a domain that builds trust and makes sense for your brand.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Domains",
    bgColor: "bg-purple-50",
    content: "Full blog post content here...",
  },
  {
    id: 3,
    title: "What I learned building 50+ websites for small businesses",
    excerpt: "The patterns I see over and over, and what actually moves the needle for conversion.",
    date: "March 5, 2024",
    readTime: "8 min read",
    category: "Insights",
    bgColor: "bg-green-50",
    content: "Full blog post content here...",
  },
  {
    id: 4,
    title: "Accessibility isn't optional: a practical checklist",
    excerpt: "Simple steps to make your site usable for everyone, without overthinking it.",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Accessibility",
    bgColor: "bg-yellow-50",
    content: "Full blog post content here...",
  },
];

export const resources: Resource[] = [
  {
    label: "Guide",
    title: "How to choose a domain name that doesn't suck",
    description: "Practical tips for picking a domain that's memorable and actually available.",
    link: "Read guide →",
    bgColor: "bg-blue-50",
  },
  {
    label: "Guide",
    title: "What you actually need on your homepage (and what to skip)",
    description: "Cut through the noise and focus on what converts visitors into customers.",
    link: "Read guide →",
    bgColor: "bg-purple-50",
  },
  {
    label: "Guide",
    title: "Basic website performance explained in normal language",
    description: "Why speed matters and how to tell if your site is fast enough.",
    link: "Read guide →",
    bgColor: "bg-green-50",
  },
  {
    label: "Guide",
    title: "Landing page vs full website: which one first?",
    description: "Help deciding whether to start with a single page or build out a full site.",
    link: "Read guide →",
    bgColor: "bg-yellow-50",
  },
];

export const domainExtensions: DomainExtension[] = [
  {
    extension: ".com",
    price: "$12.99/yr",
    color: "text-blue-600",
  },
  {
    extension: ".net",
    price: "$18.99/yr",
    color: "text-yellow-600",
  },
  {
    extension: ".org",
    price: "$9.99/yr",
    color: "text-purple-600",
  },
  {
    extension: ".tech",
    price: "$4.99/yr",
    color: "text-green-600",
  },
  {
    extension: ".co",
    price: "$29.99/yr",
    color: "text-orange-600",
  },
  {
    extension: ".blog",
    price: "$22.99/yr",
    color: "text-gray-900",
  },
  {
    extension: ".website",
    price: "$1.99/yr",
    color: "text-blue-500",
  },
  {
    extension: ".Me",
    price: "$17.99/yr",
    color: "text-red-600",
    featured: true,
  },
];

export const domainFeatures: DomainFeature[] = [
  {
    title: "Easy domain management",
    bgColor: "bg-blue-500",
    buttonText: "More",
    image: "/domain.avif",
  },
  {
    title: "Domain forwarding",
    bgColor: "bg-blue-900",
    buttonText: "More",
    image: "/image.avif",
  },
  {
    title: "Auto-renewal",
    bgColor: "bg-blue-900",
    buttonText: "More",
    image: "/renewal.avif",
  },
  {
    title: "Domain lock",
    bgColor: "bg-blue-500",
    buttonText: "More",
    image: "/lock.avif",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "HTML",
    description:
      "HTML is the document layer of the web, providing structure and semantics for pages.",
    link: "Learn more",
    icon: "html",
    bgColor: "bg-blue-50",
  },
  {
    title: "CSS",
    description:
      "CSS is the presentation layer of the web, and allows you to make your web pages look exactly like you imagine.",
    link: "Learn more",
    icon: "css",
    bgColor: "bg-purple-50",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript adds rich interactivity to web pages, so you can build websites that help users to perform tasks and accomplish goals.",
    link: "Learn more",
    icon: "js",
    bgColor: "bg-green-50",
  },
];

export const aboutInfo: AboutInfo = {
  title: "About",
  subtitle: "Freelance web developer & domain dealer",
  content: [
    "I'm a freelance web developer who helps brands and creators build clean, fast websites that actually convert. I also specialize in finding and setting up the right domain names so you look legit everywhere online.",
    "My approach is simple: no jargon, no unnecessary complexity, just clear communication and solid work. Whether you need a full website, a landing page, or just help with domain setup, I'll make sure you understand what's happening every step of the way.",
    "I focus on modern, performance-optimized builds using HTML, CSS, and JavaScript frameworks. Every site I build is mobile-first, accessible, and designed with your users in mind.",
  ],
  beliefs: [
    "Websites should be fast, accessible, and easy to use—not flashy for the sake of it.",
    "Your domain name matters. It's often the first impression people have of your brand.",
    "Transparency is key. You should understand what you're paying for and why.",
    "Good design is invisible—it gets out of the way and lets your content shine.",
  ],
};

