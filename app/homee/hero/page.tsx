"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HoverBorderGradientDemo from "../resume/page";

interface HerosectionProps {
  id?: string;
}

const Herosection: React.FC<HerosectionProps> = ({ id }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <div id={id} className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed Image at bottom-right corner */}
      <motion.div
        className="w-full flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={isScrolled ? "/images/n2-3.png" : "/images/n2.png"}
          alt="Picture of the author"
          width={100}
          height={100}
          className={`fixed z-[1] transition-all duration-500 ${
            isScrolled
              ? "bottom-0 right-0 opacity-40"
              : "bottom-0 left-0 opacity-100"
          }`}
        />
      </motion.div>

      {/* Main Content Container - Full Width */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between relative z-[2] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 lg:py-0">
        {/* Left Side - Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-start z-[3] mb-8 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="inline-block mb-6" variants={itemVariants}>
            <span className="text-neutral-400 dark:text-neutral-400 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
              Hello, I&apos;m
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight w-full"
            variants={itemVariants}
          >
            <span className="text-neutral-100 dark:text-neutral-100 block">
              Navindu
            </span>
            <span className="text-neutral-300 dark:text-neutral-300 block">
              Chathuranga
            </span>
          </motion.h1>

          <motion.div className="mb-6 w-full" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-200 dark:text-neutral-200 mb-4">
              Software Engineer
              <span className="mx-2 sm:mx-3 text-neutral-500 dark:text-neutral-500 text-base sm:text-lg md:text-xl lg:text-2xl">
                |
              </span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
                AWS Community Builder
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 dark:text-neutral-400 leading-relaxed max-w-2xl">
              Crafting elegant solutions through code. Passionate about building
              scalable applications and creating exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mb-8 w-full"
            variants={itemVariants}
          >
            {/* <div className="flex items-center gap-2 text-neutral-300 dark:text-neutral-300">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm sm:text-base">Available for opportunities</span>
            </div> */}
          </motion.div>

          <motion.div variants={itemVariants} className="w-full sm:w-auto">
            <HoverBorderGradientDemo />
          </motion.div>
        </motion.div>

        {/* Right Side - Image Container */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            {/* Animated Gradient Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neutral-800/30 via-neutral-700/20 to-transparent rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Image with hover effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-[3]"
            >
              <Image
                src="/images/file-7.png"
                alt="Picture of the author"
                width={1000}
                height={800}
                className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh] xl:max-h-[85vh] object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-400 z-[3]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-sm font-medium">Scroll</span>
        <motion.div
          className="w-6 h-10 border-2 border-neutral-600 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-neutral-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Herosection;
