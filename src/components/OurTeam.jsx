import React from "react";
import teamData from "@/data/ourTeam.json";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const OurTeam = () => {
  return (
    <section className="py-16 bg-gray-50" id="Team">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Meet Our Team
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center mx-auto">
          {teamData.ourTeams.map((item, _index) => (
            <div
              key={_index}
              className="bg-[#F6EACB] hover:bg-[#F1D3CE] p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-xs mx-auto"
              style={{ willChange: "transform, box-shadow" }} // Optimized for hover
            >
              <Image
                className="h-24 w-24 rounded-full mx-auto object-cover border-4 border-gray-300"
                src={item.image}
                alt={item.title}
                width={96}
                height={96}
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-center leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <FaLinkedin className="text-gray-700 hover:text-blue-700 transition duration-200" />
                <FaXTwitter className="text-gray-700 hover:text-blue-500 transition duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
