"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Button } from "./ui/moving-border";

const data = [
  {
    id: 1,
    img: "/pngs/pic1.jpg",
  },
  {
    id: 2,
    img: "/pngs/pic2.jpg",
  },
  {
    id: 3,
    img: "/pngs/pic3.jpg",
  },
  {
    id: 4,
    img: "/pngs/pic4.jpg",
  },
];

const Hero = () => {
  return (
    <div id="Home" className="w-full h-screen">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="relative w-full h-screen">
              <div className="relative w-full h-full">
                <Image
                  src={item.img}
                  width={1920}
                  height={1281}
                  alt="Images"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 text-center w-full">
        <h1 className="text-3xl md:text-5xl text-white font-sans font-bold text-center w-full md:w-10/12 lg:w-8/12 px-4 md:px-0">
          Drive innovation with leading IT and industrial engineering expertise
        </h1>

        <p className="text-neutral-200 w-full md:w-10/12 lg:w-8/12 px-4 md:px-0 mx-auto my-4 md:my-8 text-sm md:text-lg">
          Welcome to our company, where we specialize in providing cutting-edge
          IT and industrial engineering solutions to drive innovation in your
          business.
        </p>

        <div className="flex flex-col justify-center items-center mt-3">
          <Link to="Contact" duration={500} smooth={true}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-auto text-xl"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
