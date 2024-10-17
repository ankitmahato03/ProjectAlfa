"use client";
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
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const Footer = () => {
  const [emailData, setEmailData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsLetter = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(emailData)) {
      toast.error("Invalid email address!");
      setLoading(false);
      return;
    }
    try {
      const sheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL_NEWSLETTER;
      console.log("Sheet URL", sheetURL);
      
      const formData = new FormData();
      formData.append("Email", emailData);
      formData.append("Date", new Date().toLocaleString());

      const response = await fetch(sheetURL, {
        method: "POST",
        body: formData,
      });
      console.log("Response", response);

      if (response.ok === true) {
        toast.success("Subscribed to newsletter successfully!");
      }
    } catch (error) {
      console.error("Error!", error);
      toast.error("Subscription to newsletter failed!");
    } finally {
      setEmailData("");
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Information */}
        <div>
          <h1 className="text-3xl font-bold font-mono mb-4">
            OC<span className="text-teal-400">tech</span>
          </h1>
          <p className="text-sm text-gray-300">
            Transforming Businesses Through Innovative Web Design, Development,
            and Software Services.
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

        {/* Useful Modals */}
        <div id="About">
          <h3 className="mb-4 font-bold text-gray-400 text-xl">Useful Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Modal>
                <ModalTrigger className="cursor-pointer text-white hover:text-teal-500">
                  About Us
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <div className="p-6 bg-white text-black rounded-lg overflow-y-auto max-h-[80vh] text-base">
                      <h2 className="text-2xl font-bold mb-4">About Us</h2>
                      <p>
                        At OC Tech, we are dedicated to empowering businesses
                        through a wide array of services that drive growth,
                        efficiency, and innovation. As a leading provider of
                        consulting, project management, digital transformation,
                        software engineering, and web development services, we
                        partner with organizations of all sizes to solve complex
                        challenges and deliver sustainable solutions.
                      </p>
                      <p>
                        Our team of experts is committed to understanding your
                        unique business needs and aligning our solutions to meet
                        your goals. Whether you’re looking to modernize your
                        operations, optimize your technology stack, or create
                        impactful digital experiences, OC Tech is here to help.
                      </p>

                      <h2>What We Do:</h2>
                      <ul>
                        <li>
                          <strong>Consulting Services:</strong> We offer
                          strategic consulting to help businesses navigate their
                          digital journeys. Our approach focuses on identifying
                          opportunities for improvement, streamlining processes,
                          and aligning technology initiatives with your core
                          objectives.
                        </li>
                        <li>
                          <strong>Project Management:</strong> We ensure your
                          projects are delivered on time, within scope, and on
                          budget. Our experienced project managers use proven
                          methodologies to execute projects efficiently,
                          minimizing risks and maximizing results.
                        </li>
                        <li>
                          <strong>Digital Transformation:</strong> Our digital
                          transformation services help businesses adopt the
                          latest technologies and digital processes to stay
                          competitive. From automating workflows to implementing
                          cutting-edge tools, we drive innovation and
                          transformation across your organization.
                        </li>
                        <li>
                          <strong>Software Engineering:</strong> At the heart of
                          OC Tech, our software engineering services are
                          designed to build robust, scalable, and innovative
                          software solutions that meet your evolving business
                          needs. We specialize in custom software development,
                          system integration, and product lifecycle management.
                        </li>
                        <li>
                          <strong>Web Development:</strong> We create
                          high-performing websites that are not only visually
                          appealing but also user-friendly and optimized for
                          success. Whether it’s a simple business site or a
                          complex web application, our development team ensures
                          your digital presence is impactful and aligned with
                          your brand.
                        </li>
                      </ul>

                      <h2>Our Mission:</h2>
                      <p>
                        At OC Tech, our mission is to help businesses thrive in
                        a digital-first world. By providing expert guidance and
                        delivering high-quality solutions, we aim to transform
                        how businesses operate and engage with their customers.
                        We are committed to innovation, collaboration, and
                        excellence in everything we do.
                      </p>

                      <h2>Why Choose Us:</h2>
                      <ul>
                        <li>
                          <strong>Client-Centered Approach:</strong> We take the
                          time to understand your business challenges and tailor
                          our solutions to fit your unique needs.
                        </li>
                        <li>
                          <strong>Proven Expertise:</strong> Our team comprises
                          seasoned professionals with expertise across various
                          industries and technologies.
                        </li>
                        <li>
                          <strong>End-to-End Solutions:</strong> From strategy
                          to execution, we provide end-to-end support for all
                          your digital, software, and business needs.
                        </li>
                        <li>
                          <strong>Results-Driven:</strong> We focus on
                          delivering tangible outcomes that drive real business
                          value.
                        </li>
                      </ul>

                      <p>
                        Let OC Tech be your partner in success as you embark on
                        your digital transformation journey.
                      </p>
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </li>
            <li>
              <Modal>
                <ModalTrigger className="cursor-pointer text-white hover:text-teal-400">
                  Terms & Conditions
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <div className="p-6 bg-white text-black rounded-lg overflow-y-auto max-h-[80vh]">
                      <h2 className="text-2xl font-bold mb-4">
                        Terms & Conditions
                      </h2>
                      <p className=" text-lg">
                        OCtech is a leading software development company that
                        offers top-rated Software Development Services due to
                        our vast experience, team of skilled professionals, key
                        business insights, and a dedicated working process.
                        OCtech is a leading software development company that
                        offers top-rated Software Development Services due to
                        our vast experience, team of skilled professionals, key
                        business insights, and a dedicated working process.
                        OCtech is a leading software development company that
                        offers top-rated Software Development Services due to
                        our vast experience, team of skilled professionals, key
                        business insights, and a dedicated working process.
                        OCtech is a leading software development company that
                        offers top-rated Software Development Services due to
                        our vast experience, team of skilled professionals, key
                        business insights, and a dedicated working process.
                        OCtech is a leading software development company that
                        offers top-rated Software Development Services due to
                        our vast experience, team of skilled professionals, key
                        business insights, and a dedicated working process.
                        OCtech is a leading software development company that
                        offers top-rated Software Development Services due to
                        our vast experience, team of skilled professionals, key
                        business insights, and a dedicated working process.
                      </p>
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </li>
            <li>
              <Modal>
                <ModalTrigger className="hover:text-teal-500 text-white cursor-pointer">
                  Privacy Policy
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <div className="p-6 bg-white rounded-lg text-black overflow-y-auto max-h-[80vh] text-base">
                      <h2 className="text-2xl font-bold mb-4">
                        Privacy Policy
                      </h2>
                      <p>
                        This website is administered by OCtech. At OCtech
                        (together with its subsidiaries and affiliates, “OCtech”
                        or “We”), your privacy is very important to us. The
                        primary purpose of OCtech.com is to be a dynamic
                        resource and business tool to assist you in
                        understanding OCtech offerings and matching your needs
                        and requirements with OCtech&apos;s services. It is also
                        utilized as a portal for current and future employees to
                        provide and access information in a secure and
                        controlled way. We want you to feel secure when visiting
                        our site and are committed to maintaining your privacy
                        when doing so. This Privacy Policy (“Policy”) describes
                        and governs our use and disclosure of the information we
                        collect through our website:{" "}
                        <a href="https://www.OCtech.com" target="_blank">
                          https://www.OCtech.com
                        </a>{" "}
                        (the “site”), as well as information that we collect
                        through other means about people who contact us,
                        customers, suppliers, and prospective investors and
                        employees (“you” or “your”).
                      </p>

                      <h2 className="font-bold mt-1">
                        Legal Basis for Gathering and/or Processing Your
                        Information:
                      </h2>
                      <ul className="list-disc">
                        <li>
                          To assess the site’s effectiveness and usefulness to
                          those who enter the site and search its contents
                        </li>
                        <li>
                          To allow for application to positions posted on the
                          site
                        </li>
                        <li>
                          To periodically send promotional e-mails about our new
                          products and service offerings or other information
                          which we think you may find interesting using the
                          e-mail address that you have provided
                        </li>
                        <li>
                          To allow electronic submission of required paperwork
                        </li>
                        <li>
                          To respond to any query or complaint that you raise
                          with us
                        </li>
                        <li>To maintain our internal records.</li>
                      </ul>

                      <h2 className="font-bold mt-1">
                        Information We Collect:
                      </h2>
                      <h3 className="font-semibold">
                        Information Provided Directly to Us:
                      </h3>
                      <p>
                        We do not typically allow users to directly provide us
                        with their information or any “Personal Data” /
                        “Sensitive Personal Information” (as defined under
                        applicable laws) through the site. However, you may
                        provide us with information in order to access certain
                        services, provide services to us, or request further
                        information from OCtech. This information may include
                        your name, contact information, resume information,
                        payment information, or other personal details.
                      </p>

                      <h3 className="font-semibold">
                        Information Collected Indirectly or Automatically:
                      </h3>
                      <p>
                        For example, through Internet access logs, your Internet
                        address is automatically collected and placed in our
                        logs when you visit OCtech.com. We may also use
                        third-party analytics providers, cookies, and similar
                        tools to collect information such as:
                      </p>
                      <ul className="list-disc">
                        <li>
                          IP addresses, location information, unique device
                          identifiers, browser types, and the state or country
                          from which you accessed the site.
                        </li>
                        <li>
                          Information related to how you interact with the site,
                          including referring and exit web pages, URLs, platform
                          types, content viewed, error logs, and statistical
                          data.
                        </li>
                      </ul>

                      <h2 className="font-bold mt-1">
                        Legitimate Use and Transfers of Data:
                      </h2>
                      <p>
                        As a global organization, data collected may be
                        transferred internationally throughout OCtech’s
                        worldwide organization. We will ensure that all
                        transfers take place in accordance with applicable
                        privacy and data protection laws. We will not sell
                        individual information but may share it with affiliates,
                        subsidiaries, and service providers, where applicable,
                        and with your consent. Sensitive Personal Information
                        (Sensitive PII), if required, will be handled according
                        to regulations such as the GDPR and CCPA, and your
                        consent will be sought for any proposed uses of such
                        data.
                      </p>

                      <h2 className="font-bold mt-1">
                        Safeguard of Your Information:
                      </h2>
                      <p>
                        We take appropriate measures to safeguard your data on
                        OCtech.com. However, the open nature of the Internet
                        means that data may flow over networks without security
                        measures, potentially accessible by unauthorized
                        individuals. While we strive to protect your
                        information, we cannot guarantee 100% security for
                        transmissions.
                      </p>

                      <h2 className="font-bold mt-1">Retention Period:</h2>
                      <p>
                        We retain personal information as long as needed based
                        on:
                      </p>
                      <ul>
                        <li>
                          The length of time we maintain an ongoing relationship
                          with you
                        </li>
                        <li>Legal obligations we are subject to</li>
                        <li>
                          Retention for legal purposes such as regulatory
                          investigations or litigation.
                        </li>
                      </ul>

                      <h2 className="font-semibold">
                        Subscribe or Unsubscribe:
                      </h2>
                      <p>
                        You have the choice to access and use the site and
                        provide information as applicable (“Subscribe”). OCtech
                        may use the contact details you provide via forms to
                        send you information about products and services. You
                        can unsubscribe at any time by clicking the
                        “Unsubscribe” link in emails.
                      </p>

                      <h2 className="font-bold mt-1">
                        Questions About this Policy?
                      </h2>
                      <p>
                        For any questions regarding our Policy, please contact
                        us via our{" "}
                        <a
                          href="https://www.Octech.com/contact"
                          target="_blank"
                        >
                          Contact Us
                        </a>{" "}
                        page or write to us at{" "}
                        <a href="mailto:privacy@OCtech.com">
                          privacy@OCtech.com
                        </a>
                        .
                      </p>
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </li>
          </ul>
        </div>

        {/* Contact Information & Newsletter */}
        <div>
          <div className="mb-4">
            <h3 className="mb-4 font-bold text-xl text-gray-400">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex gap-2 items-center">
                <MdLocationOn size={20} className="text-gray-400" />
                India, Kol Street 78, India
              </li>
              <li className="flex gap-2 items-center">
                <FaPhoneAlt size={20} className="text-gray-400" />
                02089934500
              </li>
              <li className="flex gap-2 items-center">
                <MdEmail size={20} className="text-gray-400" />
                info@octech.com
              </li>
            </ul>
          </div>
          {/* Newsletter Form */}
          <div className="container text-white mt-6">
            <h2 className="text-xl font-bold mb-2 text-gray-400">Newsletter</h2>
            <p className="text-sm mb-4">Get the latest update</p>
            <form
              onSubmit={handleNewsLetter}
              className="flex overflow-hidden rounded-full relative"
            >
              <input
                type="email"
                value={emailData}
                className="newsletter-input px-4 py-2 outline-none flex-grow bg-white text-black placeholder-gray-500"
                placeholder="Enter your email"
                onChange={(e) => setEmailData(e.target.value)}
              />
              <button
                type="submit"
                className="newsletter-button bg-teal-600 hover:bg-teal-700 hover:scale-110 duration-300 text-white px-4 py-2 absolute right-0.5 top-0.5 rounded-full text-sm"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="my-6 border-gray-700" />
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
        <p className="text-sm">
          OCtech Made with ❤️ in India | Copyright © 2024
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
