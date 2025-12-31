"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
                >
                    {/* Background Video or Image for Space Vibe */}
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 h-full w-full object-cover opacity-50"
                    >
                        <source src="/videos/blackhole.webm" type="video/webm" />
                    </video>

                    {/* Grainy overlay for a premium feel */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo or Icon */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-8"
                        >
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="w-24 h-24 drop-shadow-[0_0_15px_rgba(112,0,255,0.8)]"
                            />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-white text-3xl font-bold tracking-widest mb-2 font-inter"
                        >
                            INITIALIZING SYSTEMS
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white/60 text-sm mb-12 tracking-[0.3em] font-light"
                        >
                            ESTABLISHING UPLINK...
                        </motion.p>

                        {/* Progress Bar Container */}
                        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative border border-white/5 box-content p-[1px]">
                            {/* Inner Progress */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                            />
                            {/* Glow effect */}
                            <motion.div
                                animate={{
                                    left: [`${progress - 10}%`, `${progress}%`],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute top-0 bottom-0 w-8 bg-white/20 blur-sm"
                            />
                        </div>

                        {/* Percentage */}
                        <motion.span
                            key={progress}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-white/80 font-mono text-sm tracking-widest"
                        >
                            {progress}%
                        </motion.span>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-purple-500/30"></div>
                    <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-purple-500/30"></div>
                    <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-purple-500/30"></div>
                    <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-purple-500/30"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
