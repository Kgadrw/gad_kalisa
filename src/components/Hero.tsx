import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Phone, Mail, Linkedin, Github, Gitlab, Twitter, CloudUpload } from "lucide-react";

const Hero = () => {
    return (
        <section 
            className="flex items-center justify-center min-h-screen bg-gray-50 px-6 md:px-12 lg:px-32 border-b border-gray-200"
            style={{ backgroundImage: 'url(/line.png)', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full">
                {/* Hero Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-600 leading-tight mb-4 font-[Poppins]">
                        Hello, I am Gad Kalisa
                    </h1>
                    <TypeAnimation
                        sequence={[
                            "I am a Frontend Developer", 1000,
                            "UI/UX Designer", 1000,
                            "Mobile Developer", 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-2xl md:text-3xl text-blue-400 font-extrabold font-[Poppins]"
                    />
                    
                    {/* Contact Information */}
                    <div className="mt-6 text-gray-600 space-y-2">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Phone className="text-blue-400" />
                            <span>0791998365</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Mail className="text-blue-400" />
                            <span>kalisagad05@gmail.com</span>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4 text-center md:text-left">
                        I am Gad Kalisa, a certified UI/UX Designer and Front-End Developer skilled in HTML, CSS, JavaScript, and React.js. I specialize in
                        creating responsive websites and user-friendly designs using tools like Figma and Adobe XD, delivering seamless
                        user experiences and efficient web solutions.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-4 py-3 bg-blue-400 text-white font-bold rounded-full hover:bg-gray-50 border border-blue-400 hover:text-blue-400 w-full sm:w-auto">
                            Hire me
                        </button>
                        <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-blue-400 text-blue-400 font-bold rounded-full hover:text-white hover:bg-blue-400 w-full sm:w-auto">
                            <CloudUpload className="w-5 h-5" />
                            <span>Get my CV</span>
                        </button>
                    </div>
                    {/* Social Media Icons */}
                    <div className="mt-8 flex justify-center md:justify-start space-x-4 text-white text-2xl">
                        <a href="#" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Gitlab /></a>
                        <a href="#" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Twitter /></a>
                        <a href="#" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Github /></a>
                        <a href="#" className="bg-blue-400 border border-blue-400 rounded-full p-2"><Linkedin /></a>
                    </div>
                </div>
                
                {/* Hero Image - Hidden on Mobile */}
                <div className="hidden md:flex md:w-1/2 justify-center md:justify-end mt-8 md:mt-0">
                    <img src="/profile.png" alt="Profile" className="w-40 md:w-2/3 max-w-xs rounded-full object-contain aspect-square border-4 border-blue-500 bg-blue-400 border-dotted" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
