import { MdLocationOn, MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="mx-auto md:ml-20 md:mr-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div>
          <h1 className="text-2xl font-bold font-mono mb-4">
            OC<span className="text-gray-400">tech</span>
          </h1>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Suspendisse dictumst turpis
            consequat libero eget turpis at mauris integer.
          </p>
          <div className="flex gap-3 mt-8">
            <Image
              src="/pngs/msme1.jpg"
              alt="msme certified"
              width={80}
              height={80}
              className="rounded"
            />
            <Image
              src="/pngs/msme2.jpg"
              alt="iso certified"
              width={80}
              height={80}
              className="rounded"
            />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="mb-2 font-bold text-gray-400">Useful Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information & Newsletter */}
        <div>
          <div className="mb-4">
            <h3 className="mb-2 font-bold text-gray-400">Get In Touch</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="flex gap-2 items-center">
                <MdLocationOn size={25} className="text-gray-400" />
                India, Kol Street 78, India
              </li>
              <li className="flex gap-2 items-center">
                <FaPhoneAlt size={20} className="text-gray-400" />
                0208 993 4500
              </li>
              <li className="flex gap-2 items-center">
                <MdEmail size={25} className="text-gray-400" />
                info@steiner.io
              </li>
            </ul>
          </div>
          {/* Newsletter Form */}
          <div className="container text-white">
            <h2 className="font-bold mb-2 text-gray-400">Newsletter</h2>
            <p className="text-sm mb-4">Get the latest update</p>
            <form className="flex overflow-hidden rounded-full relative">
              <input
                type="email"
                className="newsletter-input px-4 py-2 outline-none flex-grow bg-white text-black placeholder-gray-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="newsletter-button bg-teal-600 hover:bg-teal-700 hover:scale-110 duration-300 text-white px-4 py-2 absolute right-0.5 top-0.5 rounded-full text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="my-6 border-gray-700" />
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
        <p className="text-sm">
          OCtech Made with ❤️ in India | Copyright © 2024,
        </p>
        <div className="flex space-x-4">
          <a href="#facebook" className="text-gray-400 hover:text-gray-300">
            <FaFacebook size={25} />
          </a>
          <a href="#linkedin" className="text-gray-400 hover:text-gray-300">
            <FaLinkedin size={25} />
          </a>
          <a href="#instagram" className="text-gray-400 hover:text-gray-300">
            <FaInstagram size={25} />
          </a>
          <a href="#youtube" className="text-gray-400 hover:text-gray-300">
            <FaYoutube size={25} />
          </a>
          <a href="#twitter" className="text-gray-400 hover:text-gray-300">
            <FaXTwitter size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
