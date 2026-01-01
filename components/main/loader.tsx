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
                    setTimeout(() => setIsVisible(false), 300); // Shorter exit time
                    return 100;
                }
                const increment = Math.random() > 0.8 ? 5 : 2; // Faster, dynamic increment
                return Math.min(prev + increment, 100);
            });
        }, 20); // Faster interval

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
                >
                    {/* High-energy background video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-screen"
                    >
                        <source src="/videos/blackhole.webm" type="video/webm" />
                    </video>

                    {/* Glowing radial gradient for center focus */}
                    <div className="absolute inset-0 bg-radial-gradient from-purple-500/20 via-transparent to-transparent" />

                    {/* Grainy overlay for a premium feel */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo with intense outer glow */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 relative"
                        >
                            <div className="absolute inset-0 blur-[30px] bg-purple-500/50 rounded-full animate-pulse" />
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={120}
                                height={120}
                                className="w-28 h-28 relative drop-shadow-[0_0_20px_rgba(112,0,255,1)]"
                            />
                        </motion.div>

                        {/* Premium typography */}
                        <div className="flex flex-col items-center gap-2">
                            <motion.h1
                                initial={{ letterSpacing: "0.5em", opacity: 0 }}
                                animate={{ letterSpacing: "0.2em", opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-white text-4xl font-black tracking-[0.2em] mb-2 font-inter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                            >
                                SYSTEM BOOT
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ delay: 0.4, duration: 1 }}
                                className="text-white text-[10px] mb-12 tracking-[0.5em] font-light uppercase"
                            >
                                Establishing Secure Deep-Space Link
                            </motion.p>
                        </div>

                        {/* Refined Progress Bar */}
                        <div className="w-72 h-[1px] bg-white/5 rounded-full overflow-hidden relative border border-white/10 box-content p-[2px] backdrop-blur-xl">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                            />
                            {/* Scanning beam effect */}
                            <motion.div
                                animate={{
                                    left: ["-100%", "100%"]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                        </div>

                        {/* Progress Percentage with Mono Font */}
                        <div className="mt-8 flex items-baseline gap-2">
                            <motion.span
                                key={progress}
                                className="text-white font-mono text-2xl font-bold tracking-tighter"
                            >
                                {progress.toString().padStart(3, '0')}
                            </motion.span>
                            <span className="text-white/40 font-mono text-sm tracking-widest">%</span>
                        </div>
                    </div>

                    {/* Technical HUD borders */}
                    <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-purple-500/40 rounded-tl-2xl"></div>
                    <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-purple-500/40 rounded-tr-2xl"></div>
                    <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-purple-500/40 rounded-bl-2xl"></div>
                    <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-purple-500/40 rounded-br-2xl"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
