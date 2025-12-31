"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    RxEnvelopeClosed,
    RxMobile,
    RxGlobe,
    RxGithubLogo,
    RxLinkedinLogo,
    RxPaperPlane,
    RxTwitterLogo
} from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

export const CTA = () => {
    return (
        <section id="contact" className="relative w-full mb-40 flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-[40px] font-black text-white pt-20 pb-10">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Touch</span>
            </h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-400 text-center max-w-[600px] mb-20 px-4 font-medium text-lg leading-relaxed"
            >
                Have a project in mind or just want to say hi? Feel free to reach out and let&apos;s
                <span className="text-purple-400 font-bold"> create something amazing</span> together.
            </motion.p>

            {/* Background Decorative Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full -z-10" />

            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />

            <div className="w-full max-w-7xl px-6 lg:px-10 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left Column: Contact Info */}
                <div className="flex flex-col gap-10 lg:w-1/2">
                    <div className="flex flex-col gap-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl lg:text-5xl font-black text-white tracking-tighter"
                        >
                            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Connect</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg font-medium max-w-lg leading-relaxed mt-4"
                        >
                            I&apos;m always excited to explore new opportunities, tackle creative challenges, or discuss how we can bring your next big project to life.
                        </motion.p>
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Contact Items */}
                        {[
                            { icon: RxEnvelopeClosed, label: "Email", value: "PronoyPaul56@gmail.com" },
                            { icon: RxMobile, label: "Phone", value: "+880 1843387800 (WhatsApp)" },
                            { icon: RxGlobe, label: "Location", value: "Dhaka, Bangladesh" },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center gap-5 group"
                                >
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300 shadow-lg shadow-purple-500/5">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
                                        <span className="text-white font-bold group-hover:text-purple-300 transition-colors">{item.value}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-6 pt-4">
                        <span className="text-gray-500 text-sm font-black uppercase tracking-[0.3em]">Follow Me</span>
                        <div className="flex gap-4">
                            {[
                                { icon: RxLinkedinLogo, href: "https://www.linkedin.com/in/pronoy-pal/" },
                                { icon: RxGithubLogo, href: "https://github.com/pronoy656" },
                                { icon: FaFacebook, href: "https://facebook.com" },
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all shadow-xl"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column: Message Form */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a1a]/40 backdrop-blur-2xl p-8 lg:p-12 shadow-2xl"
                    >
                        {/* Subtle Inner Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[60px] -z-10" />

                        <div className="flex flex-col gap-8">
                            <h3 className="text-3xl font-black text-white tracking-tight">Send me a message</h3>

                            <form className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1">Message *</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell me about your project or just say hello!"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 py-5 text-white font-black uppercase tracking-widest transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] active:scale-95"
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        <RxPaperPlane className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <span>Send Message</span>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
