"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const infoItems = [
    {
        title: "Hva er Inner Circle?",
        content: "En InnerCircle gruppe er en samling erfarne forretningsfolk som samles annenhver uke. Dette er en spennende arena for nye businessmuligheter, deling av erfaringer og ikke minst det å kunne hjelpe hverandre i en hektisk og krevende hverdag ved behov."
    },
    {
        title: "Hvem passer det for?",
        content: "For å være med i InnerCircle må du enten eie virksomheten du representere, eller være leder. Er det en større virksomhet er det ikke avgjørende at du er toppleder, men du må ha beslutningsmyndighet."
    },
    {
        title: "Hvordan blir jeg medlem?",
        content: "Som utgangspunkt kommer det kun inn nye partnere i gruppen ved at en av de faste inviterer en av sine relasjoner. Alternativt kan du søke direkte, og vi vil gjennomføre en samtale før du eventuelt inviteres som gjest."
    },
    {
        title: "Hvordan er opptaksprosessen?",
        content: "Når du har vært med på 1-2 lunsjer kan du gi tilbakemelding om din interesse. Alle faste partnere i gruppen får en uke på å gi tilbakemelding. Det skal ikke være direkte konkurrerende virksomheter i gruppen."
    },
    {
        title: "Hva koster det?",
        content: "Medlemskapet koster 18.900,- pr år + mva. Dette inkluderer deltakelse i alle møter og lunsjservering."
    },
    {
        title: "Hvor og når er møtene?",
        content: "For tiden bruker vi Delicatessen Aker Brygge som møtested i Oslo. Lunsjen starter 11:30 og varer til 13:00."
    }
];

const InfoSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
                    Ofte stilte <span className="text-silver-400">spørsmål</span>
                </h2>

                <div className="space-y-4">
                    {infoItems.map((item, index) => (
                        <div
                            key={index}
                            className={`group border border-zinc-800 rounded-2xl bg-zinc-900/40 overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-silver-500/50 bg-zinc-900' : 'hover:border-zinc-700'}`}
                        >
                            <button
                                onClick={() => toggleOpen(index)}
                                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                            >
                                <span className={`text-lg font-medium pr-8 transition-colors ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>
                                    {item.title}
                                </span>
                                <span className={`text-silver-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out px-6 text-zinc-400 font-light leading-relaxed overflow-hidden ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
