"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_DATA } from "@/constants";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <section className="relative w-full overflow-hidden pt-20">
            {/* Mirrored Astronaut Background Videos */}
            <div className="absolute inset-0 h-full flex z-[-1]">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-1/2 h-full object-cover opacity-90"
                >
                    <source src="/videos/Astronauts.webm" type="video/webm" />
                </video>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-1/2 h-full object-cover opacity-90 scale-x-[-1]"
                >
                    <source src="/videos/Astronauts.webm" type="video/webm" />
                </video>

            </div>
            {/* Top Gradient separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="w-full max-w-5xl mx-auto px-6 relative z-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-8 md:px-12 rounded-3xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl">
                    {/* Branding & Mission */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-tighter drop-shadow-lg">
                            Pronoy pal
                        </h2>
                        <p className="text-gray-200 text-sm leading-relaxed font-medium max-w-[280px]">
                            Exploring the vast frontiers of technology to craft elegant, interstellar digital experiences that propel your brand forward.
                        </p>
                        <div className="flex items-center gap-3 bg-white/5 self-start px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                            <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest animate-pulse">Orbiting Excellence</span>
                        </div>
                    </motion.div>

                    {/* Footer Links Columns */}
                    {FOOTER_DATA.map((column, colIndex) => (
                        <motion.div
                            key={column.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                            className="flex flex-col gap-8"
                        >
                            <h3 className="text-lg font-bold text-white uppercase tracking-[0.2em] relative inline-block">
                                {column.title}
                                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />
                            </h3>
                            <div className="flex flex-col gap-4">
                                {column.data.map(({ icon: Icon, name, link }) => (
                                    <Link
                                        key={`${column.title}-${name}`}
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                                    >
                                        <div className="relative overflow-hidden mr-4 p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                                            {Icon && (
                                                <Icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                                            )}
                                        </div>
                                        <span className="text-sm font-semibold tracking-wide border-b border-transparent group-hover:border-purple-500/30 pb-0.5 transition-all">
                                            {name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Footer Bottom */}
                <div className="mt-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 rounded-2xl backdrop-blur-2xl bg-black/40 border border-white/10 shadow-2xl transition-all hover:bg-black/50">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-10"
                    >
                        <div className="hidden lg:flex items-center gap-4 px-6 py-3 rounded-2xl bg-black/60 backdrop-blur-3xl border border-white/10 shadow-inner">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Current Zone</span>
                                <span className="text-xs text-purple-400 font-bold">Earth (IST)</span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm font-medium tracking-wide">
                            &copy; {new Date().getFullYear()} <span className="text-white font-bold underline underline-offset-4 decoration-purple-500/50">Pronoy pal</span>. All Systems GO.
                        </p>
                    </motion.div>

                    <div className="flex items-center gap-8">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-600/80 to-cyan-600/80 flex items-center justify-center text-xs text-white font-black shadow-2xl backdrop-blur-md hover:scale-110 hover:-translate-y-1 transition-all cursor-pointer group">
                                    <span className="group-hover:animate-pulse">{i}</span>
                                </div>
                            ))}
                        </div>
                        <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
                        <span className="text-xs text-gray-200 font-bold uppercase tracking-[0.2em] hidden sm:block animate-pulse">Crafting Impact</span>
                    </div>
                </div>
            </div>

            {/* Outer space glow effects */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-[100px] -z-10" />


        </section>
    );
};
