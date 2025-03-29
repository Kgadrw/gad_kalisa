import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useDarkMode } from '../components/darkmode'; // Import the dark mode context

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { darkMode } = useDarkMode(); // Get dark mode value from context

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    emailjs
      .send(
        "service_15gmamg",
        "template_2d43xx1",
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "0t7uS81N1_DAuGVjE"
      )
      .then(() => {
        setIsSubmitted(true);
        setLoading(false); // Stop loading
      })
      .catch(() => {
        setLoading(false); // Stop loading on error
      });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className={`relative mx-auto  px-6 sm:px-12 py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}
      style={{ backgroundImage: darkMode ? 'none' : 'url(/bg.jpg)', backgroundColor: darkMode ? '#0F172A' : 'white' }}
    >
      <div className={`max-w-6xl mx-auto p-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`p-6 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} w-full max-w-md mx-auto`}>
          <h2 className={`text-3xl font-bold font-[Poppins] ${darkMode ? 'text-blue-400' : 'text-blue-400'} mb-4 text-center sm:text-left`}>
            Let&apos;s Connect!
          </h2>
          <p className={`text-sm font-[Poppins] mb-4 text-center sm:text-left ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Have any questions or want to work together? Fill out the form below, and let&apos;s chat!
          </p>
          {isSubmitted ? (
            <div className="text-center">
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-900'} mb-4`}>
                Thank you for reaching out!
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-400'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 p-2 w-full text-gray-700 border rounded-md focus:ring-2 ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:ring-blue-400' : 'bg-white text-gray-700 border-gray-300 focus:ring-blue-400'}`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-400'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`mt-1 p-2 w-full text-gray-700 border rounded-md focus:ring-2 ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:ring-blue-400' : 'bg-white text-gray-700 border-gray-300 focus:ring-blue-400'}`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-400'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={`mt-1 p-2 w-full text-gray-700 border rounded-md focus:ring-2 ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:ring-blue-400' : 'bg-white text-gray-700 border-gray-300 focus:ring-blue-400'}`}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 text-white text-lg font-semibold rounded-md transition duration-300 flex justify-center items-center ${
                    loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-400 hover:bg-blue-500"
                  }`}
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="hidden sm:block w-full h-full flex justify-center items-center">
          <img src="/ban.png" alt="Banner" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
