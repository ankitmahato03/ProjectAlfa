import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="px-10 lg:px-32 py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto">
      <h3 className="text-neutral-950 dark:text-neutral-100 font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
          Contact Us
        </h3>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
            To make requests for
            further information,
            contact us via our social channels.
            </h1>
            <p className="flex items-center mb-4 text-black dark:text-gray-200">
              <i className="fas fa-envelope text-black dark:text-white text-lg mr-2"></i>          
                We need a couple of hours!
                No more than 2 working days since receiving your issue ticket.
            </p>
            <p className="flex items-center mb-4 text-black dark:text-gray-200">
              <i className="fas fa-envelope text-black dark:text-white text-lg mr-2"></i>
              help@gmail.com
            </p>
            <p className="flex items-center mb-4 text-black dark:text-gray-200">
              <i className="fas fa-phone-square-alt text-black dark:text-white text-lg mr-2"></i>
              8016525211
            </p>
            <div className="social-icons mt-6">
              <a
                href="https://twitter.com"
                className="text-black dark:text-white text-2xl mr-4 hover:text-gray-600 dark:hover:text-gray-400 transition duration-500 transform hover:translate-y-1"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-black dark:text-white text-2xl hover:text-gray-600 dark:hover:text-gray-400 transition duration-500 transform hover:translate-y-1"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <form
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
            <span id="msg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
