"use client";
import { Loader2, Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
      // Convert form data to FormData
      const formDataObj = new FormData();
      formDataObj.append("Name", formData.Name);
      formDataObj.append("Email", formData.Email);
      formDataObj.append("Message", formData.Message);
      formDataObj.append("Date", new Date().toLocaleString());
      
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataObj,
      });
      
      if(response.ok === true) {
        toast.success("Form submitted successfully!");
        setFormData({
          Name: "",
          Email: "",
          Message: "",
        });
      }
    } catch (error) {
      console.error("Error!", error);
      toast.error("Form submission failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="Contact"
      className="px-6 lg:px-24 py-16 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        {/* Center the heading above both child divs */}
        <div className="w-full text-center mb-10">
          <h3 className="text-neutral-950 dark:text-neutral-100 font-bold text-2xl sm:text-3xl md:text-4xl">
            Contact Us
          </h3>
        </div>

        {/* The two flex child divs */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-3xl font-semibold text-black dark:text-white mb-6">
              To make requests for further information, contact us via our
              social channels.
            </h1>
            <p className="flex items-center mb-2 text-black dark:text-gray-200">
              <i className="fas fa-clock text-black dark:text-white text-lg mr-2"></i>
              We need a couple of hours! No more than 2 working days since
              receiving your issue ticket.
            </p>
            <p className="flex items-center mb-2 text-black dark:text-gray-200">
              <Mail className="h-4 w-4 mr-2" /> help@gmail.com
            </p>
            <p className="flex items-center mb-2 text-black dark:text-gray-200">
              <Phone className="h-4 w-4 mr-2" /> 8016525211
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white dark:bg-gray-800 p-8 rounded-md shadow-md"
            >
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="Enter your name"
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter your email"
                required
                value={formData.Email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md flex justify-center items-center hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                desabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin text-center" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
