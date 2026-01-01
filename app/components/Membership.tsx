import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Membership = () => {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background blur */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side: Membership Details */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <h4 className="tqext-orange-300 font-bold uppercase tracking-widest text-sm mb-2">Medlemskap</h4>
                            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Bli en del av <br /><span className="italic font-serif  text-white">Inner Circle</span></h2>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                Vi er selektive for å sikre høy kvalitet og relevans i nettverket. Medlemskap er invitasjonsbasert eller krever godkjenning.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start group">
                                <div className="mt-1 bg-zinc-900 p-2 rounded-full border border-white/10 group-hover:border-white/50 transition-colors">
                                    <span className="text-white font-bold px-2">1</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-medium text-lg">By Invitation Only</h5>
                                    <p className="text-zinc-500 font-light mt-1">
                                        Nye partnere inviteres vanligvis av eksisterende medlemmer.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="mt-1 bg-zinc-900 p-2 rounded-full border border-white/10 group-hover:border-white/50 transition-colors">
                                    <span className="text-white font-bold px-2">2</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-medium text-lg">Gjestebesøk</h5>
                                    <p className="text-zinc-500 font-light mt-1">
                                        Du kan delta som gjest på 1-2 lunsjer for å se om dette er noe for deg.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="mt-1 bg-zinc-900 p-2 rounded-full border border-white/10 group-hover:border-white/50 transition-colors">
                                    <span className="text-white font-bold px-2">3</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-medium text-lg">Aksept</h5>
                                    <p className="text-zinc-500 font-light mt-1">
                                        Eksisterende partnere godkjenner nye medlemmer for å unngå direkte konkurranse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Pricing Card */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:bg-zinc-900/70 hover:border-black">
                            <div className="absolute top-0 right-0 p-4">

                            </div>

                            <h3 className="text-2xl font-light text-white mb-2">Årlig Medlemskap</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-thin text-white">18.900,-</span>
                                <span className="text-zinc-500">+ mva</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-zinc-300 font-light">
                                    <FaCheckCircle className="text-silver-400 shrink-0" /> Tilgang til alle møter
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300 font-light">
                                    <FaCheckCircle className="text-silver-400 shrink-0" /> Lunsj inkludert
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300 font-light">
                                    <FaCheckCircle className="text-silver-400 shrink-0" /> Eksklusivt nettverk
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300 font-light">
                                    <FaCheckCircle className="text-silver-400 shrink-0" /> Faglig påfyll
                                </li>
                            </ul>

                            <button className="w-full btn btn-lg bg-white text-black hover:bg-silver-200 hover:text-black border-none rounded-xl transition-all duration-300">
                                Søk om Medlemskap
                            </button>
                            <p className="text-center text-zinc-600 text-xs mt-4">
                                Ingen bindingstid. Faktureres årlig.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Membership;
