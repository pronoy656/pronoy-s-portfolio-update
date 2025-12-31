"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SparklesIcon, AcademicCapIcon, TrophyIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

const CERTIFICATIONS = [
    {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        year: "2023",
        description: "In-depth course covering React, Node.js, and modern CSS frameworks.",
        link: "https://drive.google.com/drive/folders/1placeholder",
    },
    {
        title: "JavaScript Algorithms & Data Structures",
        issuer: "FreeCodeCamp",
        year: "2022",
        description: "Advanced problem solving and algorithm implementation in JavaScript.",
        link: "https://drive.google.com/drive/folders/2placeholder",
    },
];

const EXPERIENCE = [
    {
        title: "Full Stack Web Developer",
        company: "Freelance",
        duration: "2023 - Present",
        description: "Building responsive web applications using React, Next.js, and Tailwind CSS. Implementing robust backend solutions with Node.js and MongoDB.",
        skills: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    },
    {
        title: "Frontend Developer Intern",
        company: "Tech Solutions Ltd.",
        duration: "2022 - 2023",
        description: "Collaborated with the design team to create user-friendly interfaces. Optimized website performance and maintained legacy codebases.",
        skills: ["React", "JavaScript", "Redux", "CSS3"],
    },
];

export const Education = () => {
    const [activeTab, setActiveTab] = useState<"education" | "certification" | "experience">("experience");

    return (
        <section
            id="record"
            className="flex flex-col items-center justify-center z-[20]"
        >
            <h1 className="text-[40px] font-semibold text-white py-10 text-center">
                My Professional<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Journey</span>
            </h1>

            {/* Tab Buttons */}
            <div className="flex bg-[rgba(3,0,20,0.8)] backdrop-blur-xl border border-[#7042f88b] rounded-full p-1.5 mb-16 shadow-[0_0_20px_rgba(112,66,248,0.2)] scrollbar-hide overflow-x-auto max-w-[95vw] md:max-w-full">
                <button
                    onClick={() => setActiveTab("experience")}
                    className={`flex items-center gap-2 px-6 md:px-8 py-2.5 rounded-full transition-all duration-500 font-medium whitespace-nowrap ${activeTab === "experience"
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(112,66,248,0.5)]"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    <BriefcaseIcon className="h-5 w-5" />
                    Experience
                </button>
                <button
                    onClick={() => setActiveTab("education")}
                    className={`flex items-center gap-2 px-6 md:px-8 py-2.5 rounded-full transition-all duration-500 font-medium whitespace-nowrap ${activeTab === "education"
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(112,66,248,0.5)]"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    <AcademicCapIcon className="h-5 w-5" />
                    Education
                </button>
                <button
                    onClick={() => setActiveTab("certification")}
                    className={`flex items-center gap-2 px-6 md:px-8 py-2.5 rounded-full transition-all duration-500 font-medium whitespace-nowrap ${activeTab === "certification"
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(112,66,248,0.5)]"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    <TrophyIcon className="h-5 w-5" />
                    Certification
                </button>
            </div>

            <div className="relative flex flex-col items-center w-full max-w-[1200px] min-h-[500px]">
                {activeTab === "experience" && (
                    <div className="relative flex flex-col items-center w-full px-4">
                        {/* Vertical Center Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden md:block opacity-30 shadow-[0_0_15px_rgba(0,245,255,0.3)]" />

                        {EXPERIENCE.map((exp, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full mb-24 relative ${index % 2 === 0 ? "md:pr-10" : "md:pl-10 md:flex-row-reverse"}`}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
                                    whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
                                    className="group relative w-full md:w-[46%] p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/20 via-white/5 to-cyan-500/20 border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                                >
                                    <div className="relative bg-[rgba(15,10,36,0.6)] backdrop-blur-3xl rounded-2xl p-8 flex flex-col gap-4 overflow-hidden">
                                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-white/5 pb-4">
                                            <div className="flex flex-col">
                                                <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{exp.title}</h2>
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">{exp.company}</span>
                                            </div>
                                            <span className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-mono whitespace-nowrap">{exp.duration}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {exp.skills.map((skill) => (
                                                <span key={skill} className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Timeline Orb */}
                                <div className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-[4px] ${index % 2 === 0 ? "border-purple-600 shadow-[0_0_20px_#7042f8]" : "border-cyan-500 shadow-[0_0_20px_#00f5ff]"} hidden md:block z-10`} />
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "education" && (
                    <div className="relative flex flex-col items-center w-full px-4">
                        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden md:block opacity-30 shadow-[0_0_15px_rgba(0,245,255,0.3)]" />

                        {/* University Item */}
                        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-24 md:pr-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideInFromLeft(0.5)}
                                whileHover={{ scale: 1.02, rotate: -0.5 }}
                                className="group relative w-full md:w-[46%] p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/50 to-cyan-500/50"
                            >
                                <div className="relative h-full w-full bg-[rgba(15,10,36,0.8)] backdrop-blur-2xl rounded-2xl p-8 flex flex-col gap-6 overflow-hidden">
                                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-500" />

                                    <div className="flex justify-between items-start z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                                <AcademicCapIcon className="text-purple-400 h-7 w-7" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white tracking-tight">University</h2>
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider animate-pulse">Running</span>
                                    </div>

                                    <div className="flex flex-col gap-3 z-10">
                                        <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
                                            Bachelor&apos;s in Computer Science
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                            Actively exploring the depths of computer science, from core algorithms to modern software architecture. Focused on becoming a versatile engineer.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-[4px] border-purple-600 shadow-[0_0_20px_#7042f8] hidden md:block z-10" />
                            <div className="hidden md:block w-1/2" />
                        </div>

                        {/* HSC Item */}
                        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-24 md:pl-10">
                            <div className="hidden md:block w-1/2" />
                            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-[4px] border-cyan-500 shadow-[0_0_20px_#00f5ff] hidden md:block z-10" />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideInFromRight(0.5)}
                                whileHover={{ scale: 1.02, rotate: 0.5 }}
                                className="group relative w-full md:w-[46%] p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/50 to-purple-500/50"
                            >
                                <div className="relative h-full w-full bg-[rgba(15,10,36,0.8)] backdrop-blur-2xl rounded-2xl p-8 flex flex-col gap-6 overflow-hidden">
                                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-500" />

                                    <div className="flex justify-between items-start z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                                                <SparklesIcon className="text-cyan-400 h-7 w-7" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white tracking-tight">HSC</h2>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 z-10">
                                        <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
                                            Higher Secondary Certificate
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                            Built a strong foundation in analytical thinking and problem-solving through an intensive science curriculum.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {activeTab === "certification" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full px-10">
                        {CERTIFICATIONS.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30"
                            >
                                <div className="relative h-full w-full bg-[rgba(15,10,36,0.7)] backdrop-blur-3xl rounded-2xl p-8 flex flex-col gap-6 border border-white/5 overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all duration-700" />

                                    <div className="flex justify-between items-center z-10">
                                        <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                                            <TrophyIcon className="text-yellow-500 h-6 w-6" />
                                        </div>
                                        <span className="text-gray-500 text-sm font-mono tracking-tighter uppercase">{cert.year}</span>
                                    </div>

                                    <div className="flex flex-col gap-2 z-10">
                                        <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors duration-300">{cert.title}</h2>
                                        <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                            {cert.issuer}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mt-2 line-clamp-2">
                                            {cert.description}
                                        </p>
                                    </div>

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="z-10 mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-white font-semibold hover:from-purple-600/40 hover:to-cyan-600/40 hover:border-purple-500/60 transition-all duration-300 text-center shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(112,66,248,0.3)]"
                                    >
                                        View Certification
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
