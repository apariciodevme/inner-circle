import React from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20">
                                <img src="/inner-logo.jpg" alt="Inner Circle Logo" className="h-full w-full object-cover" />
                            </div>
                            <span className="text-xl font-light tracking-wide text-white">Inner Circle</span>
                        </div>
                        <p className="text-zinc-500 font-light leading-relaxed">
                            Nettverk for ledere.<br />
                            Erfaring – Kunnskap – Støtte.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Kontakt Oss</h4>
                        <ul className="space-y-4 text-zinc-400 font-light">
                            <li className="flex items-center gap-3 hover:text-silver-400 transition-colors cursor-pointer">
                                <FaEnvelope /> post@innercircle.no
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt /> Delicatessen Aker Brygge
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                        <button className="btn btn-outline border-white/20 text-white hover:bg-silver-200 hover:border-silver-200 hover:text-black rounded-full px-8 transition-all duration-300">
                            Logg inn på IC App
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-sm font-light">
                        © {new Date().getFullYear()} Inner Circle. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors"><FaLinkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
