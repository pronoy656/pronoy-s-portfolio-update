"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { RxPerson, RxDownload, RxChevronDown, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-7xl font-bold text-white max-w-[620px] w-auto h-auto"
        >
          <span>
            Hi, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Pronoy pal{" "}
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-4xl font-bold text-white"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "MERN Stack Developer",
              1000,
              "Next.js Developer",
              1000,
              "React.js Developer",
              1000,
              "Programmer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Providing the best project experience.And I&apos;m always ready to take on new challenges. Passionate about creating innovative and user-friendly solutions.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex gap-5 mb-5"
        >
          <a href="https://www.linkedin.com/in/pronoy-pal/" target="_blank" rel="noreferrer" className="text-white hover:text-[#7042f8] transition duration-300">
            <RxLinkedinLogo className="w-8 h-8" />
          </a>
          <a href="https://github.com/pronoy656" target="_blank" rel="noreferrer" className="text-white hover:text-[#7042f8] transition duration-300">
            <RxGithubLogo className="w-8 h-8" />
          </a>
          <a href="mailto:contact@example.com" className="text-white hover:text-[#7042f8] transition duration-300">
            <SiGmail className="w-8 h-8" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-[#7042f8] transition duration-300">
            <FaFacebook className="w-8 h-8" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="text-white hover:text-[#7042f8] transition duration-300">
            <FaWhatsapp className="w-8 h-8" />
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-5"
        >
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:brightness-110 transition duration-300"
          >
            Hire Me
            <RxPerson className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 py-2 px-6 border border-[#7042f88b] bg-[rgba(112,66,248,0.38)] text-center text-white cursor-pointer rounded-lg hover:bg-[#7042f8] transition duration-300"
          >
            Download Resume
            <RxDownload className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>

      <motion.div
        variants={slideInFromTop}
        className="absolute -bottom-20 w-full flex justify-center items-center z-[20] cursor-pointer"
      >
        <div className="flex flex-col items-center bg-[rgba(15,10,36,0.5)]">
          <span className="text-white  mb-2">Scroll Down</span>
          <RxChevronDown className="text-white w-6 h-8 animate-bounce" />
        </div>
      </motion.div>
    </motion.div>
  );
};
