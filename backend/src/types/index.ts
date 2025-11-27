export interface Service {
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  link: string;
  image: string;
  url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  bgColor: string;
  content?: string;
}

export interface Resource {
  label: string;
  title: string;
  description: string;
  link: string;
  bgColor: string;
}

export interface DomainExtension {
  extension: string;
  price: string;
  color: string;
  featured?: boolean;
}

export interface DomainFeature {
  title: string;
  bgColor: string;
  buttonText: string;
  image: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  link: string;
  icon: string;
  bgColor: string;
}

export interface AboutInfo {
  title: string;
  subtitle: string;
  content: string[];
  beliefs: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  project: string;
  message: string;
}

