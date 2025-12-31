"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github: string;
  technologies: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
  technologies,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />

        {/* Technology Pills overlay */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-purple-200 backdrop-blur-md border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-cyan-200">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95"
          >
            <RxExternalLink className="h-4 w-4" />
            Live Project
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95"
          >
            <RxGithubLogo className="h-5 w-5" />
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};
