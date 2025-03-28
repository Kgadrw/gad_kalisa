import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-white border border-gray-300 w-full fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-32 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 px-16 items-center">
                    {/* Name on the left */}
                    <Link href="/" className="text-2xl font-black text-gray-800">
                        GAD KALISA
                    </Link>
                    
                    {/* Social icons on the right */}
                    <div className="flex space-x-4">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                            <Github size={24} className="text-gray-800 hover:text-gray-600 " />
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} className="text-gray-800 hover:text-gray-600" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
