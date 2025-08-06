import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wifi, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    Products: [
      "Starlink Residential",
      "Starlink Business", 
      "Starlink Roam",
      "Compare Plans",
      "Pricing"
    ],
    Services: [
      "Installation",
      "Technical Support",
      "Maintenance",
      "Business Solutions",
      "Training"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "News & Updates",
      "Contact"
    ],
    Support: [
      "Help Center",
      "Documentation",
      "System Status",
      "Community Forum",
      "Report Issue"
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">WegoConnect</h1>
                <p className="text-sm text-secondary-foreground/70">Starlink Rwanda</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Connecting Rwanda to the future with high-speed satellite internet. 
              Professional installation and 24/7 support across the nation.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@wegoconnect.rw</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-secondary-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-secondary-foreground/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
              <p className="text-secondary-foreground/70">
                Get the latest updates on Starlink services and connectivity news in Rwanda.
              </p>
            </div>
            <div className="flex gap-4">
              <Input 
                placeholder="Enter your email address" 
                className="bg-background text-foreground"
              />
              <Button variant="cta">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image 
              src="/images.jpeg" 
              alt="WegoConnect logo"
              width={40} 
              height={40} 
              className="rounded"
            />
            <span className="text-sm text-secondary-foreground/70">
              © 2024 WegoConnect. All rights reserved. | Privacy Policy | Terms of Service
            </span>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
