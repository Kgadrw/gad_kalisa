import React, { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border border-gray-300 w-full fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between h-16 px-16 items-center">
                    {/* Name on the left */}
                    <Link href="/" className="text-2xl font-black text-blue-400">
                        GAD KALISA
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-blue-400"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    
                    {/* Social icons */}
                    <div className={`lg:flex space-x-4 ${isOpen ? "flex flex-col items-center absolute top-16 right-6 bg-white border border-gray-300 p-4 rounded-lg" : "hidden lg:flex"}`}>
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                            <Github size={24} className="text-blue-400 hover:text-blue-500" />
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} className="text-blue-400 hover:text-blue-500" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;