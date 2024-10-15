import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between bg-white py-16 px-6 lg:px-20 gap-8"
    >
      {/* Left Side Image */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
        <div className="inset-0 bg-gradient-to-r from-slate-500 to-slate-800 opacity-75 rounded-full transform -translate-x-12 translate-y-16 w-full h-full flex-1 justify-center items-center"></div>
        <Image
          src="/pngs/team-work.jpg"
          alt="Team working"
          width={500}
          height={500}
          className="z-10 rounded-full object-cover w-full h-full"
        />
      </div>

      {/* Right Side Content */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-3 leading-snug">
          We turn disruptions into competitive advantages for you.
        </h2>
        <p className="text-gray-600 mb-5">
          We carve out new possibilities every day. Where technology and human
          ingenuity converge to usher in new frontiers of
          innovation and relevance.
        </p>

        {/* Bullet Points */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            Client happiness
          </div>
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            Latest Technology
          </div>
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            Beautiful Products Design
          </div>
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            Better User Experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
