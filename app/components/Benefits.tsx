import React from 'react';
import { FaBrain, FaHandshake, FaChartLine, FaShieldAlt } from "react-icons/fa";

const benefits = [
    {
        title: "Kunnskap",
        description: "Få tilgang til unik innsikt og lær av andres suksesser og feiltrinn i et trygt miljø.",
        icon: <FaBrain className="w-8 h-8 text-white" />
    },
    {
        title: "Nettverk",
        description: "Utvid ditt profesjonelle nettverk med beslutningstakere og eiere fra ulike bransjer.",
        icon: <FaHandshake className="w-8 h-8 text-white" />
    },
    {
        title: "Vekst",
        description: "Fokus på nye forretningsmuligheter og personlig utvikling som leder.",
        icon: <FaChartLine className="w-8 h-8 text-white" />
    },
    {
        title: "Trygghet",
        description: "Et konfidensielt forum hvor du kan diskutere utfordringer åpent og ærlig.",
        icon: <FaShieldAlt className="w-8 h-8 text-white" />
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-silver-500 uppercase tracking-widest mb-3">Fordeler</h2>
                    <h3 className="text-3xl md:text-5xl font-light mb-6">Hvorfor bli en del av <span className="text-silver-400">Inner Circle</span>?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-orange-300/50 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-6 bg-zinc-800/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-medium mb-3 text-white group-hover:text-orange-300 transition-colors">{item.title}</h4>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
