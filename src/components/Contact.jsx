"use client";
import { Loader2, Mail, Phone } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    const formDataWithDate = {
      ...data,
      date: new Date().toLocaleString(),
    };
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(formDataWithDate),
    });
    if (response.ok) {
      toast.success("Form submitted successfully!");
      reset();
    } else {
      console.error("Error!", response);
      toast.error("Form submission failed!");
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
              <Mail className="h-4 w-4 mr-2"/> help@gmail.com
            </p>
            <p className="flex items-center mb-2 text-black dark:text-gray-200">
              <Phone className="h-4 w-4 mr-2"/> 8016525211
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full bg-white dark:bg-gray-800 p-8 rounded-md shadow-md"
            >
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is Required",
                  maxLength: {
                    value: 20,
                    message: "Name cannot exceed 20 characters",
                  },
                })}
                className={`w-full px-4 py-3 border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } rounded-md mb-4 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "focus:ring-red-500"
                    : "focus:ring-black dark:focus:ring-white"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.name.message}
                </p>
              )}
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid Email Address",
                  },
                })}
                className={`w-full px-4 py-3 border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } rounded-md mb-4 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "focus:ring-red-500"
                    : "focus:ring-black dark:focus:ring-white"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.email.message}
                </p>
              )}
              <textarea
                rows="5"
                placeholder="Your Message"
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 100,
                    message: "Message should not exceed 100 characters",
                  },
                })}
                className={`w-full px-4 py-3 border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } rounded-md mb-4 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "focus:ring-red-500"
                    : "focus:ring-black dark:focus:ring-white"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.message.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md flex justify-center items-center hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                disabled={isSubmitting}
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
