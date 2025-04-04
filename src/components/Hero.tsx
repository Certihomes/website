import React, { useEffect, useRef } from 'react';
import { Home, Shield, Search, ArrowRight } from 'lucide-react';
import PropertySearch from './PropertySearch';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[85vh] bg-[#080808] overflow-hidden pt-16">
      {/* Art Deco Background */}
      <div ref={parallaxRef} className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="roadGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#edcf2e" stopOpacity="0" />
              <stop offset="50%" stopColor="#edcf2e" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#edcf2e" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Yellow Brick Road */}
          <path d="M0 600 Q480 500 960 600 Q1440 700 1920 600 L1920 1080 L0 1080 Z" 
                fill="#edcf2e" 
                fillOpacity="0.1" />
          
          {/* Road Glow Animation */}
          <path d="M0 620 Q480 520 960 620 Q1440 720 1920 620" 
                stroke="url(#roadGlow)" 
                strokeWidth="4"
                className="animate-pulse" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] opacity-90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="content-container min-h-[85vh] flex items-center">
          <div className="w-full max-w-[1200px] mx-auto py-8 md:py-12">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left pt-8 md:pt-0">
                {/* Animated Highlight */}
                <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="animate-pulse w-2 h-2 rounded-full bg-brand-gold"></span>
                  <span className="text-white/70 text-sm">AI-Powered Home Certification</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.2]">
                  <span className="block opacity-80">Know exactly</span>
                  <span className="relative inline-block">
                    what you're
                    <div className="absolute inset-x-0 -bottom-1 h-3 bg-gradient-to-r from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 skew-x-12 blur-sm"></div>
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">buying</span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
                  Experience a reimagined home-buying journey powered by AI certification, 
                  ensuring unprecedented transparency and peace of mind.
                </p>

                <PropertySearch />
              </div>

              {/* Right Column - Feature Cards */}
              <div className="relative w-full lg:w-[400px] space-y-6">
                {[
                  { icon: Home, title: "AI Certification", desc: "Powered by advanced algorithms" },
                  { icon: Shield, title: "Smart Protection", desc: "Blockchain-verified ownership" },
                  { icon: Search, title: "Deep Analytics", desc: "Predictive market insights" }
                ].map((feature, i) => (
                  <div 
                    key={i}
                    className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all duration-500"
                    style={{ transform: `translateX(${i * 20}px)` }}
                  >
                    <div className="relative z-10">
                      <feature.icon className="h-7 w-7 text-brand-gold mb-4" />
                      <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 to-brand-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}