"use client";

import React from "react";
import { motion } from "framer-motion";

export const Encryption = () => {
  const title = "Turning Cosmic Dreams Into Digital Reality";

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[600px] lg:min-h-screen w-full overflow-hidden">
      {/* Background Cinematic Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        {/* Overlay gradients for depth and readability */}
        <div className="absolute inset-0  backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center gap-4 lg:gap-8">
        <div className="flex flex-col items-center">
          {/* First Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-4 text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter"
          >
            {["Turning", "Cosmic", "Dreams"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={word === "Cosmic" || word === "Dreams"
                  ? "text-purple-500"
                  : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Second Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-4 text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter"
          >
            {["Into", "Digital", "Reality"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + (i * 0.1),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={word === "Digital" || word === "Reality"
                  ? "text-purple-500"
                  : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed italic opacity-80"
        >
          &ldquo;The best way to predict the future is to build it with precision and passion.&rdquo;
        </motion.p>

        {/* Decorative glowing element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_#a855f7]"
        />
      </div>
    </section>
  );
};
