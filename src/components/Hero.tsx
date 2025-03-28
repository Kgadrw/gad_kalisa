import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Phone, Mail, Linkedin, Github, Gitlab, Twitter, CloudUpload } from "lucide-react";

const Hero = () => {
    return (
        <section 
    className="flex items-center justify-between h-[100vh] bg-gray-50 px-32 border-b border-gray-200"
    style={{ backgroundImage: 'url(/line.png)', backgroundPosition:'bottom' , backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full">
                {/* Hero Text Content */}
                <div className="md:w-1/2 text-left">
                    <h1 className="text-6xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 font-[Poppins]">
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
                        className="text-4xl md:text-3xl text-gray-900 font-extrabold font-[Poppins]"
                    />
                    
                    {/* Contact Information */}
                    <div className="mt-6 text-gray-700 space-y-2">
                        <div className="flex items-center space-x-2">
                            <Phone className="text-gray-700 " />
                            <span>0791998365</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="text-gray-700 " />
                            <span>kalisagad05@gmail.com</span>
                        </div>
                    </div>
                    <p className="text-gray-700 mt-4">
                        I am Gad Kalisa, a certified UI/UX Designer and Front-End Developer skilled in HTML, CSS, JavaScript, and React.js. I specialize in
                        creating responsive websites and user-friendly designs using tools like Figma and Adobe XD, delivering seamless
                        user experiences and efficient web solutions.
                    </p>
                    <div className="mt-2 flex space-x-4">
                        <button className="flex mt-6 px-4 py-3 bg-gray-800 text-white font-bold rounded-full hover:text-gray-800 hover:bg-gray-50 border border-gray-800">
                            Hire me
                        </button>
                        <button className="flex items-center space-x-2 mt-6 px-4 py-3 border border-gray-800 text-gray-800 font-bold rounded-full hover:text-white hover:bg-gray-800">
                            <CloudUpload className="w-5 h-5" />
                            <span>Get my CV</span>
                        </button>
                    </div>
                    {/* Social Media Icons */}
                    <div className="mt-8 flex space-x-4 text-white text-2xl">
                        <a href="#" className="bg-gray-800 border border-gray-900 rounded-full p-2"><Gitlab /></a>
                        <a href="#" className="bg-gray-800 border border-gray-900 rounded-full p-2"><Twitter /></a>
                        <a href="#" className="bg-gray-800 border border-gray-900 rounded-full p-2"><Github /></a>
                        <a href="#" className="bg-gray-800 border border-gray-900 rounded-full p-2"><Linkedin /></a>
                    </div>
                </div>
                
                {/* Hero Image */}
                <div className="md:w-1/2 flex justify-end">
                    <img src="/profile.png" alt="Profile" className="w-2/3 max-w-xs rounded-full object-contain aspect-square border-4 border-gray-900 bg-gray-800" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
