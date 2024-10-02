"use client"; // To mark this component as a Client Component

import React, { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx3y_EUJGP6MFF83thU6PSHT-WteFqcrY3_ddbOSSBwjgzosRFD9oNP5cPC3Zkrwv_p/exec";

    // Create a new FormData object to include the form fields and current date
    const formData = new FormData(formRef.current);
    const currentDate = new Date().toLocaleString(); // Get the current date and time as a string
    formData.append("Date", currentDate); // Append the date to the form data

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        console.log("Success!", response);
        const messageElement = document.getElementById("msg");
        messageElement.textContent = "Form submitted successfully!";
        messageElement.style.color = "green";

        // Clear the form after successful submission
        formRef.current.reset();

        // Hide the message after 5 seconds
        setTimeout(() => {
          messageElement.textContent = "";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        const messageElement = document.getElementById("msg");
        messageElement.textContent = "Form submission failed!";

        // Hide the error message after 5 seconds
        setTimeout(() => {
          messageElement.textContent = "";
        }, 5000);
      });
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
              <i className="fas fa-envelope text-black dark:text-white text-lg mr-2"></i>
              help@gmail.com
            </p>
            <p className="flex items-center mb-2 text-black dark:text-gray-200">
              <i className="fas fa-phone-square-alt text-black dark:text-white text-lg mr-2"></i>
              8016525211
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              name="submit-to-google-sheet"
              className="w-full bg-white dark:bg-gray-800 p-8 rounded-md shadow-md"
            >
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
              <textarea
                name="Message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              >
                Submit
              </button>
            </form>
            <span id="msg"></span> {/* Message element */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
