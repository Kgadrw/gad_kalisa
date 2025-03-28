import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="relative mx-auto border border-gray-200 rounded-4xl px-12 py-12 bg-white" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 w-full max-w-md">
          <h2 className="text-3xl font-bold font-[Poppins] text-gray-900 mb-4">Let's Connect!</h2>
          <p className="text-gray-700 font-[Poppins] text-sm mb-4">
            Have any questions or want to work together? Fill out the form below, and let's chat!
          </p>
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Thank you for reaching out!</h3>
              <p className="text-gray-700">We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gray-900 text-white text-lg font-semibold rounded-md hover:bg-gray-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
        {/* Banner Image */}
        <div className="w-full h-full flex justify-center items-center">
          <img src="/ban.png" alt="Banner" className=" max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Contact;