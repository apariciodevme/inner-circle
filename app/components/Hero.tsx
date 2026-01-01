import React from 'react';

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-zinc-800/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                <div className="max-w-4xl space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-white">
                        Network For <span className="font-medium text-transparent bg-clip-text bg-linear-to-r from-slate-300 to-slate-600">Leaders</span>
                    </h1>

                    <div className="h-px w-24 bg-linear-to-r from-transparent via-white/60 to-transparent mx-auto opacity-60"></div>

                    <p className="py-6 font-light tracking-wide text-zinc-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
                        InnerCircle er det ultimate nettverket for ambisiøse ledere.<br className="hidden md:block" />
                        Få tilgang til <span className="text-white font-normal">erfaring</span>, <span className="text-white font-normal">kunnskap</span>, og <span className="text-white font-normal">støtte</span>.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                        <button className="btn btn-lg hover:bg-silver-200  bg-white opacity-80  text-black border-none rounded-full px-12 font-light tracking-wide transition-all duration-300 hover:scale-105 shadow-lg shadow-silver-500/20">
                            Apply for Membership
                        </button>
                        <button className="btn btn-lg btn-ghost text-white font-light tracking-wide hover:bg-white/5 rounded-full px-8">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-px h-16 bg-linear-to-b from-transparent via-white/70 to-transparent"></div>
            </div>
        </div>
    )
}

export default Hero