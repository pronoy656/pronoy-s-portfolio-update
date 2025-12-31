"use client";

import React, { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of items to show per view
  // In a real app, this would be dynamic based on window width
  // For simplicity, we'll implement the logic to shift the items
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h1 className="text-[40px] font-black text-white py-20 ">
        Project  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Showcase</span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-center max-w-[600px] -mt-14 mb-16 px-4 font-medium text-lg leading-relaxed"
      >
        Exploring the intersection of design, code, and cosmic creativity through
        <span className="text-purple-400 font-bold"> modern digital experiences</span>.
      </motion.p>

      <div className="w-full max-w-7xl px-4 lg:px-10 flex flex-col items-center gap-12">
        {/* Carousel Container */}
        <div className="w-full relative overflow-hidden h-full py-4">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / 3)}%` }} // Logic for desktop, but needs adjustment for mobile
            className="flex gap-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              width: `${(PROJECTS.length / 3) * 100}%`,
              display: 'flex'
            }}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <ProjectCard
                  src={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                  technologies={project.technologies}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dock Below the Cards */}
        <div className="flex items-center gap-6 mt-4 p-4 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl">
          <button
            onClick={prevProject}
            className="group p-3 rounded-2xl bg-black/40 text-white transition-all hover:bg-purple-500/20 hover:border-purple-500/50 border border-white/5 active:scale-90"
          >
            <RxChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="flex gap-2">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                  ? "w-10 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_#a855f7]"
                  : "w-2 bg-white/10 hover:bg-white/30"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="group p-3 rounded-2xl bg-black/40 text-white transition-all hover:bg-purple-500/20 hover:border-purple-500/50 border border-white/5 active:scale-90"
          >
            <RxChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
};
