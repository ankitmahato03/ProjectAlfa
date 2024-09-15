"use client"
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/moving-border";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Hero = () => {
  return (
    <div id="Home">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="h-[100vh] w-full relative flex flex-col items-center justify-center">
            <div className="max-w-2xl mx-auto p-4">
              <h1 className="text-lg md:text-5xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                Drive innovation with leading IT and industrial engineering
                expertise
              </h1>
              {/* */}
              <p className="text-neutral-500 max-w-lg mx-auto my-8 text-sm text-center relative">
                Welcome to our company, where we specialize in providing
                cutting-edge IT and industrial engineering solution to drive
                innovation in your bussiness.
              </p>
              <div className="flex flex-col justify-center items-center gap-2">
                <FaArrowDownLong size={50} />
                <Link to="Contact" duration={500} smooth={true}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default Hero;
