
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="inline-block bg-white/10 text-blue-900 font-semibold text-sm px-3 py-1 rounded-full border border-blue-900/20 mb-4 backdrop-blur-md">
              📊 10M+ Ad Spaces. One Smart Platform.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-black via-[#1a2e95] to-[#000d56] text-transparent bg-clip-text mt-6">
              Revolutionizing ATL Advertising
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Plan, buy, and track ATL ad campaigns with the power of AI. ADmyBRAND is the analytics-first marketplace for smart brands.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all shadow-lg shadow-black/10">
                Download ADify App
              </button>
              <a
                href="#ai-analytics"
                className="inline-block bg-white text-[#001E80] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-md shadow-blue-300/20"
              >
                Try AI-powered Analytics Tool
              </a>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};