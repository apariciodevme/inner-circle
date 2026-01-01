import React from 'react';
import { FaUserTie, FaUsers, FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <section className="relative py-24 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                            <h3 className="text-orange-300 text-sm font-bold tracking-widest uppercase mb-4">Om Inner Circle</h3>
                            <h2 className="text-3xl md:text-4xl text-white font-light mb-6 leading-tight">
                                Hvor ledere møtes for å <span className=" ">vokse sammen</span>
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-6 font-light">
                                En InnerCircle gruppe er en samling erfarne forretningsfolk som samles annenhver uke. Dette er en spennende arena for nye businessmuligheter, deling av erfaringer og ikke minst det å kunne hjelpe hverandre i en hektisk og krevende hverdag ved behov.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-white/80">
                                    <FaUserTie className="text-silver-400" /> Erfarne forretningsfolk
                                </div>
                                <div className="flex items-center gap-2 text-white/80">
                                    <FaUsers className="text-silver-400" /> Deling av erfaringer
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements behind */}
                        <div className="absolute top-10 -left-10 w-full h-full border border-blue-500/10 rounded-3xl -z-10 bg-zinc-900/20"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                        <div className="space-y-6 mt-12">
                            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5 hover:border-silver-500/30 transition-colors">
                                <div className="text-4xl font-thin text-white mb-2">15+</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-widest">Års Erfaring</div>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5 hover:border-silver-500/30 transition-colors">
                                <div className="text-4xl font-thin text-white mb-2">500+</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-widest">Ledere</div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-silver-600 p-6 rounded-2xl shadow-xl shadow-silver-900/20">
                                <div className="text-4xl font-thin text-white mb-2">100%</div>
                                <div className="text-sm text-white/60 uppercase tracking-widest font-semibold">Dedikasjon</div>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5 hover:border-silver-500/30 transition-colors">
                                <div className="text-4xl font-thin text-white mb-2">24/7</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-widest">Støtte</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
